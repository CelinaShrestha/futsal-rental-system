import React, { useState, useEffect } from "react";
import CustomCalendar from "@/Components/DateCalendar";
import Button from "@/Components/Button";
import { useForm } from "@inertiajs/inertia-react";
import TextInput from "@/Components/TextInput";
import VendorLayout from "@/Layouts/VendorLayout";

function AddDisableDate({ auth, futsal_listing, timeSlot }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [validStartTimes, setValidStartTimes] = useState([]);
    const [validEndTimes, setValidEndTimes] = useState([]);
    const { data, setData, post, processing, errors } = useForm({
        booking_date: selectedDate.toISOString().split("T")[0],
        start_time: "",
        end_time: "",
        day: selectedDate.toLocaleDateString("en-US", { weekday: "long" }),
        reason: "",
    });

    useEffect(() => {
        if (timeSlot && timeSlot.length > 0) {
            const selectedDaySlot = timeSlot.find(
                (slot) =>
                    slot.day ===
                    selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                    })
            );
            if (selectedDaySlot && selectedDaySlot.time_slots) {
                const startTimes = selectedDaySlot.time_slots.map(
                    (slot) => slot.start_time
                );
                const endTimes = selectedDaySlot.time_slots.map(
                    (slot) => slot.end_time
                );
                setValidStartTimes(startTimes);
                setValidEndTimes(endTimes);
            }
        }
    }, [selectedDate, timeSlot]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setData("date", date.toISOString().split("T")[0]); // Changed from 'booking_date' to 'date'
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await post(
                route("vendor.disable.create", { id: futsal_listing.id }),
                data
            );
            if (response && response.status === 201) {
                console.log("Disabled date added successfully");
            }
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    const handleStartTimeChange = (e) => {
        setData("start_time", e.target.value);
    };

    const handleEndTimeChange = (e) => {
        setData("end_time", e.target.value);
    };

    console.log(data, validStartTimes, validEndTimes, errors, processing);

    return (
        <VendorLayout user={auth}>
            <div className="container mt-8 pb-20">
                <div className="flex flex-col lg:flex-row gap-12 justify-end ">
                    <div className="booking-form lg:min-w-[500px] pl-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mt-6">
                                <p className="text-lg font-semibold text-text">
                                    Select a date
                                </p>
                                <div className="mt-4 flex flex-col items-center">
                                    <CustomCalendar
                                        onDateChange={handleDateChange}
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-lg font-semibold text-text">
                                    Start Time
                                </p>
                                <TextInput
                                    type="time"
                                    value={data.start_time}
                                    onChange={handleStartTimeChange}
                                    className="mt-2"
                                    min={
                                        validStartTimes.length > 0
                                            ? validStartTimes[0]
                                            : ""
                                    }
                                    max={
                                        validEndTimes.length > 0
                                            ? validEndTimes[
                                                  validEndTimes.length - 1
                                              ]
                                            : ""
                                    }
                                    required
                                />
                            </div>

                            <div className="mt-6">
                                <p className="text-lg font-semibold text-text">
                                    End Time
                                </p>
                                <TextInput
                                    type="time"
                                    value={data.end_time}
                                    onChange={handleEndTimeChange}
                                    className="mt-2"
                                    min={
                                        validStartTimes.length > 0
                                            ? validStartTimes[0]
                                            : ""
                                    }
                                    max={
                                        validEndTimes.length > 0
                                            ? validEndTimes[
                                                  validEndTimes.length - 1
                                              ]
                                            : ""
                                    }
                                    required
                                />
                            </div>
                            <div className="mt-6">
                                <p className="text-lg font-semibold text-text">
                                    Reason for Disabling
                                </p>
                                <TextInput
                                    type="text"
                                    value={data.reason}
                                    onChange={(e) =>
                                        setData("reason", e.target.value)
                                    }
                                    className="mt-2"
                                    required
                                />
                            </div>

                            <hr className="mt-6" />
                            <Button
                                variant="primary"
                                size="lg"
                                className="mt-6"
                                type="submit"
                                disabled={processing}
                            >
                                {processing
                                    ? "Adding Disable Date..."
                                    : "Add Disable Date"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </VendorLayout>
    );
}

export default AddDisableDate;
