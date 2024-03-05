import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import home from "../../../../assets/images/home.png";
import Button from "@/Components/Button";
import Card from "@/Components/Card";

export default function Dashboard({ auth }) {
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
                                more fun . Explore more for seamless court booking
                                experience.
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
            <div className="second flex flex-col gap-5 my-20 py-10 bg-surface-light-5">
                <h1 className="text-center font-heading text-xl text-primary-color font-semibold">
                    Why Book with Us?
                </h1>
                <div className="justify-evenly flex">
                    <Card icon="magnifying-glass" heading="Easy Booking">
                        Sprinkle your week with some futsal and make it more
                        fun.Explore more for seamless court booking experience.
                    </Card>
                    <Card icon="magnifying-glass" heading="Easy Booking">
                        Sprinkle your week with some futsal and make it more
                        fun.Explore more for seamless court booking experience.
                    </Card>
                    <Card icon="magnifying-glass" heading="Easy Booking">
                        Sprinkle your week with some futsal and make it more
                        fun.Explore more for seamless court booking experience.
                    </Card>
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
