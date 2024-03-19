import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/AuthLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthDescription from "@/Components/AuthDescription";
import Button from "@/Components/Button";

export default function AdminRegister() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        console.log("submit");
        e.preventDefault();

        post(route("admin.register"));
    };

    return (
        <GuestLayout pageTitle="Register" size="lg">
            <Head title="Register" />
            <AuthDescription className="mb-8">
                <p>Join us and easily view and book futsal courts near you!</p>
            </AuthDescription>
            <form className="auth-form" onSubmit={submit}>
                <div className="grid grid-cols-1 md:grid-cols-6 md:gap-x-6 mb-2">
                    <div className="md:col-span-3">
                        <TextInput
                            id="name"
                            name="name"
                            label="name"
                            value={data.name}
                            autoComplete="name"
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="md:col-span-3">
                        <TextInput
                            id="email"
                            type="email"
                            label="Email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
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
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-4">
                    <Link href={route("login")} className="link">
                        Already registered?
                    </Link>

                    <Button size="lg" width="w-fit" disabled={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
