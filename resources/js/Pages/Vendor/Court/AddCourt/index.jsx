import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import VendorLayout from "@/Layouts/VendorLayout";
import AuthDescription from "@/Components/AuthDescription";

export default function AddCourt({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        images: [], // Initialize with an empty array for multiple images
        location: "",
        price: "",
        short_description: "",
        long_description: "",
        capacity: "", // Initialize as an empty string
        facilities: null, // Initialize as an empty array
        contactNumber: "",
        altContactNumber: "",
    });

    const submit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log("Form submitted"); // Add a log statement to check if the function is called
        try {
            const response = await post(route("futsal-listings.store")); // Submit form data asynchronously
            console.log("Response:", response); // Log the response object
            if (response && response.status === 200) {
                console.log("Form submitted successfully");
            } else {
                console.log(
                    "Form submission failed:",
                    response ? response.data.message : "Unknown error"
                );
            }
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setData("images", [...data.images, ...files]); // Append new files to the existing array
    };

    const handleCapacityChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 0 && value <= 20) {
            // Check if value is a valid integer and non-negative
            setData("capacity", value);
        } else {
            setData("capacity", ""); // Clear the capacity field if the input is invalid
        }
    };

    return (
        <>
            <VendorLayout user={auth}>
                <div className="mt-8 container">
                    <AuthDescription className="container">
                        <p className="text-primary-color font-bold font-heading text-2xl">
                            Add Court
                        </p>
                    </AuthDescription>
                    <form onSubmit={submit}>
                        <div className="grid grid-cols-1 md:grid-cols-6 md:gap-x-12 mb-2">
                            <div className="md:col-span-3">
                                <TextInput
                                    id="title"
                                    name="title"
                                    label="Title"
                                    value={data.title}
                                    autoComplete="title"
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.title}
                                    className="mt-2"
                                />
                            </div>
                            <div className="md:col-span-3 flex flex-col gap-4">
                                <label htmlFor="images">Images</label>
                                <input
                                    id="images"
                                    name="images"
                                    type="file"
                                    onChange={handleFileChange}
                                    multiple // Allow multiple file selection
                                />

                                <InputError
                                    message={errors.images}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4 md:col-span-3">
                                <TextInput
                                    id="location"
                                    name="location"
                                    label="location"
                                    value={data.location}
                                    autoComplete="location"
                                    onChange={(e) =>
                                        setData("location", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.location}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4 md:col-span-3">
                                <TextInput
                                    id="price"
                                    name="price"
                                    label="price"
                                    value={data.price}
                                    autoComplete="price"
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.price}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4 md:col-span-6">
                                <TextInput
                                    id="short_description"
                                    name="short_description"
                                    label="Short description"
                                    type="textarea"
                                    value={data.short_description}
                                    autoComplete="short_description"
                                    onChange={(e) =>
                                        setData(
                                            "short_description",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.short_description}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4 md:col-span-6">
                                <TextInput
                                    id="long_description"
                                    name="long_description"
                                    label="Long description"
                                    type="textarea"
                                    value={data.long_description}
                                    autoComplete="long_description"
                                    onChange={(e) =>
                                        setData(
                                            "long_description",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.long_description}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4 md:col-span-3">
                                <TextInput
                                    id="capacity"
                                    name="capacity"
                                    label="Capacity"
                                    type="number"
                                    autoComplete="capacity"
                                    value={data.capacity} // Ensure controlled component behavior
                                    onChange={handleCapacityChange} // Use the custom handler
                                    required
                                />

                                <InputError
                                    message={errors.capacity}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4 md:col-span-3">
                                <TextInput
                                    id="facilities"
                                    name="facilities"
                                    label="Facilities"
                                    autoComplete="facilities"
                                    onChange={(e) =>
                                        setData(
                                            "facilities",
                                            e.target.value
                                                .split(",")
                                                .map((facility) =>
                                                    facility.trim()
                                                )
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.facilities}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4 md:col-span-3">
                                <TextInput
                                    id="contactNumber"
                                    name="contactNumber"
                                    label="contactNumber"
                                    value={data.contactNumber}
                                    autoComplete="contactNumber"
                                    onChange={(e) =>
                                        setData("contactNumber", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.contactNumber}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4 md:col-span-3">
                                <TextInput
                                    id="altContactNumber"
                                    name="altContactNumber"
                                    label="altContactNumber"
                                    value={data.altContactNumber}
                                    autoComplete="altContactNumber"
                                    onChange={(e) =>
                                        setData(
                                            "altContactNumber",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.altContactNumber}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <Button
                            size="lg"
                            disabled={processing}
                            className="w-[200px] mb-8"
                        >
                            Add Court
                        </Button>
                    </form>
                </div>
            </VendorLayout>
        </>
    );
}
