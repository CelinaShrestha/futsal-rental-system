import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import AuthDescription from "@/Components/AuthDescription";
import Button from "@/Components/Button";
import { Head, Link, useForm } from "@inertiajs/react";

export default function AdminLogin({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.login"));
    };

    return (
        <GuestLayout pageTitle="Login" size="sm">
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <AuthDescription className="mb-8">
                <p>Welcome back ! Login to book your Futsal.</p>
            </AuthDescription>
            <form onSubmit={submit}>
                <div>
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

                <div className="mt-4">
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        label="Password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 mb-8 flex justify-between">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>

                <div className="flex flex-col-reverse items-center justify-end gap-4">
                    <Link href={route("register")} className="link">
                        Don't have an account? Register
                    </Link>

                    <Button size="lg" disabled={processing}>
                        Login
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
