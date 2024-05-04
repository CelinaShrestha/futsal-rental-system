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

function DisabledDate({ futsal_listing }) {
    console.log(futsal_listing);
    const HandleOnClick = () => {
        console.log("Disable Date or Time");
        Inertia.visit(route("vendor.disable.index", { id: futsal_listing.id }));
    };
    return (
        <div className="flex flex-col gap-2 items-end">
            {futsal_listing.disabled_date_times.length > 0 && (
                <table className="mx-auto max-w-full table-auto w-full whitespace-no-wrap bg-white border-collapse font-normal">
                    <thead>
                        <tr className=" border-b-2 border-gray-200 text-gray-700 text-center">
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Interval</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {futsal_listing.disabled_date_times.map(
                            (disabledDate, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 bg-surface-color text-center"
                                >
                                    <td className="py-2 px-4">
                                        {disabledDate.date}
                                    </td>
                                    <td className="py-2 px-4">
                                        {formatTime(disabledDate.start_time)} -{" "}
                                        {formatTime(disabledDate.end_time)}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            )}
            <Button
                width="w-[200px]"
                onClick={HandleOnClick}
                className="text-nowrap my-4"
            >
                Disable Date or Time
            </Button>
        </div>
    );
}

export default DisabledDate;
