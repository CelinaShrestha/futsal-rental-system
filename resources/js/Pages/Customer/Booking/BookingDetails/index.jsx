import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FutsalDetail from "@/Components/FutsalDetail";
import { Inertia } from "@inertiajs/inertia";
import Button from "@/Components/Button";

function BookingDetails({ auth, booking }) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [canCancel, setCanCancel] = useState(false);

    useEffect(() => {
        checkCancellationEligibility();
    }, [booking]);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const convertTo12Hour = (time) => {
        const [hour, minute] = time.split(":");
        const hourInt = parseInt(hour, 10);
        const period = hourInt >= 12 ? "PM" : "AM";
        const hour12 = hourInt % 12 || 12; // Convert 0 to 12 for midnight
        return `${hour12}:${minute} ${period}`;
    };

    // Function to convert time range
    const convertTimeRange = (range) => {
        const [start, end] = range.split(" - ");
        return `${convertTo12Hour(start)} - ${convertTo12Hour(end)}`;
    };

    // Check if the booking can be cancelled
    const checkCancellationEligibility = () => {
        const bookingDateOnly = booking.booking_date.split("T")[0];

        const bookingDateTimeString = `${bookingDateOnly}T${booking.start_time}`;

        const bookingDateTime = new Date(bookingDateTimeString);

        const now = new Date();

        const timeDifference = bookingDateTime.getTime() - now.getTime();

        const hoursDifference = timeDifference / (1000 * 60 * 60);

        setCanCancel(hoursDifference > 24);
    };

    const handleCancel = () => {
        if (canCancel) {
            Inertia.post(route("booking.cancel"), { id: booking.id });
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="container mt-8 pb-20">
                <div className="flex flex-col lg:flex-row gap-12 justify-between ">
                    <div className="listing-info w-[750px]">
                        <h1 className=" text-xl font-bold text-text font-heading">
                            Your Booking Details
                        </h1>
                        <FutsalDetail
                            futsal_listing={booking.futsal_listings}
                            showFullDescription={showFullDescription}
                            toggleDescription={toggleDescription}
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="lg:min-w-[500px] h-fit pl-6 bg-gray-100 mt-20 rounded-md ">
                            <div className="user-info flex flex-col gap-4 text-justify my-4">
                                <h1 className="text-lg font-bold text-text font-heading">
                                    User Information
                                </h1>
                                <div className="flex flex-col gap-2">
                                    <p>
                                        Name:{" "}
                                        <span>
                                            {booking.user.firstName}{" "}
                                            {booking.user.lastName}
                                        </span>
                                    </p>
                                    <p>
                                        Phone Number:{" "}
                                        <span>
                                            {booking.user.contactNumber}
                                        </span>
                                    </p>
                                    <p>
                                        Email: <span>{booking.user.email}</span>
                                    </p>

                                    <p>
                                        Address:{" "}
                                        <span>{booking.user.address}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:min-w-[500px] h-fit pl-6 bg-gray-100 mt-12 rounded-md">
                            <div className="user-info flex flex-col gap-4 text-justify my-4">
                                <h1 className="text-lg font-bold text-text font-heading">
                                    Booking Details
                                </h1>
                                <div className="flex flex-col gap-2">
                                    <p>
                                        Date:{" "}
                                        <span>
                                            {formatDate(booking.booking_date)}
                                        </span>
                                    </p>
                                    <p>
                                        Day: <span>{booking.day}</span>
                                    </p>
                                    <p>
                                        Duration:{" "}
                                        <span>{booking.duration} minutes</span>
                                    </p>
                                    <p>
                                        Interval:{" "}
                                        <span>
                                            {convertTimeRange(
                                                `${booking.start_time} - ${booking.end_time}`
                                            )}
                                        </span>
                                    </p>
                                    <p>
                                        Price:{" "}
                                        <span>Rs. {booking.total_price}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            {booking.is_cancelled ? (
                                <p className="text-red-500 mt-2">
                                    Booking Cancelled
                                </p>
                            ) : (
                                <>
                                    {!canCancel && (
                                        <p className="text-accent-color mt-2">
                                            You cannot cancel the booking within
                                            24 hours of the scheduled time.
                                        </p>
                                    )}
                                    <Button
                                        variant="danger"
                                        onClick={handleCancel}
                                        disabled={!canCancel}
                                        className={`mt-8 ${
                                            canCancel
                                                ? "bg-accent-color hover:bg-white"
                                                : "bg-gray-400 cursor-not-allowed"
                                        }`}
                                    >
                                        Cancel Booking
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default BookingDetails;
