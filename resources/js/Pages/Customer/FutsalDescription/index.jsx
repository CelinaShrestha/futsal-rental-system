import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Icon from "@/Components/Icon";
import Button from "@/Components/Button";

export default function FutsalDescription({ futsal_listing, auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="FutsalDescription container">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold">
                            {futsal_listing.title}
                        </h1>
                        <div className="flex gap-2">
                            <Icon
                                icon="location-dot"
                                size={20}
                                className="text-secondary-color"
                            />
                            <h2 className="text-secondary-color underline">
                                {futsal_listing.location}
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                        <h2 className="font-semibold">
                            Rs {futsal_listing.price}/hr
                        </h2>
                        <Button variant="secondary" size="sm">
                            Book Now
                        </Button>
                    </div>
                </div>

                <div className="carousel-image">
                    <img
                        src={`http://127.0.0.1:8000/storage/${futsal_listing.image}`}
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-5 mt-8">
                    <div>
                        <h2 className="font-semibold text-lg">Description</h2>
                        <p>{futsal_listing.description}</p>
                        {/* Other details of the futsal listing */}
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">Facilities</h2>
                        <p>*Facilities Listed*</p>
                        {/* Other details of the futsal listing */}
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">Contact Info</h2>
                        <p>*Contact Info*</p>
                        {/* Other details of the futsal listing */}
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">Location</h2>
                        <p>*Map Integration*</p>
                        {/* Other details of the futsal listing */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
