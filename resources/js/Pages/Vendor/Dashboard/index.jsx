import React from "react";
import VendorLayout from "@/Layouts/VendorLayout";

export default function Dashboard({ auth }) {
    console.log(auth.user.firstName);
    return (
        <VendorLayout user={auth}>
            <div className="container my-14">
                <h1 className="text-text font-bold text-xl">
                    Hello {auth.user.firstName}!
                </h1>
                <div class="w-full">
                    <div class="mx-auto grid max-w-screen-lg gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="max-w-md rounded-lg border px-6 pt-6 pb-10">
                            <div class="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="float-right h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                            </svg>
                            <p class="text-sm font-medium text-gray-500">
                                Vistors
                            </p>
                            <p class="text-4xl font-medium text-gray-800">
                                24,430
                            </p>
                            <span class="float-right rounded-full bg-rose-100 px-1 text-sm font-medium text-rose-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="inline h-4 w-4 pb-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17 13l-5 5m0 0l-5-5m5 5V6"
                                    />
                                </svg>
                                3%
                            </span>
                        </div>

                        <div class="max-w-md rounded-lg border px-6 pt-6 pb-10">
                            <div class="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="float-right h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                            </svg>
                            <p class="text-sm font-medium text-gray-500">
                                Members
                            </p>
                            <p class="text-4xl font-medium text-gray-800">
                                3,405
                            </p>
                            <span class="float-right rounded-full bg-emerald-100 px-1 text-sm font-medium text-emerald-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="inline h-4 w-4 pb-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M7 11l5-5m0 0l5 5m-5-5v12"
                                    />
                                </svg>
                                23%
                            </span>
                        </div>

                        <div class="max-w-md rounded-lg border px-6 pt-6 pb-10">
                            <div class="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="float-right h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                            </svg>
                            <p class="text-sm font-medium text-gray-500">
                                Active Now
                            </p>
                            <p class="text-4xl font-medium text-gray-800">
                                405
                            </p>
                            <div class="float-right flex -space-x-2">
                                <img
                                    class="h-7 w-7 rounded-full ring ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                />
                                <img
                                    class="h-7 w-7 rounded-full ring ring-white"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                />
                                <img
                                    class="h-7 w-7 rounded-full ring ring-white"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                />
                                <img
                                    class="h-7 w-7 rounded-full ring ring-white"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                />
                                <div class="flex h-7 w-7 items-center justify-center rounded-full bg-gray-300 font-semibold text-white ring ring-white">
                                    +5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-1 gap-5 bg-gray-100 p-2 sm:grid-cols-2 sm:p-10 lg:grid-cols-3">
                        <div class="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
                            <p class="text-lg font-medium">Insights</p>
                            <div class="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <p class="text-sm">
                                    Your views are up 400% since last month
                                </p>
                            </div>
                            <div class="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <p class="text-sm">
                                    Your blog got featured on awwwards.com
                                </p>
                            </div>
                            <div class="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <p class="text-sm">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Laboriosam deserunt
                                    cupiditate ipsa.
                                </p>
                            </div>
                            <div class="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <p class="text-sm">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>

                        <div class="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
                            <p class="text-lg font-medium">Activity</p>
                            <div class="flex items-center py-2">
                                <img
                                    class="h-10 w-10 rounded-full object-cover"
                                    src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
                                    alt="Simon Lewis"
                                />
                                <p class="ml-4 w-56">
                                    <strong class="block font-medium">
                                        Albert Mcalister
                                    </strong>
                                    <span class="text-xs text-gray-400">
                                        {" "}
                                        Commented on{" "}
                                        <a
                                            class="truncate font-medium text-indigo-600"
                                            href="#"
                                        >
                                            An Evening in the Woods
                                        </a>{" "}
                                    </span>
                                </p>
                            </div>
                            <div class="flex items-center py-2">
                                <img
                                    class="h-10 w-10 rounded-full object-cover"
                                    src="/images/fR71TFZIDTv2jhvKsOMhC.png"
                                    alt=""
                                />
                                <p class="ml-4 w-56">
                                    <strong class="block font-medium">
                                        Samantha Ribbon
                                    </strong>
                                    <span class="text-xs text-gray-400">
                                        {" "}
                                        Commented on{" "}
                                        <a
                                            class="truncate font-medium text-indigo-600"
                                            href="#"
                                        >
                                            An Evening in the Woods
                                        </a>{" "}
                                    </span>
                                </p>
                            </div>
                            <div class="flex items-center py-2">
                                <img
                                    class="h-10 w-10 rounded-full object-cover"
                                    src="/images/R-Wx_NHvZBci3KLrgXhp1.png"
                                    alt=""
                                />
                                <p class="ml-4 w-56">
                                    <strong class="block font-medium">
                                        Dr. Kayla
                                    </strong>
                                    <span class="text-xs text-gray-400">
                                        {" "}
                                        Commented on{" "}
                                        <a
                                            class="truncate font-medium text-indigo-600"
                                            href="#"
                                        >
                                            An Evening in the Woods
                                        </a>{" "}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div class="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
                            <p class="text-lg font-medium">Traffic Sources</p>
                            <div class="mt-4">
                                <p class="float-left mb-2">Direct</p>
                                <span class="float-right mb-2">20,00</span>
                                <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                                    <div class="h-full w-10/12 overflow-hidden rounded-full bg-indigo-600"></div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <p class="float-left mb-2">Referral</p>
                                <span class="float-right mb-2">2,000</span>
                                <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                                    <div class="h-full w-4/12 overflow-hidden rounded-full bg-indigo-600"></div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <p class="float-left mb-2">Google</p>
                                <span class="float-right mb-2">1,500</span>
                                <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                                    <div class="h-full w-3/12 overflow-hidden rounded-full bg-indigo-600"></div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <p class="float-left mb-2">Facebook</p>
                                <span class="float-right mb-2">260</span>
                                <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                                    <div class="h-full w-1/12 overflow-hidden rounded-full bg-indigo-600"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </VendorLayout>
    );
}
