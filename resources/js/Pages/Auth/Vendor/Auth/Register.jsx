import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/AuthLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthDescription from "@/Components/AuthDescription";
import Button from "@/Components/Button";
import AdminLayout from "@/Layouts/AdminLayout";

export default function VendorRegister({auth}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        address: "",
        contactNumber: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        console.log("submit");
        e.preventDefault();

        post(route("admin.vendor.register"));
    };

    return (
        <AdminLayout user={auth}>
            <div className="my-12 lg:ml-4 lg:mr-12">
                <div className="container bg-surface-color p-8 rounded-lg">
                    <Head title="Register" />
                    <AuthDescription className="text-start">
                        <p className="text-primary-color font-bold font-heading text-2xl">
                            Add Vendors
                        </p>
                    </AuthDescription>
                    <form className="auth-form" onSubmit={submit}>
                        <div className="grid grid-cols-1 md:grid-cols-6 md:gap-x-6 mb-2">
                            <div className="md:col-span-2">
                                <TextInput
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    value={data.firstName}
                                    autoComplete="firstName"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("firstName", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.firstName}
                                    className="mt-2"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <TextInput
                                    id="middleName"
                                    name="middleName"
                                    label="Middle Name"
                                    value={data.middleName}
                                    autoComplete="middleName"
                                    onChange={(e) =>
                                        setData("middleName", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.middleName}
                                    className="mt-2"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <TextInput
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    value={data.lastName}
                                    autoComplete="lastName"
                                    onChange={(e) =>
                                        setData("lastName", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.lastName}
                                    className="mt-2"
                                />
                            </div>

                            <div className="md:col-span-3">
                                <TextInput
                                    id="username"
                                    name="username"
                                    label="Username"
                                    value={data.username}
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("username", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.username}
                                    className="mt-2"
                                />
                            </div>

                            <div className="md:col-span-3">
                                <TextInput
                                    id="email"
                                    type="email"
                                    label="Email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="md:col-span-3">
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    label="Password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="md:col-span-3">
                                <TextInput
                                    id="password_confirmation"
                                    label="Confirm Password"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            <div className="md:col-span-3">
                                <TextInput
                                    id="address"
                                    label="Address"
                                    name="address"
                                    value={data.address}
                                    autoComplete="address"
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.address}
                                    className="mt-2"
                                />
                            </div>

                            <div className="md:col-span-3">
                                <TextInput
                                    id="contactNumber"
                                    name="contactNumber"
                                    label="Contact Number"
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
                        </div>

                        <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-4">
                            <Button
                                size="lg"
                                width="w-fit"
                                disabled={processing}
                            >
                                Register
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
