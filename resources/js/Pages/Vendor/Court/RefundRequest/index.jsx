import Button from "@/Components/Button";
import Pill from "@/Components/Pill";
import VendorLayout from "@/Layouts/VendorLayout";
import React from "react";
import { Inertia } from "@inertiajs/inertia";

const BookedCourts = ({ auth, refundRequests }) => {
    const onClickHandler = (id) => {
        console.log("Refund button clicked");
        Inertia.post(route("vendor.refund.store", { id: id }));
    };

    return (
        <VendorLayout user={auth}>
            <div className="px-4 my-12">
                <h2 className="text-2xl font-bold mb-4">Refund Requests</h2>
                <div className="">
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
                                    Transaction ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Amount
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {refundRequests.data.map((data) => (
                                <tr key={data.id} className="hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {data.user.firstName}{" "}
                                        {data.user.lastName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {data.user.contactNumber}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowr ap">
                                        {data.transaction_id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        Rs {data.amount}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {new Date(
                                            data.created_at
                                        ).toDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {data.is_refunded ? (
                                            <Pill variant="success">
                                                Refunded
                                            </Pill>
                                        ) : (
                                            <Pill variant="accent">
                                                Not Refunded
                                            </Pill>
                                        )}
                                    </td>
                                    <td>
                                        {!data.is_refunded && (
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="w-[90px]"
                                                onClick={() =>
                                                    onClickHandler(data.id)
                                                }
                                            >
                                                Refund
                                            </Button>
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
