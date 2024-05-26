import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Button from "@/Components/Button";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import AdminLayout from "@/Layouts/AdminLayout";

function EditCourt({ auth, status, futsal }) {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            title: futsal.title,
            location: futsal.location,
            contactNumber: futsal.contactNumber,
            altContactNumber: futsal.altContactNumber,
            short_description: futsal.short_description,
            long_description: futsal.long_description,
            price: futsal.price,
            facilities: futsal.facilities,
            images: futsal.images, // for new images
            longitude: futsal.longitude,
            latitude: futsal.latitude,
        });

    const [imagePreviews, setImagePreviews] = useState(
        futsal.images.map((image) => `/storage/${image}`)
    ); // Existing images with correct path

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = [...data.images, ...files]; // Combine existing and new images
        setData("images", newImages);

        const previews = files.map((file) => URL.createObjectURL(file));
        setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = data.images.filter((_, i) => i !== index);
        setData("images", updatedImages);

        const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
        setImagePreviews(updatedPreviews);
    };
    const submit = (e) => {
        e.preventDefault();
        console.log("Submitting data:", data);
        patch(route("admin.court.profile.update", { id: futsal.id }));
    };

    const cancel = (e) => {
        e.preventDefault();

        history.back();
    };

    return (
        <AdminLayout user={auth}>
            <section className="container my-12">
                <header>
                    <h2 className="text-xl font-bold text-primary-color font-heading">
                        Edit Court Details
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Name: {futsal.title}
                    </p>
                </header>

                <form className="mt-6 space-y-6" onSubmit={submit}>
                    <div>
                        <TextInput
                            id="title"
                            className="mt-1 block w-full"
                            label="Title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            autoComplete="title"
                        />
                        <InputError className="mt-2" message={errors.title} />
                    </div>
                    <div>
                        <TextInput
                            id="location"
                            className="mt-1 block w-full"
                            label="Location"
                            value={data.location}
                            onChange={(e) =>
                                setData("location", e.target.value)
                            }
                            autoComplete="location"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.location}
                        />
                    </div>
                    <div>
                        <TextInput
                            id="contactNumber"
                            className="mt-1 block w-full"
                            label="Contact Number"
                            value={data.contactNumber}
                            onChange={(e) =>
                                setData("contactNumber", e.target.value)
                            }
                            required
                            autoComplete="contactNumber"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.contactNumber}
                        />
                    </div>
                    <div>
                        <TextInput
                            id="altContactNumber"
                            className="mt-1 block w-full"
                            label="Alternate Contact Number"
                            value={data.altContactNumber}
                            onChange={(e) =>
                                setData("altContactNumber", e.target.value)
                            }
                            autoComplete="altContactNumber"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.altContactNumber}
                        />
                    </div>
                    <div>
                        <TextInput
                            id="short_description"
                            className="mt-1 block w-full"
                            label="Short Description"
                            value={data.short_description}
                            onChange={(e) =>
                                setData("short_description", e.target.value)
                            }
                            required
                            autoComplete="short_description"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.short_description}
                        />
                    </div>
                    <div>
                        <TextInput
                            id="long_description"
                            className="mt-1 block w-full"
                            label="Long Description"
                            value={data.long_description}
                            onChange={(e) =>
                                setData("long_description", e.target.value)
                            }
                            required
                            autoComplete="long_description"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.long_description}
                        />
                    </div>
                    <div>
                        <TextInput
                            id="price"
                            className="mt-1 block w-full"
                            label="Price"
                            value={data.price}
                            onChange={(e) => setData("price", e.target.value)}
                            required
                            autoComplete="price"
                        />
                        <InputError className="mt-2" message={errors.price} />
                    </div>
                    <div>
                        <TextInput
                            id="facilities"
                            className="mt-1 block w-full"
                            label="Facilities"
                            value={data.facilities}
                            onChange={(e) =>
                                setData("facilities", e.target.value)
                            }
                            required
                            autoComplete="facilities"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.facilities}
                        />
                    </div>
                    <div>
                        <TextInput
                            id="latitude"
                            className="mt-1 block w-full"
                            label="Latitude"
                            value={data.latitude}
                            onChange={(e) =>
                                setData("latitude", e.target.value)
                            }
                            required
                            autoComplete="latitude"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.latitude}
                        />
                    </div>
                    <div>
                        <TextInput
                            id="longitude"
                            className="mt-1 block w-full"
                            label="Longitude"
                            value={data.longitude}
                            onChange={(e) =>
                                setData("longitude", e.target.value)
                            }
                            required
                            autoComplete="longitude"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.longitude}
                        />
                    </div>

                    <div>
                        <InputLabel forInput="images" value="Images" />
                        <input
                            type="file"
                            id="images"
                            name="images"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                            className="mt-1 block w-full"
                        />

                        <InputError className="mt-2" message={errors.images} />
                        <div className="image-previews flex flex-wrap gap-2 mt-2">
                            {imagePreviews.map((src, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={src}
                                        alt={`Preview ${index + 1}`}
                                        className="w-24 h-24 object-cover"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            className="w-[100px]"
                            disabled={processing}
                            type="submit"
                        >
                            Save
                        </Button>
                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600">Saved.</p>
                        </Transition>
                        <Button
                            className="w-[100px]"
                            variant="danger"
                            disabled={processing}
                            onClick={cancel}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </section>
        </AdminLayout>
    );
}

export default EditCourt;
