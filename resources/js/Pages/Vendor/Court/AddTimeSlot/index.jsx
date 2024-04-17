import React, { useState } from "react";
import Modal from "@/Components/Modal";
import Button from "@/Components/Button";
import TextInput from "@/Components/TextInput";

function TimeSlot({ isOpen, closeModal }) {
    const [timeSlots, setTimeSlots] = useState({
        Monday: { opening: "", closing: "" },
        Tuesday: { opening: "", closing: "" },
        Wednesday: { opening: "", closing: "" },
        Thursday: { opening: "", closing: "" },
        Friday: { opening: "", closing: "" },
        Saturday: { opening: "", closing: "" },
        Sunday: { opening: "", closing: "" },
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (day, field, value) => {
        setTimeSlots((prevTimeSlots) => ({
            ...prevTimeSlots,
            [day]: {
                ...prevTimeSlots[day],
                [field]: value,
            },
        }));

        // Check if all time slots are filled
        const allFilled = Object.values(timeSlots).every(
            (slot) => slot.opening && slot.closing
        );
        setIsFormValid(allFilled);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(timeSlots);

        // Here you can handle form submission, e.g., send time slots to backend
    };

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            modalTitle="Add Time Slots"
            maxWidth="7xl"
        >
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="container my-8 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="table-heading">Day</th>
                                    <th className="table-heading">
                                        Opening Time
                                    </th>
                                    <th className="table-heading">
                                        Closing Time
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="text-center">
                                {Object.entries(timeSlots).map(
                                    ([day, slot]) => (
                                        <tr key={day}>
                                            <td>{day}</td>
                                            <td className="table-description">
                                                <TextInput
                                                    type="time"
                                                    value={slot.opening}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            day,
                                                            "opening",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </td>
                                            <td className="table-description">
                                                <TextInput
                                                    type="time"
                                                    value={slot.closing}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            day,
                                                            "closing",
                                                            e.target.value
                                                        )
                                                    }
                                                    min={slot.opening}
                                                />
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Button
                    className="w-[150px] place-self-center"
                    type="submit"
                    disabled={!isFormValid}
                >
                    Add Court
                </Button>
            </form>
        </Modal>
    );
}

export default TimeSlot;
