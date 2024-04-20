import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CustomCalendar() {
    const today = new Date();
    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(today.getDate() + 14); // Set date to two weeks ahead

    const [startDate, setStartDate] = useState(today);

    const handleDateChange = (date) => {
        setStartDate(date);
    };

    return (
        <div>
            <Calendar
                onChange={handleDateChange}
                value={startDate}
                minDate={today} // Set minDate to today's date
                maxDate={twoWeeksLater} // Set maxDate to two weeks later
            />
            <p>Selected Date: {startDate.toDateString()}</p>
        </div>
    );
}
