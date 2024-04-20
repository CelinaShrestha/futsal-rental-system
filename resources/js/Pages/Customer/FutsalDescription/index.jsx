import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Icon from "@/Components/Icon";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import ImageSlider from "@/Components/ImageSlider";
import Booking from "../Booking";
import CourtDescription from "@/Components/CourtDescription";
import RatingsList from "@/Components/RatingsList";

export default function FutsalDescription({ futsal_listing, auth }) {
    const [showOverview, setShowOverview] = useState(true);
    const [showRatings, setShowRatings] = useState(false);

    const handleOverviewClick = () => {
        setShowOverview(true);
        setShowRatings(false);
    };

    const handleRatingsClick = () => {
        setShowOverview(false);
        setShowRatings(true);
    };
    const onClickHandler = () => {
        console.log("Book Now Clicked");
        Inertia.visit(route("book", { id: futsal_listing.id }));
    };

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
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={onClickHandler}
                        >
                            Book Now
                        </Button>
                    </div>
                </div>

                <div className="image">
                    {/* {futsal_listing.images.map((image, index) => (
                        <div key={index} className="carousel-image">
                            <img
                                src={`http://127.0.0.1:8000/storage/${image}`}
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    ))} */}
                    <ImageSlider images={futsal_listing.images} />
                </div>
                <div className="flex my-4 max-w-sm ">
                    <Button
                        variant="link"
                        size="sm"
                        onClick={handleOverviewClick}
                    >
                        Overview
                    </Button>
                    <Button
                        variant="link"
                        size="sm"
                        onClick={handleRatingsClick}
                    >
                        Ratings
                    </Button>
                </div>
                {showOverview && (
                    <CourtDescription futsal_listing={futsal_listing} />
                )}
                {showRatings && <RatingsList />}
            </div>
        </AuthenticatedLayout>
    );
}
