import React, { useState } from "react";
import Button from "@/Components/Button";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import { Inertia } from "@inertiajs/inertia";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";

function VendorTable({ vendor }) {
    const onClickEdit = (listingId) => {
        // console.log(listing.id);
        Inertia.visit(route("admin.vendor.profile.edit", { id: listingId }));
    };
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({});
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleDeleteConfirm = (listingId) => {
        // Perform delete operation here
        console.log("Item deleted");
        destroy(route("admin.vendor.profile.destroy", { id: listingId }), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    return (
        <>
            {vendor.map((listing) => (
                <tr key={listing.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                            <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {listing.firstName} {listing.lastName}
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
                            {listing.listings_count !== null
                                ? listing.listings_count
                                : 0}
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
                            onClick={() => onClickEdit(listing.id)}
                        >
                            <span>
                                <RiEdit2Line />
                            </span>
                        </Button>
                        <Button
                            size="sm"
                            variant="danger"
                            className="w-[25px]"
                            onClick={openModal}
                        >
                            <span>
                                <RiDeleteBin6Line />
                            </span>
                        </Button>
                        <Modal
                            show={isOpen}
                            onClose={closeModal}
                            modalTitle="Delete Vendor?"
                        >
                            <form className="p-6">
                                <p>
                                    Are you sure you want to delete the vendor's
                                    profile?
                                </p>
                                <div className="flex justify-end mt-4">
                                    <Button
                                        variant="secondary"
                                        onClick={closeModal}
                                        className="mr-2"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() =>
                                            handleDeleteConfirm(listing.id)
                                        }
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </form>
                        </Modal>
                    </td>
                </tr>
            ))}
        </>
    );
}

export default VendorTable;
