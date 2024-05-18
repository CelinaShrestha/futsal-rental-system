import React, { useState, useEffect } from "react";
import CustomCalendar from "@/Components/DateCalendar";
import Button from "@/Components/Button";
import { useForm } from "@inertiajs/inertia-react";
import SelectInput from "@/Components/SelectInput";
import VendorLayout from "@/Layouts/VendorLayout";
import TextInput from "@/Components/TextInput";
import AuthDescription from "@/Components/AuthDescription";
import { Inertia } from "@inertiajs/inertia";

function AddDisableDate({ auth, futsal_listing, timeSlot }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startTimes, setStartTimes] = useState([]);
    const [endTimes, setEndTimes] = useState([]);
    const [selectedStartTime, setSelectedStartTime] = useState(null);
    const [selectedEndTime, setSelectedEndTime] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        booking_date: selectedDate.toISOString().split("T")[0],
        start_time: "",
        end_time: "",
        day: selectedDate.toLocaleDateString("en-US", { weekday: "long" }),
        reason: "",
    });

    useEffect(() => {
        // Increment selected date by one day
        const incrementedDate = new Date(selectedDate);
        incrementedDate.setDate(selectedDate.getDate() + 1);

        // Update form data when selected date changes
        const updatedBookingDate = incrementedDate.toISOString().split("T")[0];
        const updatedDay = selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
        });

        setData({
            ...data,
            booking_date: updatedBookingDate,
            day: updatedDay,
        });
    }, [selectedDate]);

    useEffect(() => {
        const daySlot = timeSlot.find(
            (slot) =>
                slot.day ===
                selectedDate.toLocaleDateString("en-US", { weekday: "long" })
        );
        if (daySlot) {
            const startTime = daySlot.start_time;
            const endTime = daySlot.end_time;
            // Assuming start and end times are in HH:mm format and time slots are in 30 minute intervals
            const times = generateTimeOptions(startTime, endTime);
            setStartTimes(times);
            setEndTimes([...times]);
        } else {
            setStartTimes([]);
            setEndTimes([]);
        }
    }, [selectedDate, timeSlot]);

    const generateTimeOptions = (start, end) => {
        const options = [];
        let currentTime = start;
        while (currentTime < end) {
            // Format the time as "HH:MM AM/PM"
            const formattedTime = formatTime(currentTime);
            options.push({ label: formattedTime, value: currentTime });
            currentTime = incrementTimeByThirtyMinutes(currentTime);
        }
        return options;
    };

    const formatTime = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        let formattedHours = hours % 12 || 12; // Convert 0 to 12
        const period = hours < 12 ? "AM" : "PM";
        formattedHours =
            formattedHours < 10 ? `0${formattedHours}` : formattedHours; // Add leading zero if necessary
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero if necessary
        return `${formattedHours}:${formattedMinutes} ${period}`;
    };

    const incrementTimeByThirtyMinutes = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        const date = new Date();
        date.setHours(hours, minutes + 30, 0);
        return date.toTimeString().substr(0, 5);
    };

    const handleStartTimeChange = (selectedOption) => {
        const startTimeValue = selectedOption.value; // Extract the value from the selected option
        setData("start_time", startTimeValue);
        setSelectedStartTime(selectedOption);

        // Filter end times to be after the selected start time
        const startIndex = startTimes.findIndex(
            (time) => time.value === startTimeValue
        );
        if (startIndex !== -1) {
            const filteredEndTimes = startTimes.slice(startIndex + 1);
            setEndTimes(filteredEndTimes);
            // If end time is before selected start time, reset end time
            if (
                data.end_time &&
                filteredEndTimes.every((time) => time.value !== data.end_time)
            ) {
                setData("end_time", "");
                setSelectedEndTime(null);
            }
        }
    };

    const handleEndTimeChange = (selectedOption) => {
        const endTimeValue = selectedOption.value; // Extract the value from the selected option
        setData("end_time", endTimeValue);
        setSelectedEndTime(selectedOption);
    };

    const handleBackClick = () => {
        Inertia.visit(window.history.back()); // Go back to the previous page
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route("vendor.disable.create", { id: futsal_listing.id }));
    };

    console.log("Data:", data);
    console.log("startTimes:", startTimes);
    console.log("endTimes:", endTimes);

    return (
        <VendorLayout user={auth}>
            <AuthDescription className="container my-6">
                <p className="text-primary-color font-bold font-heading text-2xl text-left">
                    Disable Date / Time
                </p>
            </AuthDescription>
            <div className="container mt-8 pb-20">
                <form onSubmit={handleSubmit}>
                    <CustomCalendar
                        selectedDate={selectedDate}
                        onDateChange={(date) => {
                            setSelectedDate(date);
                        }}
                    />
                    <SelectInput
                        label="Start Time"
                        options={startTimes}
                        value={selectedStartTime}
                        onChange={handleStartTimeChange}
                        isSearchable={false}
                        required
                    />
                    <SelectInput
                        label="End Time"
                        options={endTimes}
                        value={selectedEndTime}
                        onChange={handleEndTimeChange}
                        isSearchable={false}
                        required
                    />
                    <TextInput
                        type="textarea"
                        label="Reason"
                        value={data.reason}
                        onChange={(e) => setData("reason", e.target.value)}
                        required
                    />
                    <div className="flex gap-5">
                        <Button type="submit" disabled={processing}>
                            Add Disable Date
                        </Button>
                        <Button
                            type="button"
                            variant="danger"
                            onClick={handleBackClick}
                        >
                            Back
                        </Button>
                    </div>
                </form>
            </div>
        </VendorLayout>
    );
}

export default AddDisableDate;
