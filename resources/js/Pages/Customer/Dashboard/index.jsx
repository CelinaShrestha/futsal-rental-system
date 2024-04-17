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
            <div className="container">
                <div className="first-page">
                    <div className="flex flex-col gap-10">
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
                        <Button size="md" width="w-[170px]">
                            Explore More
                        </Button>
                    </div>

                    <div className="img">
                        <img src={home} alt="home" />
                    </div>
                </div>
            </div>
            {/* <div className="second flex flex-col gap-5 my-20 py-10 bg-surface-color">
                <h1 className="text-center font-heading text-[40px] text-accent-color font-semibold">
                    Why Book with Us?
                </h1>

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
            </div> */}
            <div className="second flex flex-col gap-5 my-20 py-10 bg-surface-color">
                <div className="container overflow-hidden">
                    <h1 className=" font-heading text-xl text-accent-color font-bold">
                        Available Courts
                    </h1>
                    <SwipeToSlide data={futsal_listings} />
                </div>
            </div>

            <div>
                <Blog />
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
