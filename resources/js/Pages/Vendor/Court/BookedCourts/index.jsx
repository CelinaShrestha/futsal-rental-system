import Pill from "@/Components/Pill";
import VendorLayout from "@/Layouts/VendorLayout";
import React from "react";

const BookedCourts = ({ auth, booking_list }) => {
    return (
        <VendorLayout user={auth}>
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Booked Courts</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Customer Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Contact Number
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Court Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Booking Time
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Date
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {booking_list.map((booking) => (
                                <tr
                                    key={booking.id}
                                    className="hover:bg-gray-100"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {booking.user.firstName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {booking.user.contactNumber}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {booking.futsal_listings.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {formatTime(booking.start_time)} -{" "}
                                        {formatTime(booking.end_time)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {new Date(
                                            booking.booking_date
                                        ).toDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {booking.is_paid ? (
                                            <Pill> Paid</Pill>
                                        ) : (
                                            <Pill variant="accent"> Unpaid</Pill>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </VendorLayout>
    );
};

// Function to format time in AM/PM format
const formatTime = (timeString) => {
    const time = new Date(`2000-01-01T${timeString}`);
    return time.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
};

export default BookedCourts;
