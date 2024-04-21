import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import booking from "../../../../../assets/images/booking-page.jpg";
import Pill from "@/Components/Pill";

function MyBookings({ auth, bookings }) {
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
                            {bookings.map((booking) => (
                                <tr
                                    key={booking.id}
                                    className="border-b border-gray-200 bg-surface-color "
                                >
                                    <td className="py-2 px-4">
                                        <div className="flex items-center">
                                            <div className="w-[300px] h-[200]">
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src={`http://127.0.0.1:8000/storage/${booking.futsal_listings.images[0]}`}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {
                                                        booking.futsal_listings
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
                                            <Pill variant="primary">
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
                                            <Pill variant="success">Paid</Pill>
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
                                        ${booking.total_price}
                                    </td>
                                    <td className="py-2 px-4">
                                        <a
                                            href="#"
                                            className="text-secondary-color underline"
                                        >
                                            View Details
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default MyBookings;
