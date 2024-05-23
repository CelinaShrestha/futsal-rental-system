import React from "react";
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
            short_description: futsal.short_description,
            long_description: futsal.long_description,
            price: futsal.price,
            facilities: futsal.facilities,
            image: futsal.image,
        });

    const submit = (e) => {
        e.preventDefault();

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

                <form className="mt-6 space-y-6">
                    <div>
                        <TextInput
                            id="title"
                            className="mt-1 block w-full"
                            label="Title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            required
                            isFocused
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
                            id="image"
                            className="mt-1 block w-full"
                            label="Image"
                            value={data.image}
                            onChange={(e) => setData("image", e.target.value)}
                            required
                            autoComplete="image"
                        />

                        <InputError className="mt-2" message={errors.image} />
                    </div>

                    {/* {mustVerifyEmail && user.email_verified_at === null && (
                <div>
                    <p className="text-sm mt-2 text-gray-800">
                        Your email address is unverified.
                        <Link
                            href={route("verification.send")}
                            method="post"
                            as="button"
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Click here to re-send the verification
                            email.
                        </Link>
                    </p>

                    {status === "verification-link-sent" && (
                        <div className="mt-2 font-medium text-sm text-green-600">
                            A new verification link has been sent to
                            your email address.
                        </div>
                    )}
                </div>
            )} */}

                    <div className="flex items-center gap-4">
                        <Button
                            className="w-[100px]"
                            disabled={processing}
                            onClick={submit}
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
