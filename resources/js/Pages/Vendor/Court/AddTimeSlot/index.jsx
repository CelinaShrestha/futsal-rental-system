import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import VendorLayout from "@/Layouts/VendorLayout";

export default function TimeSlot({ auth, futsal_listings_id, vendor_id }) {
    const [daysOfWeek, setDaysOfWeek] = useState([
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]);

    const { data, setData, post, processing, errors, reset } = useForm({
        timeSlots: daysOfWeek.map((day) => ({
            day,
            start_time: "",
            end_time: "",
        })),
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
            const response = await post(
                route("time-slots.store", { id: futsal_listings_id }),
                {
                    timeSlots: data.timeSlots,
                }
            );
            reset();
            if (response && response.status === 201) {
                console.log("Time slots created successfully");
                setData("successMessage", "Time slots created successfully"); // Set success message
                reset(); // Reset the form after successful submission
            }
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    return (
        <>
            <VendorLayout user={auth}>
                <form onSubmit={submit} className="container ">
                    <table className="w-full my-12">
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {daysOfWeek.map((day, index) => (
                                <tr key={index}>
                                    <td>{day}</td>
                                    <td>
                                        <TextInput
                                            type="time"
                                            value={
                                                data.timeSlots[index].start_time
                                            }
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
                                            value={
                                                data.timeSlots[index].end_time
                                            }
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
                    <Button type="submit" disabled={processing} width="w-[170px]">
                        {processing ? "Adding Court..." : "Add Court"}
                    </Button>
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
