import React from "react";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";

function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    let hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12; // Handle midnight (0:00)
    return `${hour}:${minutes} ${ampm}`;
}

function TimeSlot({ timeSlots, futsal_listing_id }) {
    console.log(timeSlots);

    const handleClick = () =>{
        console.log("Edit Time Slots Clicked");
        Inertia.visit(route("time-slots.edit", { id: futsal_listing_id }));
    }
    return (
        <div className="flex flex-col gap-2 items-end">
            <table className="mx-auto max-w-full table-auto w-full whitespace-no-wrap bg-white border-collapse font-normal">
                <thead>
                    <tr className=" border-b-2 border-gray-200 text-gray-700 text-center">
                        <th className="py-2 px-4">Day</th>
                        <th className="py-2 px-4">Time Interval</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map((timeSlot) => (
                        <tr
                            key={timeSlot.id}
                            className="border-b border-gray-200 bg-surface-color text-center"
                        >
                            <td className="py-2 px-4">{timeSlot.day}</td>
                            <td className="py-2 px-4">
                                {formatTime(timeSlot.start_time)} -{" "}
                                {formatTime(timeSlot.end_time)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button
                width="w-[170px]"
                className="text-nowrap my-4"
                onClick={handleClick}
            >
                Edit Time Slots
            </Button>
        </div>
    );
}

export default TimeSlot;
