import React, { useState } from "react";
import SelectInput from "@/Components/SelectInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CustomCalendar from "../../../Components/DateCalendar";
import Modal from "@/Components/Modal";
import Button from "@/Components/Button";

function Booking({ auth, futsal_listing, hours, isOpen, closeModal }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: "thirty", label: "30 minutes" },
        { value: "sixty", label: "60 minutes" },
        { value: "ninety", label: "90 minutes" },
        { value: "hundred_twenty", label: "120 minutes" },
    ];

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };
    console.log(hours);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [date, setDate] = useState(null);

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            modalTitle="Book Your Futsal"
        >
            {/* <div class=" container">
                <div class="relative justify-center flex mx-auto my-14 h-[500px] overflow-hidden rounded-xl text-center shadow-xl shadow-gray-300 bg-black/60">
                    <h1 class="px-8 text-xl lg:text-2xl font-semibold text-surface-color self-center">
                        Secure your spot on the field with{" "}
                        {futsal_listing.title} <br /> Book your game today!
                    </h1>

                    <img
                        class="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                        src={`http://127.0.0.1:8000/storage/${futsal_listing.images[0]}`}
                        alt="Futsal Image"
                    />
                </div> */}
            {/* <Datepicker
                    controls={["calendar", "timegrid"]}
                    min="2024-04-11T00:00"
                    max="2024-10-11T00:00"
                    minTime="08:00"
                    maxTime="19:59"
                    stepMinute={60}
                    labels={myLabels}
                    invalid={myInvalid}
                /> */}
            {/* <MyDatePicker
                    selectedDate={selectedDate}
                    handleChange={handleDateChange}
                /> */}

            {/* <div className="relative min-w-[400px] h-[400px] text-center shadow-xl shadow-gray-300 mx-auto mt-20 mb-20 max-w-screen-lg">
                    <div>
                        <img
                            className="h-full w-full rounded-t-xl absolute -z-10"
                            src={`http://127.0.0.1:8000/storage/${futsal_listing.images[0]}`}
                            alt="Futsal Image"
                        />

                    </div>
                    <h1 class="absolute z-10  mt-2 px-8 text-3xl font-bold text-white md:text-5xl">
                        {futsal_listing.title}
                    </h1>
                </div>*/}
            <div class="mx-auto grid max-w-screen-lg px-6 pb-20">
                <div class="mt-6">
                    <p class="font-serif text-lg font-semibold text-text">
                        Select a date
                    </p>
                    <div class="mt-4">
                        <CustomCalendar />
                    </div>
                </div>

                <div class="mt-6">
                    <p class="font-serif text-lg font-semibold text-text">
                        Duration
                    </p>
                    <div className="mt-4">
                        <SelectInput
                            options={options}
                            value={selectedOption}
                            onChange={handleChange}
                            isSearchable={false}
                            required
                        />
                    </div>
                    {/* <div class="relative mt-4 w-56">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                                aria-hidden="true"
                                class="h-5 w-5 text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            datepicker=""
                            datepicker-orientation="bottom"
                            autofocus="autofocus"
                            type="text"
                            class="datepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm"
                            placeholder="Select date"
                        />
                    </div> */}
                </div>

                <div class="mt-6">
                    <p class="font-serif text-lg font-semibold text-text">
                        Time Interval
                    </p>
                    <div className="mt-4">
                        <SelectInput
                            options={options}
                            value={selectedOption}
                            onChange={handleChange}
                            isSearchable={false}
                            required
                        />
                    </div>
                    {/* <div class="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
                        {hours.map((hour) => (
                            <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95" key={hour}>
                                {hour}
                            </button>
                        ))}
                    </div> */}
                </div>

                <Button variant="primary" size="lg" className="mt-6">
                    Book Now
                </Button>
            </div>
        </Modal>
    );
}

export default Booking;
