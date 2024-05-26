import React, { useState } from "react";
import Button from "@/Components/Button";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import { Inertia } from "@inertiajs/inertia";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";

function VendorPayment({ payments }) {
    return (
        <>
            {payments.map((listing) => (
                <tr key={listing.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                            <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {listing.vendor.firstName}{" "}
                                    {listing.vendor.lastName}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {listing.vendor.contactNumber}
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            Rs. {listing.amount_due}
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {new Date(listing.updated_at).toLocaleDateString()}
                        </p>
                    </td>
                </tr>
            ))}
        </>
    );
}

export default VendorPayment;
