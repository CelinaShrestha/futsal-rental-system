import React, { useState, useEffect } from "react";
import SelectInput from "@/Components/SelectInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CustomCalendar from "../../../Components/DateCalendar";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";

function Booking({ auth, futsal_listing, timeSlot }) {
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [selectedInterval, setSelectedInterval] = useState(null);
    const [intervalOptions, setIntervalOptions] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [disabledDates, setDisabledDates] = useState([]);

    // Calculate total price based on the selected duration
    const calculatePrice = () => {
        if (selectedDuration) {
            const durationInMinutes = parseInt(selectedDuration.value);
            const durationInHours = durationInMinutes / 60;
            return durationInHours * futsal_listing.price;
        }
        return 0;
    };

    // Update interval options when timeSlot or selectedDate changes
    useEffect(() => {
        if (selectedDuration) {
            handleDurationChange(selectedDuration);
        }
    }, [timeSlot, selectedDate]);

    const { data, setData, post } = useForm({
        booking_date: selectedDate,
        interval: selectedInterval ? selectedInterval.value : null,
        time_slot: selectedInterval ? selectedInterval.label : null,
        total_price: calculatePrice(),
        day: selectedDate.toLocaleDateString("en-US", { weekday: "long" }),
    });

    useEffect(() => {
        const updateData = async () => {
            // Get the local time zone offset in minutes
            const offset = selectedDate.getTimezoneOffset();
            // Add the offset to the selectedDate to get the local date
            const localDate = new Date(
                selectedDate.getTime() - offset * 60 * 1000
            );

            await setData({
                ...data,
                booking_date: localDate.toISOString().split("T")[0], // Format date as YYYY-MM-DD
                total_price: calculatePrice(),
                day: selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                }),
            });
        };

        updateData();
    }, [selectedDate, selectedDuration]);

    const handleDurationChange = (option) => {
        setSelectedDuration(option);
        setSelectedInterval(null); // Reset selected interval

        const selectedDaySlot = timeSlot.find(
            (slot) =>
                slot.day ===
                selectedDate.toLocaleDateString("en-US", { weekday: "long" })
        );

        const intervals = [];
        if (selectedDaySlot) {
            const startTime = new Date(
                `01/01/2000 ${selectedDaySlot.start_time}`
            );
            const endTime = new Date(`01/01/2000 ${selectedDaySlot.end_time}`);
            const duration = parseInt(option.value);

            let currentTime = startTime;
            let allSlotsBooked = true; // Flag to check if all slots are booked

            while (currentTime < endTime) {
                const startTimeFormatted = currentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                const endTimeFormatted = new Date(
                    currentTime.getTime() + duration * 60000
                ); // Calculate end time based on duration
                const endTimeFormattedString =
                    endTimeFormatted.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    });

                const isDisabled = futsal_listing.bookings.some((booking) => {
                    // Parse booking date and time
                    const bookingDate = new Date(booking.booking_date);
                    const bookingStartTime = new Date(
                        `01/01/2000 ${booking.start_time}`
                    );
                    const bookingEndTime = new Date(
                        `01/01/2000 ${booking.end_time}`
                    );

                    // Check if the booking date matches the selected date
                    const isSameDate =
                        bookingDate.getDate() === selectedDate.getDate() &&
                        bookingDate.getMonth() === selectedDate.getMonth() &&
                        bookingDate.getFullYear() ===
                            selectedDate.getFullYear();

                    // Check if the current interval overlaps with the booking time slot
                    const doesOverlap =
                        isSameDate &&
                        ((currentTime >= bookingStartTime &&
                            currentTime < bookingEndTime) ||
                            (endTimeFormatted > bookingStartTime &&
                                endTimeFormatted <= bookingEndTime) ||
                            (currentTime <= bookingStartTime &&
                                endTimeFormatted >= bookingEndTime));

                    return doesOverlap;
                });

                console.log("Is Disabled:", isDisabled); // Debug logging

                // Push the interval with disabled property to the intervals array
                intervals.push({
                    value: `${startTimeFormatted}-${endTimeFormattedString}`,
                    label: `${startTimeFormatted}-${endTimeFormattedString}`,
                    duration: option.value, // Store duration here
                    disabled: isDisabled, // Set the disabled property based on the isDisabled flag
                });

                if (!isDisabled) {
                    allSlotsBooked = false;
                }

                currentTime = endTimeFormatted;
            }

            setIntervalOptions(intervals);
            setData({
                ...data,
                interval: null, // Reset interval when duration changes
                time_slot: null, // Reset time slot when duration changes
            });

            // Disable the date in the calendar if all slots are booked
            const datesToDisable = allSlotsBooked
                ? [selectedDate] // Disable selected date if all slots are booked
                : [];
            setDisabledDates(datesToDisable);
        }
    };

    const handleIntervalChange = (option) => {
        setSelectedInterval(option);
        setData({
            ...data,
            interval: option ? option.duration : null, // Store duration here
            time_slot: option ? option.label : null,
        });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const shortenDescription = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substr(0, maxLength) + " ... ";
    };

    const totalPrice = calculatePrice();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await post(
                route("book.create", { id: futsal_listing.id })
            ); // Submit form data asynchronously

            if (response.ok) {
                // Handle success
                Inertia.visit(response.location);
            } else {
                // Handle error
                console.error("Form submission failed:", response);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="container mt-8 pb-20">
                <div className="flex flex-col lg:flex-row gap-12 justify-end ">
                    <div className="listng-indo">
                        <h1 className=" text-xl font-bold text-text font-heading">
                            Book your futsal!
                        </h1>
                        <div className="min-w-[200px] min-h-[200px] lg:w-[700px] lg:h-[400px] mt-8 ">
                            <img
                                src={`http://127.0.0.1:8000/storage/${futsal_listing.images[0]}`}
                                alt={futsal_listing.title}
                                className="w-full h-full object-cover rounded-sm"
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <span>
                                    <p className="text-lg text-text font-semibold">
                                        {futsal_listing.title}
                                    </p>
                                    <p className=" text-text ">
                                        {futsal_listing.location}
                                    </p>
                                </span>
                                <span className="">
                                    <p className="text-lg text-text font-semibold">
                                        Rs. {futsal_listing.price}/hr
                                    </p>
                                </span>
                            </div>
                            <div className="text-justify text-gray-700 leading-7 mt-6">
                                {showFullDescription
                                    ? futsal_listing.long_description
                                    : shortenDescription(
                                          futsal_listing.long_description,
                                          200
                                      )}

                                {showFullDescription ? (
                                    <span
                                        className="font-bold text-text cursor-pointer"
                                        onClick={toggleDescription}
                                    >
                                        Show Less
                                    </span>
                                ) : (
                                    <span
                                        className="font-bold text-text cursor-pointer"
                                        onClick={toggleDescription}
                                    >
                                        Read More
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="booking-form lg:min-w-[500px] pl-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mt-6">
                                <p className=" text-lg font-semibold text-text">
                                    Select a date
                                </p>
                                <div className="mt-4 flex flex-col items-center">
                                    <CustomCalendar
                                        selectedDate={selectedDate}
                                        onDateChange={handleDateChange}
                                        disabledDates={disabledDates}
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-lg font-semibold text-text">
                                    Duration
                                </p>
                                <div className="mt-4">
                                    <SelectInput
                                        options={[
                                            {
                                                value: "60",
                                                label: "60 minutes",
                                            },
                                            {
                                                value: "120",
                                                label: "120 minutes",
                                            },
                                            {
                                                value: "180",
                                                label: "180 minutes",
                                            },
                                        ]}
                                        value={selectedDuration}
                                        onChange={handleDurationChange}
                                        isSearchable={false}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className=" text-lg font-semibold text-text">
                                    Time Interval
                                </p>
                                <div className="mt-4">
                                    <SelectInput
                                        options={intervalOptions.map(
                                            (option) => ({
                                                ...option,
                                                isDisabled: option.disabled,
                                            })
                                        )}
                                        value={selectedInterval}
                                        isSearchable={false}
                                        onChange={handleIntervalChange}
                                        getOptionLabel={(option) =>
                                            option.label
                                        }
                                        getOptionValue={(option) =>
                                            option.value
                                        }
                                        formatOptionLabel={(option) => (
                                            <span
                                                className={
                                                    option.isDisabled
                                                        ? "disabled-option"
                                                        : ""
                                                }
                                            >
                                                {option.label}
                                            </span>
                                        )}
                                        required
                                    />
                                </div>
                            </div>

                            <hr className="mt-6" />
                            <div className="mt-6 flex items-center justify-between">
                                <p className=" text-md font-semibold text-text">
                                    Total Price
                                </p>
                                <p className="mt-2 text-md text-text">
                                    Rs. {totalPrice.toFixed(2)}{" "}
                                    {/* Display total price */}
                                </p>
                            </div>
                            <Button
                                variant="primary"
                                size="lg"
                                className="mt-6"
                            >
                                Book Now
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Booking;
