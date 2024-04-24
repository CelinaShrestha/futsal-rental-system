import VendorLayout from "@/Layouts/VendorLayout";
import React, { useState } from "react";
import Icon from "@/Components/Icon";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import ImageSlider from "@/Components/ImageSlider";
import CourtDescription from "@/Components/CourtDescription";
import RatingsList from "@/Components/RatingsList";
import TimeSlot from "@/Components/TimeSlots";
import { set } from "date-fns";
import DisabledDate from "@/Components/DisabledDate";

function ViewDetails({ auth, futsal_listing }) {
    console.log(futsal_listing);

    const [showOverview, setShowOverview] = useState(true);
    const [showRatings, setShowRatings] = useState(false);
    const [showTimeSlots, setShowTimeSlots] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleOverviewClick = () => {
        setShowOverview(true);
        setShowRatings(false);
        setShowTimeSlots(false);
    };

    const handleRatingsClick = () => {
        setShowOverview(false);
        setShowRatings(true);
        setShowTimeSlots(false);
    };

    const handleTimeSlotsClick = () => {
        setShowOverview(false);
        setShowRatings(false);
        setShowTimeSlots(true);
    };

    const handleDisabledDateClick = () => {
        setDisabled(true);
        setShowOverview(false);
        setShowRatings(false);
        setShowTimeSlots(false);
    };
    return (
        <VendorLayout user={auth}>
            <div className="FutsalDescription container my-12">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">
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

                    <h2 className="font-semibold place-self-center text-[20px]">
                        Rs {futsal_listing.price}/hr
                    </h2>
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
                <div className="flex my-4 max-w-sm text-nowrap ">
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
                    <Button
                        variant="link"
                        size="sm"
                        onClick={handleTimeSlotsClick}
                    >
                        Time Slots
                    </Button>
                    <Button
                        variant="link"
                        size="sm"
                        onClick={handleDisabledDateClick}
                    >
                        Disabled Dates
                    </Button>
                </div>
                {showOverview && (
                    <CourtDescription futsal_listing={futsal_listing} />
                )}
                {showRatings && <RatingsList />}
                {showTimeSlots && (
                    <TimeSlot
                        timeSlots={futsal_listing.time_slots}
                        futsal_listing_id={futsal_listing.id}
                    />
                )}
                {disabled && (
                    <DisabledDate
                       futsal_listing={futsal_listing}
                    />
                )}
            </div>
        </VendorLayout>
    );
}

export default ViewDetails;
