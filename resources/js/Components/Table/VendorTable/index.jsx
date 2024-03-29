import React from "react";
import Button from "@/Components/Button";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";

function VendorTable({vendor}) {
    return (
        <>
            {vendor.map((listing) => (
                <tr key={listing.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                                <img
                                    className="w-full h-full rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {listing.firstName}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {listing.email}
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {listing.contactNumber}
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            *Listngs no*
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {new Date(listing.created_at).toLocaleDateString()}
                        </p>
                    </td>
                    <td className="flex gap-2 px-5 py-5 border-b border-gray-200 bg-white text-sm items-center justify-center">
                        <Button
                            size="sm"
                            variant="secondary"
                            className="w-[25px]"
                        >
                            <span>
                                <RiEdit2Line />
                            </span>
                        </Button>
                        <Button size="sm" variant="danger" className="w-[25px]">
                            <span>
                                <RiDeleteBin6Line />
                            </span>
                        </Button>
                    </td>
                </tr>
            ))}
        </>
    );
}

export default VendorTable;
