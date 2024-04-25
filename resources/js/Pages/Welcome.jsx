import { Link, Head } from "@inertiajs/react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import Button from "@/Components/Button";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div>
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
        </>
    );
}
