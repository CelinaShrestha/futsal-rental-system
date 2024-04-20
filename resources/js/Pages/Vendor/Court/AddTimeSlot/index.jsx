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
                {daysOfWeek.map((day, index) => (
                    <form key={index} className="flex flex-col">
                        {/* Day of the week */}
                        <h2 className="text-xl font-bold mb-2">{day}</h2>

                        {/* Form Content */}
                        <TextInput
                            label="Start Time"
                            type="time"
                            value={data.timeSlots[index].start_time}
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "start_time",
                                    e.target.value
                                )
                            }
                            required
                        />
                        <TextInput
                            label="End Time"
                            type="time"
                            value={data.timeSlots[index].end_time}
                            onChange={(e) =>
                                handleChange(index, "end_time", e.target.value)
                            }
                            required
                        />
                    </form>
                ))}

                {/* Submit Button */}
                <Button
                    className="w-[150px] place-self-center mt-4"
                    type="submit"
                    disabled={processing}
                    onClick={submit}
                >
                    {processing ? "Adding Court..." : "Add Court"}
                </Button>

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
