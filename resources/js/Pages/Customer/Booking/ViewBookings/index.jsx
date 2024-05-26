import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import booking from "../../../../../assets/images/booking-page.jpg";
import Pill from "@/Components/Pill";
import Button from "@/Components/Button";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

function MyBookings({ auth, bookings }) {
    const [showUpcomingBookings, setShowUpcomingBookings] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const { data, setData, post, processing, reset, errors } = useForm({
        rating: 0,
        review: "",
        description: "",
    });

    function formatTime(timeString) {
        // Assuming timeString is in a different format
        const [hour, minute] = timeString.split(":");
        let formattedHour = parseInt(hour);
        let period = "AM";

        if (formattedHour >= 12) {
            period = "PM";
            if (formattedHour > 12) {
                formattedHour -= 12;
            }
        }

        return `${formattedHour}:${minute} ${period}`;
    }

    // Get today's date and time
    const today = new Date();
    const currentTime = `${today.getHours()}:${today.getMinutes()}:00`;

    // Filter out cancelled bookings
    const activeBookings = bookings.filter((booking) => !booking.is_cancelled);

    // Separate bookings into upcoming and history
    const upcomingBookings = [];
    const bookingHistory = [];

    activeBookings.forEach((booking) => {
        // Convert booking date to Date object
        const bookingDate = new Date(booking.booking_date);
        const bookingTime = booking.start_time;

        if (
            bookingDate > today ||
            (bookingDate.getDate() === today.getDate() &&
                bookingTime > currentTime)
        ) {
            // Booking is upcoming
            upcomingBookings.push(booking);
        } else {
            // Booking is in the past
            bookingHistory.push(booking);
        }
    });

    const openModal = (booking) => {
        setSelectedBooking(booking); // Set the selected booking to the state
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const HandleRatings = (futsal_listing_id, rating, review, description) => {
        post(
            route("rating.store", {
                id: futsal_listing_id,
            })
        );
        reset();
        closeModal();
        // Other logic for handling ratings
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="view-bookings">
                <div className="heading-image relative">
                    <img src={booking} alt="booking" />
                    <h1 className="text">
                        Check out your upcoming futsal bookings here!
                    </h1>
                </div>
                <div className="container overflow-x-auto my-12">
                    <div className="flex justify-center mb-4">
                        <Button
                            className={`mx-4 px-4 py-2 rounded ${
                                showUpcomingBookings
                                    ? ""
                                    : "bg-gray-200 text-gray-700 "
                            }`}
                            onClick={() => setShowUpcomingBookings(true)}
                        >
                            Upcoming Bookings
                        </Button>
                        <Button
                            className={`mx-4 px-4 py-2 rounded ${
                                !showUpcomingBookings
                                    ? ""
                                    : "bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => setShowUpcomingBookings(false)}
                        >
                            Booking History
                        </Button>
                    </div>
                    {showUpcomingBookings ? (
                        <table className="mx-auto max-w-full table-auto w-full whitespace-no-wrap bg-white border-collapse font-normal">
                            <thead>
                                <tr className=" border-b-2 border-gray-200 text-gray-700 text-center">
                                    <th className="py-2 px-4">Futsal Title</th>
                                    <th className="py-2 px-4">Booked Date</th>
                                    <th className="py-2 px-4">Status</th>
                                    <th></th>
                                    <th className="py-2 px-4">Time Slot</th>
                                    <th className="py-2 px-4">Duration</th>
                                    <th className="py-2 px-4">Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {upcomingBookings.map((booking) => (
                                    <tr
                                        key={booking.id}
                                        className="border-b border-gray-200 "
                                    >
                                        <td className="py-2 px-4">
                                            <div className="flex items-center">
                                                <div className="w-[250px] h-[150px]">
                                                    <img
                                                        className="w-full h-full object-cover rounded-md"
                                                        src={`http://127.0.0.1:8000/storage/${booking.futsal_listings.images[0]}`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {
                                                            booking
                                                                .futsal_listings
                                                                .title
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4">
                                            {new Date(
                                                booking.booking_date
                                            ).toLocaleDateString("en-US")}
                                        </td>
                                        <td className="py-2 pl-4">
                                            {booking.is_confirmed ? (
                                                <Pill variant="success">
                                                    Booked
                                                </Pill>
                                            ) : (
                                                <Pill variant="secondary">
                                                    Reserved
                                                </Pill>
                                            )}
                                        </td>
                                        <td className="pr-4">
                                            {booking.is_paid ? (
                                                <Pill variant="success">
                                                    Paid
                                                </Pill>
                                            ) : (
                                                <Pill variant="warning">
                                                    Unpaid
                                                </Pill>
                                            )}
                                        </td>
                                        <td className="py-2 px-4">
                                            {formatTime(booking.start_time)} -{" "}
                                            {formatTime(booking.end_time)}
                                        </td>
                                        <td className="py-2 px-4">
                                            {booking.duration} min
                                        </td>
                                        <td className="py-2 px-4">
                                            Rs. {booking.total_price}
                                        </td>
                                        <td className="py-2 px-4">
                                            <a
                                                href={route("booking.details", {
                                                    id: booking.id,
                                                })}
                                                className="text-secondary-dark-2 underline"
                                            >
                                                View Details
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <table className="mx-auto max-w-full table-auto w-full whitespace-no-wrap bg-white border-collapse font-normal">
                            <thead>
                                <tr className=" border-b-2 border-gray-200 text-gray-700 text-center">
                                    <th className="py-2 px-4">Futsal Title</th>
                                    <th className="py-2 px-4">Booked Date</th>
                                    <th className="py-2 px-4">Status</th>
                                    <th></th>
                                    <th className="py-2 px-4">Time Slot</th>
                                    <th className="py-2 px-4">Duration</th>
                                    <th className="py-2 px-4">Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookingHistory.map((booking) => (
                                    <tr
                                        key={booking.id}
                                        className="border-b border-gray-200  "
                                    >
                                        <td className="py-2 px-4">
                                            <div className="flex items-center">
                                                <div className="w-[250px] h-[150px]">
                                                    <img
                                                        className="w-full h-full object-cover"
                                                        src={`http://127.0.0.1:8000/storage/${booking.futsal_listings.images[0]}`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {
                                                            booking
                                                                .futsal_listings
                                                                .title
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4">
                                            {new Date(
                                                booking.booking_date
                                            ).toLocaleDateString("en-US")}
                                        </td>
                                        <td className="py-2 pl-4">
                                            <Pill variant="success">
                                                Booked
                                            </Pill>
                                        </td>
                                        <td className="pr-4">
                                            {booking.is_paid ? (
                                                <Pill variant="success">
                                                    Paid
                                                </Pill>
                                            ) : (
                                                <Pill variant="warning">
                                                    Unpaid
                                                </Pill>
                                            )}
                                        </td>
                                        <td className="py-2 px-4">
                                            {formatTime(booking.start_time)} -{" "}
                                            {formatTime(booking.end_time)}
                                        </td>
                                        <td className="py-2 px-4">
                                            {booking.duration} min
                                        </td>
                                        <td className="py-2 px-4">
                                            Rs. {booking.total_price}
                                        </td>
                                        <td className="py-2 px-4">
                                            <a
                                                className="text-secondary-dark-2 underline cursor-pointer"
                                                onClick={() =>
                                                    openModal(booking)
                                                }
                                            >
                                                Give a Rating
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    <Modal
                        show={isOpen}
                        onClose={closeModal}
                        modalTitle="Rating and Review"
                        booking={selectedBooking}
                        formData={data}
                    >
                        <form className="p-6">
                            <div className="flex flex-col">
                                <TextInput
                                    label="Review"
                                    name="review"
                                    value={data.review}
                                    onChange={(e) =>
                                        setData("review", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <TextInput
                                    id="rating"
                                    label="Rating"
                                    name="rating"
                                    type="number"
                                    autoComplete="rating"
                                    value={data.rating}
                                    onChange={(e) =>
                                        setData(
                                            "rating",
                                            Math.min(
                                                Math.max(
                                                    parseInt(e.target.value),
                                                    1
                                                ),
                                                5
                                            )
                                        )
                                    }
                                    min="1"
                                    max="5"
                                />
                            </div>
                            {/* Review text area */}
                            <div className="flex flex-col">
                                <TextInput
                                    label="Comment"
                                    name="description"
                                    type="textarea"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex justify-end mt-4">
                                <Button
                                    variant="primary"
                                    className="mr-2"
                                    onClick={() =>
                                        HandleRatings(
                                            selectedBooking.futsal_listings_id,
                                            data.rating,
                                            data.review,
                                            data.description
                                        )
                                    }
                                >
                                    Add Ratings
                                </Button>

                                <Button variant="danger" onClick={closeModal}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default MyBookings;
