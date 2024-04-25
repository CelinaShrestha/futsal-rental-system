import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import home from "../../../../assets/images/home.png";
import Button from "@/Components/Button";
import Card from "@/Components/Card";
import booking from "../../../../assets/icons/booking.png";
import court from "../../../../assets/icons/court.png";
import transaction from "../../../../assets/icons/transaction.png";
import ReactCardSlider from "react-card-slider-component";
import { Switch } from "@headlessui/react";
import SwipeToSlide from "@/Components/CardSlider";
import Blog from "@/Components/Blogs";
import img1 from "../../../../assets/images/img1.jpg";
import img2 from "../../../../assets/images/img2.jpg";
import img3 from "../../../../assets/images/img3.jpg";
import img4 from "../../../../assets/images/img4.jpg";
import img5 from "../../../../assets/images/img5.jpg";

export default function Dashboard({ auth, futsal_listings }) {
    const cards = [
        {
            icon: booking,
            heading: "Easy Booking",
            content:
                "With just a few clicks, effortlessly secure your preferred time slot and venue.",
        },
        {
            icon: court,
            heading: "Venue Insights",
            content:
                "Find the perfect futsal venue  and spend less time searching and more time playing.",
        },
        {
            icon: transaction,
            heading: "Smooth Transactions",
            content:
                "Choose from various payment methods, including credit/debit cards.",
        },
    ];
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="">
                <div className="first-page">
                    {/* <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-2xl text-accent-color font-bold font-heading">
                                Book your game today!
                            </h1>
                            <h2 className=" text-[20px]">
                                Sprinkle your week with some futsal and make it
                                more fun . Explore more for seamless court
                                booking experience.
                            </h2>
                        </div>

                    </div>

                    <div className="img">
                        <img src={home} alt="home" />
                    </div> */}

                    <div class="container">
                        <div class="relative mx-auto flex items-center justify-center px-4  md:flex-row">
                            <div class="my-auto mx-auto mt-10 w-full max-w-xl   lg:max-w-screen-xl">
                                <div class="mb-16 lg:mb-0 lg:max-w-lg">
                                    <div class="mb-6 max-w-xl">
                                        <div>
                                            <p class="bg-teal-accent-400 mb-2 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-indigo-900">
                                                KickIt Futsal Booking
                                            </p>
                                        </div>
                                        <h2 class="mb-6 max-w-lg text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                                            Book your <br />
                                            <span class="inline-block font-bold text-accent-color">
                                                game today!
                                            </span>
                                        </h2>
                                        <p class="text-base text-gray-700 md:text-lg">
                                            Sprinkle your week with some futsal
                                            and make it more fun . Explore more
                                            for seamless court booking
                                            experience.
                                        </p>
                                    </div>
                                    <div class="flex items-center">
                                        <Button
                                            size="md"
                                            width="w-[170px]"
                                            variant="danger"
                                            className="mr-6 inline-flex"
                                        >
                                            Explore More
                                        </Button>
                                        <a
                                            href="/"
                                            aria-label=""
                                            class="inline-flex items-center font-semibold text-accent-color transition-colors duration-200 hover:text-orange-400"
                                        >
                                            Learn more
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
                                <div class=" hidden mb-12 w-[350px] flex-col space-y-3 md:mt-32 lg:flex items-center justify-center">
                                    <div class="rounded-xl bg-yellow-400 p-2 ">
                                        <img
                                            class="h-full w-full object-cover rounded-xl"
                                            src={img1}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div class="my-auto flex space-x-3 rounded-xl md:mt-12 md:w-72 md:flex-col md:space-y-3 md:space-x-0 md:px-4">
                                    <div class="h-40 overflow-hidden rounded-xl bg-green-600/60 p-2">
                                        <img
                                            class="mx-auto h-full w-full rounded-xl object-cover "
                                            src={img2}
                                            alt=""
                                        />
                                    </div>
                                    <div class="h-44 overflow-hidden rounded-xl bg-pink-600/60 p-2">
                                        <img
                                            class="mx-auto h-full w-full  rounded-xl object-cover"
                                            src={img3}
                                            alt=""
                                        />
                                    </div>
                                    <div class="h-40 overflow-hidden rounded-xl bg-blue-600/60 p-2">
                                        <img
                                            class=" h-full w-full rounded-xl object-cover "
                                            src={img4}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 ">
                <div className="container flex flex-col items-center  px-5 lg:gap-16 lg:flex-row py-24">
                    <div className="dashboard-img">
                        <img src={home} alt="home" />
                    </div>
                    <div className="about-us-content max-w-[500px]">
                        <div className="flex flex-col">
                            <h2 className="text-primary-color text-md font-semibold">
                                About Us
                            </h2>
                            <h1 className="text-2xl text-accent-color font-bold ">
                                Get to Know Us
                            </h1>
                        </div>

                        <p className="text-justify leading-7">
                            At KickIT, we're passionate about futsal and
                            committed to providing the best experience for
                            players of all levels. With our diverse range of
                            futsal facilities available for rent at affordable
                            prices, we make it easy for everyone to enjoy the
                            game they love.
                        </p>
                        <Button width="w-[150px] text-nowrap rounded-none">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
            <div className="second flex flex-col gap-5 mt-20 py-10">
                <div>
                    {" "}
                    <h2 className="text-secondary-color text-md font-semibold text-center">
                        Our Services
                    </h2>
                    <h1 className="text-2xl text-accent-color font-bold text-center">
                        Unlock Your Futsal Experience
                    </h1>
                    {/* <p className="text-center mb-4">
                        Discover Our Range of High-Quality Venues at Affordable
                        Prices
                    </p> */}
                </div>

                <div className=" flex justify-center gap-12">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            heading={card.heading}
                        >
                            {card.content}
                        </Card>
                    ))}
                </div>
            </div>
            <div className="second flex flex-col gap-5 my-20 bg-gray-50 ">
                <div className="container overflow-hidden text-center py-20">
                    <div className="pb-4">
                        <h2 className="text-indigo-900 text-md font-semibold text-center">
                            Collection
                        </h2>
                        <h1 className="text-2xl text-accent-color font-bold text-center">
                            Available Courts
                        </h1>
                    </div>
                    <SwipeToSlide data={futsal_listings} />
                </div>
            </div>

            <div className="mb-16">
                <div class="flex container px-12">
                    <div class="border-white/20 relative mx-auto my-5 w-full bg-gradient-to-r from-surface-color to-secondary-color shadow-lg">
                        <div class="p-8 md:p-12 lg:px-16">
                            <div class="">
                                <h2 class="text-2xl font-bold text-white md:text-3xl">
                                    Subscribe to stay ahead
                                </h2>

                                <p class="hidden text-white sm:mt-4 sm:block">
                                    Get emails for new court listings,
                                    promotions, and more.
                                </p>
                            </div>

                            <div class="mt-8 max-w-xl">
                                <form action="#" class="sm:flex sm:gap-4">
                                    <div class="sm:flex-1">
                                        <label for="email" class="sr-only">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            class="w-full rounded-md border-indigo-200 bg-white p-3 text-text shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-accent-light-5"
                                        />
                                    </div>

                                    <Button
                                        width="w-[150px] "
                                        variant="danger"
                                        className="text-nowrap"
                                    >
                                        Sign Up
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged sdsd
                        </div>
                    </div>
                </div>
            </div> */}
        </AuthenticatedLayout>
    );
}
