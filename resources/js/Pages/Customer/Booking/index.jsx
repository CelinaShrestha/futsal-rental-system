import React, { useState, useEffect } from "react";
import SelectInput from "@/Components/SelectInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CustomCalendar from "../../../Components/DateCalendar";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "../../../Components/Khalti/khaltiConfig";
import FutsalDetail from "@/Components/FutsalDetail";

function Booking({ auth, futsal_listing, timeSlot, disabledDateTime }) {
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
            const now = new Date(); // Current time

            let currentTime = startTime;
            let allSlotsBooked = true; // Flag to check if all slots are booked

            while (currentTime < endTime) {
                const startTimeFormatted = currentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                const endTimeFormatted = new Date(
                    currentTime.getTime() + duration * 60000
                );
                const endTimeFormattedString =
                    endTimeFormatted.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    });

                // Check if the current time slot has already passed for today's date
                const isPassedTime =
                    selectedDate.getDate() === now.getDate() &&
                    selectedDate.getMonth() === now.getMonth() &&
                    selectedDate.getFullYear() === now.getFullYear() &&
                    (currentTime.getHours() < now.getHours() ||
                        (currentTime.getHours() === now.getHours() &&
                            currentTime.getMinutes() <= now.getMinutes()));

                const isDisabled = futsal_listing.bookings.some((booking) => {
                    const bookingDate = new Date(booking.booking_date);
                    const bookingStartTime = new Date(
                        `01/01/2000 ${booking.start_time}`
                    );
                    const bookingEndTime = new Date(
                        `01/01/2000 ${booking.end_time}`
                    );

                    const isSameDate =
                        bookingDate.getDate() === selectedDate.getDate() &&
                        bookingDate.getMonth() === selectedDate.getMonth() &&
                        bookingDate.getFullYear() ===
                            selectedDate.getFullYear();

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

                const isDisabledDateTime = disabledDateTime.some((disabled) => {
                    const disabledDate = new Date(disabled.date);
                    const disabledStartTime = new Date(
                        `01/01/2000 ${disabled.start_time}`
                    );
                    const disabledEndTime = new Date(
                        `01/01/2000 ${disabled.end_time}`
                    );

                    const isSameDate =
                        disabledDate.getDate() === selectedDate.getDate() &&
                        disabledDate.getMonth() === selectedDate.getMonth() &&
                        disabledDate.getFullYear() ===
                            selectedDate.getFullYear();

                    const doesOverlap =
                        isSameDate &&
                        ((currentTime >= disabledStartTime &&
                            currentTime < disabledEndTime) ||
                            (endTimeFormatted > disabledStartTime &&
                                endTimeFormatted <= disabledEndTime) ||
                            (currentTime <= disabledStartTime &&
                                endTimeFormatted >= disabledEndTime));

                    return doesOverlap;
                });

                // Push the interval with disabled property to the intervals array
                intervals.push({
                    value: `${startTimeFormatted}-${endTimeFormattedString}`,
                    label: `${startTimeFormatted}-${endTimeFormattedString}`,
                    duration: option.value, // Store duration here
                    disabled: isDisabled || isDisabledDateTime || isPassedTime, // Set the disabled property based on whether the current time is before the interval or if it overlaps with bookings or disabled times
                });

                if (!isDisabled && !isDisabledDateTime && !isPassedTime) {
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

    const totalPrice = calculatePrice();

    const khaltiConfig = {
        ...config,
        eventHandler: {
            ...config.eventHandler,
            onSuccess: (payload) => {
                console.log("Payment successful", payload);
                const response = Inertia.post("/api/payment/verify", {
                    token: payload.token,
                    amount: payload.amount,
                    id: futsal_listing.id,
                    booking_date: data.booking_date,
                    interval: data.interval,
                    time_slot: data.time_slot,
                    total_price: data.total_price,
                    day: data.day,
                });

                // Assuming your server sends back a 'success' prop
            },

            onError: (error) => {
                console.log("Error during payment", error);
            },
        },
    };
    let checkout = new KhaltiCheckout(khaltiConfig);

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="container mt-8 pb-20">
                <div className="flex flex-col lg:flex-row gap-12 justify-between ">
                    <div className="listing-info w-[750px]">
                        <h1 className=" text-xl font-bold text-text font-heading">
                            Book your futsal!
                        </h1>
                        <FutsalDetail
                            futsal_listing={futsal_listing}
                            showFullDescription={showFullDescription}
                            toggleDescription={toggleDescription}
                        />
                    </div>
                    <div className="booking-form lg:min-w-[500px] pl-6">
                        <form>
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
                                <p className="my-2 text-md text-text">
                                    Rs. {totalPrice.toFixed(2)}{" "}
                                    {/* Display total price */}
                                </p>
                            </div>
                            {/* <Button
                                variant="primary"
                                size="lg"
                                className="mt-6"
                            >
                                Book Now
                            </Button> */}

                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    checkout.show({ amount: 10*100 });
                                }}
                                color="primary"
                                disabled={!auth.user.email_verified_at}
                            >
                                Pay
                            </Button>
                        </form>
                        {!auth.user.email_verified_at && (
                            <p className="text-red-500 text-sm mt-2">
                                Please verify your email to proceed with the
                                booking.
                                <a
                                    href={route("profile.edit")}
                                    className="underline text-secondary-color"
                                >
                                    Go to Profile
                                </a>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Booking;
