import React, { useState } from "react";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";

function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    let hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12; // Handle midnight (0:00)
    return `${hour}:${minutes} ${ampm}`;
}

function DisabledDate({ futsal_listing }) {
    const [isOpen, setIsOpen] = useState(false);
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({});
    console.log(futsal_listing);
    const HandleOnClick = () => {
        console.log("Disable Date or Time");
        Inertia.visit(route("vendor.disable.index", { id: futsal_listing.id }));
    };
    const handleDeleteConfirm = (listingId) => {
        // Perform delete operation here
        console.log("Item deleted");
        destroy(route("vendor.disable.destroy", { id: listingId }), {
            preserveScroll: true,
            onSuccess: () => {
                // Remove the deleted time slot from the state
                const updatedDisabledDateTimes =
                    futsal_listing.disabled_date_times.filter(
                        (disabledDate) => disabledDate.id !== listingId
                    );
                setData(
                    "futsal_listing.disabled_date_times",
                    updatedDisabledDateTimes
                );
                closeModal();
            },
            onFinish: () => reset(),
        });
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="flex flex-col gap-2 items-end">
            {futsal_listing.disabled_date_times.length > 0 && (
                <table className="mx-auto max-w-full table-auto w-full whitespace-no-wrap bg-white border-collapse font-normal">
                    <thead>
                        <tr className=" border-b-2 border-gray-200 text-gray-700 text-center">
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Interval</th>
                            <th>Reason</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {futsal_listing.disabled_date_times.map(
                            (disabledDate, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 bg-surface-color text-center"
                                >
                                    <td className="py-2 px-4">
                                        {disabledDate.date}
                                    </td>
                                    <td className="py-2 px-4">
                                        {formatTime(disabledDate.start_time)} -{" "}
                                        {formatTime(disabledDate.end_time)}
                                    </td>
                                    <td className="py-2 px-4">
                                        {disabledDate.reason}
                                    </td>
                                    <td>
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            className="w-[25px] my-6"
                                            onClick={openModal}
                                        >
                                            <span>
                                                <RiDeleteBin6Line />
                                            </span>
                                        </Button>
                                        <Modal
                                            show={isOpen}
                                            onClose={closeModal}
                                            modalTitle="Delete disabled timeslot?"
                                        >
                                            <form className="p-6">
                                                <p className="text-center">
                                                    Are you sure you want to
                                                    delete the disabled time
                                                    slot?{" "}
                                                </p>
                                                <div className="flex justify-end mt-4">
                                                    <Button
                                                        variant="danger"
                                                        onClick={() =>
                                                            handleDeleteConfirm(
                                                                disabledDate.id
                                                            )
                                                        }
                                                        className="mr-2"
                                                    >
                                                        Delete
                                                    </Button>
                                                    <Button
                                                        variant="secondary"
                                                        onClick={closeModal}
                                                    >
                                                        Cancel
                                                    </Button>
                                                </div>
                                            </form>
                                        </Modal>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            )}
            <Button
                width="w-[200px]"
                onClick={HandleOnClick}
                className="text-nowrap my-4"
            >
                Disable Date or Time
            </Button>
        </div>
    );
}

export default DisabledDate;
