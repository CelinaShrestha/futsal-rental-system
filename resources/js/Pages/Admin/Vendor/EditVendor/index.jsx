import React from "react";
import { Head } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Button from "@/Components/Button";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import AdminLayout from "@/Layouts/AdminLayout";

function EditVendor({ auth, status, vendor }) {
    // const user = usePage().props.auth.user;
    console.log("Vendor:", vendor);

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            firstName: vendor.firstName,
            middleName: vendor.middleName,
            lastName: vendor.lastName,
            contactNumber: vendor.contactNumber,
            address: vendor.address,
            email: vendor.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("admin.vendor.profile.update", { id: vendor.id }));
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
                        Edit Vendor Profile
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Name: {vendor.firstName}
                    </p>
                </header>

                <form className="mt-6 space-y-6">
                    <div>
                        <TextInput
                            id="firstName"
                            className="mt-1 block w-full"
                            label="First Name"
                            value={data.firstName}
                            onChange={(e) =>
                                setData("firstName", e.target.value)
                            }
                            required
                            isFocused
                            autoComplete="firstName"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>
                    <div>
                        <TextInput
                            id="middleName"
                            className="mt-1 block w-full"
                            label="Middle Name"
                            value={data.middleName}
                            onChange={(e) =>
                                setData("middleName", e.target.value)
                            }
                            autoComplete="middleName"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>
                    <div>
                        <TextInput
                            id="lastName"
                            className="mt-1 block w-full"
                            label="Last Name"
                            value={data.lastName}
                            onChange={(e) =>
                                setData("lastName", e.target.value)
                            }
                            required
                            autoComplete="lastName"
                        />

                        <InputError className="mt-2" message={errors.name} />
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
                            id="address"
                            className="mt-1 block w-full"
                            label="Address"
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                            required
                            autoComplete="address"
                        />

                        <InputError className="mt-2" message={errors.address} />
                    </div>
                    <div>
                        <TextInput
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            label="Email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            autoComplete="username"
                        />

                        <InputError className="mt-2" message={errors.email} />
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

export default EditVendor;
