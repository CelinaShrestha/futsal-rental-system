import React, { useState, useEffect } from "react";
import SelectInput from "@/Components/SelectInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CustomCalendar from "../../../Components/DateCalendar";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";

function Booking({ auth, futsal_listing, timeSlot }) {
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [selectedInterval, setSelectedInterval] = useState(null);
    const [intervalOptions, setIntervalOptions] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showFullDescription, setShowFullDescription] = useState(false);

    // Update interval options when timeSlot or selectedDate changes
    useEffect(() => {
        if (selectedDuration) {
            handleDurationChange(selectedDuration);
        }
    }, [timeSlot, selectedDate]);

    const durationOptions = [
        { value: "30", label: "30 minutes" },
        { value: "60", label: "60 minutes" },
        { value: "90", label: "90 minutes" },
        { value: "120", label: "120 minutes" },
    ];

    const handleDurationChange = (option) => {
        setSelectedDuration(option);
        setSelectedInterval(null); // Reset selected interval

        // Filter time slots for the selected day
        const selectedDaySlot = timeSlot.find(
            (slot) =>
                slot.day ===
                selectedDate.toLocaleDateString("en-US", { weekday: "long" })
        );

        // Calculate time intervals based on duration
        const intervals = [];
        if (selectedDaySlot) {
            const startTime = new Date(
                `01/01/2000 ${selectedDaySlot.start_time}`
            );
            const endTime = new Date(`01/01/2000 ${selectedDaySlot.end_time}`);
            const duration = parseInt(option.value);

            let currentTime = startTime;
            while (currentTime < endTime) {
                const startTimeFormatted = currentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                currentTime.setMinutes(currentTime.getMinutes() + duration);
                const endTimeFormatted = currentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                intervals.push({
                    value: `${startTimeFormatted}-${endTimeFormatted}`,
                    label: `${startTimeFormatted}-${endTimeFormatted}`,
                });
            }
        }

        // Update interval options
        setIntervalOptions(intervals);
    };

    const handleIntervalChange = (option) => {
        setSelectedInterval(option);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const shortenDescription = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substr(0, maxLength) + " ... ";
    };

    const calculatePrice = () => {
        if (selectedDuration) {
            const durationInMinutes = parseInt(selectedDuration.value);
            const durationInHours = durationInMinutes / 60;
            return durationInHours * futsal_listing.price;
        }
        return 0;
    };

    const totalPrice = calculatePrice();

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="container mt-8 pb-20">
                <div className="flex flex-col lg:flex-row gap-12 justify-end ">
                    <div className="listng-indo">
                        <h1 className=" text-xl font-bold text-text font-heading">
                            Book your futsal!
                        </h1>
                        <div className="min-w-[200px] min-h-[200px] lg:w-[700px] lg:h-[400px] mt-8 ">
                            <img
                                src={`http://127.0.0.1:8000/storage/${futsal_listing.images[0]}`}
                                alt={futsal_listing.title}
                                className="w-full h-full object-cover rounded-sm"
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <span>
                                    <p className="text-lg text-text font-semibold">
                                        {futsal_listing.title}
                                    </p>
                                    <p className=" text-text ">
                                        {futsal_listing.location}
                                    </p>
                                </span>
                                <span className="">
                                    <p className="text-lg text-text font-semibold">
                                        Rs. {futsal_listing.price}/hr
                                    </p>
                                </span>
                            </div>
                            <div className="text-justify text-gray-700 leading-7 mt-6">
                                {showFullDescription
                                    ? futsal_listing.long_description
                                    : shortenDescription(
                                          futsal_listing.long_description,
                                          200
                                      )}

                                {showFullDescription ? (
                                    <span
                                        className="font-bold text-text cursor-pointer"
                                        onClick={toggleDescription}
                                    >
                                        Show Less
                                    </span>
                                ) : (
                                    <span
                                        className="font-bold text-text cursor-pointer"
                                        onClick={toggleDescription}
                                    >
                                        Read More
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="booking-form lg:min-w-[500px] pl-6">
                        <div className="mt-6">
                            <p className=" text-lg font-semibold text-text">
                                Select a date
                            </p>
                            <div className="mt-4 flex flex-col items-center">
                                <CustomCalendar
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-lg font-semibold text-text">
                                Duration
                            </p>
                            <div className="mt-4">
                                <SelectInput
                                    options={durationOptions}
                                    value={selectedDuration}
                                    onChange={handleDurationChange}
                                    isSearchable={false}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className=" text-lg font-semibold text-text">
                                Time Interval
                            </p>
                            <div className="mt-4">
                                <SelectInput
                                    options={intervalOptions}
                                    value={selectedInterval}
                                    isSearchable={false}
                                    onChange={handleIntervalChange}
                                    required
                                />
                            </div>
                        </div>

                        <hr className="mt-6" />
                        <div className="mt-6 flex items-center justify-between">
                            <p className=" text-md font-semibold text-text">
                                Total Price
                            </p>
                            <p className="mt-2 text-md text-text">
                                Rs. {totalPrice.toFixed(2)}{" "}
                                {/* Display total price */}
                            </p>
                        </div>
                        <Button variant="primary" size="lg" className="mt-6">
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Booking;
