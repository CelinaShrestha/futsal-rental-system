import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { add } from "date-fns";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            firstName: user.firstName,
            lastName: user.lastName,
            contactNumber: user.contactNumber,
            address: user.address,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("vendor.profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="firstName" value="First Name" />

                    <TextInput
                        id="firstName"
                        className="mt-1 block w-full"
                        value={data.firstName}
                        onChange={(e) => setData("firstName", e.target.value)}
                        required
                        isFocused
                        autoComplete="firstName"
                    />

                    <InputError className="mt-2" message={errors.firstName} />
                </div>
                <div>
                    <InputLabel htmlFor="lastName" value="Last Name" />

                    <TextInput
                        id="lastName"
                        className="mt-1 block w-full"
                        value={data.lastName}
                        onChange={(e) => setData("lastName", e.target.value)}
                        required
                        isFocused
                        autoComplete="lastName"
                    />

                    <InputError className="mt-2" message={errors.lastName} />
                </div>
                <div>
                    <InputLabel
                        htmlFor="contactNumber"
                        value="Contact Number"
                    />

                    <TextInput
                        id="contactNumber"
                        className="mt-1 block w-full"
                        value={data.contactNumber}
                        onChange={(e) =>
                            setData("contactNumber", e.target.value)
                        }
                        required
                        isFocused
                        autoComplete="contactNumber"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.contactNumber}
                    />
                </div>
                <div>
                    <InputLabel htmlFor="address" value="Contact Number" />

                    <TextInput
                        id="address"
                        className="mt-1 block w-full"
                        value={data.address}
                        onChange={(e) => setData("address", e.target.value)}
                        required
                        isFocused
                        autoComplete="address"
                    />

                    <InputError className="mt-2" message={errors.address} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
