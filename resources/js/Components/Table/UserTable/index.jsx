import React,{useState} from "react";
import Button from "@/Components/Button";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import { Inertia } from "@inertiajs/inertia";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";

function UserTable({ user }) {
    const onClickEdit = (listingId) => {
        // console.log(listing.id);
        Inertia.visit(route("admin.customer.profile.edit", { id: listingId }));
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
        destroy(route("admin.customer.profile.destroy", { id: listingId }), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };
    return (
        <>
            {user.map((listing) => (
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
                            {listing.bookings_count}
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
                            modalTitle="Delete Customer?"
                        >
                            <form className="p-6">
                                <p>
                                    Are you sure you want to delete the
                                    customer's profile?
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

export default UserTable;
