import React, { useState, useEffect } from "react";
import SelectInput from "@/Components/SelectInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CustomCalendar from "../../../Components/DateCalendar";
import Button from "@/Components/Button";

function Booking({ auth, futsal_listing, hours }) {
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [selectedInterval, setSelectedInterval] = useState(null);
    const [intervalOptions, setIntervalOptions] = useState([]);

    const durationOptions = [
        { value: "30", label: "30 minutes" },
        { value: "60", label: "60 minutes" },
        { value: "90", label: "90 minutes" },
        { value: "120", label: "120 minutes" },
    ];

    // Helper function to format time from 24h to 12h with AM/PM
    const formatTime12Hour = (time) => {
        let [hours, minutes] = time.split(":");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert hour from 24h to 12h format and adjust '00' to '12'
        return `${hours}:${minutes} ${ampm}`;
    };

    useEffect(() => {
        const formattedOptions = [];
        if (hours && hours.length > 0) {
            for (let i = 0; i < hours.length - 1; i++) {
                formattedOptions.push({
                    value: `${hours[i]}-${hours[i + 1]}`,
                    label: `${formatTime12Hour(hours[i])} - ${formatTime12Hour(
                        hours[i + 1]
                    )}`,
                });
            }
        }
        setIntervalOptions(formattedOptions);
    }, [hours]);

    const handleDurationChange = (option) => {
        setSelectedDuration(option);
    };

    const handleIntervalChange = (option) => {
        setSelectedInterval(option);
    };

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
                <div className="mt-6">
                    <p className="font-serif text-lg font-semibold text-text">
                        Select a date
                    </p>
                    <div className="mt-4">
                        <CustomCalendar
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <p className="font-serif text-lg font-semibold text-text">
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
                    <p className="font-serif text-lg font-semibold text-text">
                        Time Interval
                    </p>
                    <div className="mt-4">
                        <SelectInput
                            options={intervalOptions}
                            value={selectedInterval}
                            onChange={handleIntervalChange}
                            isSearchable={false}
                            required
                        />
                    </div>
                </div>

                <Button variant="primary" size="lg" className="mt-6">
                    Book Now
                </Button>
            </div>
        </AuthenticatedLayout>
    );
}

export default Booking;
