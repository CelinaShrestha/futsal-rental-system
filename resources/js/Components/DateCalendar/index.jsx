import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CustomCalendar({ selectedDate, onDateChange }) {
    const today = new Date();
    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(today.getDate() + 14); // Set date to two weeks ahead

    const handleDateChange = (date) => {
        console.log("Selected Date:", date); // Debug logging
        // Call the onDateChange callback with the selected date
        if (typeof onDateChange === "function") {
            onDateChange(date);
        }
    };

    return (
        <div className="flex flex-col gap-4 text-center">
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                minDate={today} // Set minDate to today's date
                maxDate={twoWeeksLater} // Set maxDate to two weeks later
            />
            <p className="font-semibold text-accent-color">
                {selectedDate.toDateString()}
            </p>
        </div>
    );
}
