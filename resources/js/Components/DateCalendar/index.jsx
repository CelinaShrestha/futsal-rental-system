import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CustomCalendar() {
    const today = new Date();
    const [startDate, setStartDate] = useState(today);

    return (
        <Calendar
            onChange={setStartDate}
            value={startDate}
            minDate={today} // Set minDate to today's date
        />
    );
}
