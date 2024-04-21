import React from "react";
import Button from "@/Components/Button";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import Pill from "@/Components/Pill";
import { Inertia } from "@inertiajs/inertia";

function VendorCourtTable({ futsal_listings }) {
    // const onClickEdit = (listingId) => {
    //     // console.log(listing.id);
    //     Inertia.visit(route("admin.court.profile.edit", { id: listingId }));
    // };
    return (
        <>
            {futsal_listings.map((listing) => (
                <tr key={listing.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                                <img
                                    className="w-full h-full rounded-full"
                                    src={`http://127.0.0.1:8000/storage/${listing.images[0]}`}
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {listing.title}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {listing.location}
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {listing.contactNumber}
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {listing.bookings_count}
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {new Date(listing.created_at).toLocaleDateString()}
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {listing.is_verified ? (
                            <Pill variant="primary">Verified</Pill>
                        ) : (
                            <Pill variant="accent">Not Verified</Pill>
                        )}
                    </td>
                    <td className="flex gap-2 px-5 py-5 border-b border-gray-200 bg-white text-sm items-center justify-center">
                        <Button
                            size="sm"
                            variant="secondary"
                            className="w-[25px]"
                            // onClick={() => onClickEdit(listing.id)}
                        >
                            <span>
                                <RiEdit2Line />
                            </span>
                        </Button>
                    </td>
                </tr>
            ))}
        </>
    );
}

export default VendorCourtTable;
