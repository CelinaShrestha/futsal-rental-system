import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import FutsalCard from "@/Components/FutsalCard";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import VendorLayout from "@/Layouts/VendorLayout";

export default function AddCourt({ auth}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        image: null,
        location: "",
        price: "",
        description: "",
    });

    const submit = (e) => {
        post(route("futsal-listings.store"));
    };
    return (
        <>
            <VendorLayout user={auth.user}>
                <form onSubmit={submit}>
                    <div>
                        <TextInput
                            id="title"
                            name="title"
                            label="title"
                            value={data.title}
                            autoComplete="title"
                            onChange={(e) => setData("title", e.target.value)}
                            required
                        />

                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <TextInput
                            id="image"
                            name="image"
                            type="file"
                            label="image"
                            autoComplete="image"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                            required
                        />

                        <InputError message={errors.image} className="mt-2" />
                    </div>

                    <div className="mt-4">
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

                    <div className="mt-4">
                        <TextInput
                            id="price"
                            name="price"
                            label="price"
                            value={data.price}
                            autoComplete="price"
                            onChange={(e) => setData("price", e.target.value)}
                            required
                        />

                        <InputError message={errors.price} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <TextInput
                            id="description"
                            name="description"
                            label="description"
                            value={data.description}
                            autoComplete="description"
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.description}
                            className="mt-2"
                        />
                    </div>
                    <Button size="lg" disabled={processing}>
                        Submit
                    </Button>
                </form>
            </VendorLayout>
        </>
    );
}
