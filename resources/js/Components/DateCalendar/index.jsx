import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CustomCalendar({ onDateChange }) {
    const today = new Date();
    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(today.getDate() + 14); // Set date to two weeks ahead

    const [startDate, setStartDate] = useState(today);

    const handleDateChange = (date) => {
        setStartDate(date);
        // Call the onDateChange callback with the selected date
        if (typeof onDateChange === "function") {
            onDateChange(date);
        }
    };

    return (
        <div className="flex flex-col gap-4 text-center">
            <Calendar
                onChange={handleDateChange}
                value={startDate}
                minDate={today} // Set minDate to today's date
                maxDate={twoWeeksLater} // Set maxDate to two weeks later
            />
            <p className="font-semibold text-accent-color">
                {startDate.toDateString()}
            </p>
        </div>
    );
}
