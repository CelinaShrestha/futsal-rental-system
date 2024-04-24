import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import VendorLayout from "@/Layouts/VendorLayout";

export default function EditTimeSlot({ auth, timeSlots , futsal_listing_id }) {
    console.log(futsal_listing_id);
    const { data, setData, patch, processing, errors, reset } = useForm({
        timeSlots: timeSlots, // Initialize form data with existing time slots
        successMessage: null, // State to hold the success message
    });

    const handleChange = (index, field, value) => {
        const updatedTimeSlots = [...data.timeSlots];
        updatedTimeSlots[index][field] = value;
        setData("timeSlots", updatedTimeSlots);
    };

    const submit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await patch(
                route("time-slots.update", { id: futsal_listing_id }), // Adjust the route to match the update route
                {
                    timeSlots: data.timeSlots,
                }
            );
            reset();
            if (response && response.status === 200) {
                console.log("Time slots updated successfully");
                setData("successMessage", "Time slots updated successfully"); // Set success message
                reset(); // Reset the form after successful submission
            }
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    const cancel = (e) => {
        e.preventDefault();
        history.back();
    };

    return (
        <>
            <VendorLayout user={auth}>
                <form
                    onSubmit={submit}
                    className="container my-12 flex flex-col items-end"
                >
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.timeSlots.map((timeSlot, index) => (
                                <tr key={index}>
                                    <td>{timeSlot.day}</td>
                                    <td>
                                        <TextInput
                                            type="time"
                                            value={timeSlot.start_time}
                                            onChange={(e) =>
                                                handleChange(
                                                    index,
                                                    "start_time",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            type="time"
                                            value={timeSlot.end_time}
                                            onChange={(e) =>
                                                handleChange(
                                                    index,
                                                    "end_time",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex gap-4 mt-4">
                        <Button
                            type="submit"
                            disabled={processing}
                            width="w-[170px]"
                            className={"text-nowrap"}
                        >
                            {processing
                                ? "Updating Time Slots..."
                                : "Update Time Slots"}
                        </Button>

                        <Button
                            width="w-[170px]"
                            className="text-nowrap"
                            onClick={cancel}
                            variant="danger"
                        >
                            Cancel
                        </Button>
                    </div>
                </form>

                {/* Success Message */}
                {data.successMessage && (
                    <div
                        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
                        role="alert"
                    >
                        <strong className="font-bold">Success!</strong>
                        <span className="block sm:inline">
                            {" "}
                            {data.successMessage}
                        </span>
                    </div>
                )}
            </VendorLayout>
        </>
    );
}
