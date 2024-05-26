import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import home from "../../../../assets/images/home.png";
import Button from "@/Components/Button";
import Card from "@/Components/Card";

export default function Dashboard({
    auth,
    totalBookings,
    totalFutsalListings,
    totalCustomers,
    totalUsers,
}) {
    return (
        <AdminLayout user={auth}>
            <div className="container my-14">
                <h1 className="text-text font-bold text-xl">
                    Hello {auth.user.name}!
                </h1>
                <div class="w-full">
                    <div class="mx-auto grid max-w-screen-lg gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="max-w-md rounded-lg border px-6 pt-6 pb-10">
                            <div class="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
                                <svg
                                    class="h-8 w-8"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="4"
                                    version="1.1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 366.753 366.753"
                                    xml:space="preserve"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <g>
                                            {" "}
                                            <path d="M360.253,63.597H6.5c-3.59,0-6.5,2.91-6.5,6.5v226.559c0,3.59,2.91,6.5,6.5,6.5h353.753c3.59,0,6.5-2.91,6.5-6.5V70.097 C366.753,66.507,363.843,63.597,360.253,63.597z M176.876,202.585c-8.008-2.718-13.795-10.293-13.795-19.208 s5.787-16.49,13.795-19.208V202.585z M189.876,164.168c8.008,2.718,13.795,10.293,13.795,19.208s-5.787,16.49-13.795,19.208 V164.168z M13,163.082h48.805c-4.338,5.623-6.927,12.66-6.927,20.295c0,7.635,2.589,14.672,6.927,20.295H13V163.082z M108.469,183.375c0,0.002,0,0.004,0,0.005c-0.002,11.189-9.106,20.291-20.295,20.291c-11.191,0-20.296-9.104-20.296-20.295 s9.104-20.295,20.296-20.295C99.364,163.082,108.468,172.185,108.469,183.375z M13,216.672h74.734v-0.011 c0.147,0.002,0.292,0.011,0.439,0.011c4.565,0,8.917-0.925,12.882-2.595c-3.148,6.107-7.245,11.763-12.243,16.76 c-12.68,12.681-29.537,19.664-47.465,19.664H13V216.672z M88.174,150.082c-0.147,0-0.292,0.009-0.439,0.011v-0.011H13v-33.83 h28.348c25.944,0,48.48,14.805,59.648,36.401C97.047,150.998,92.716,150.082,88.174,150.082z M13,263.501h28.348 c21.4,0,41.521-8.336,56.658-23.472c15.104-15.105,23.432-35.184,23.46-56.549c0-0.035,0.003-0.069,0.003-0.104 c0-0.001,0-0.001,0-0.002s0-0.002,0-0.002c0-44.179-35.942-80.121-80.121-80.121H13V76.597h163.876v74.126 c-15.257,3.032-26.795,16.519-26.795,32.653c0,16.135,11.538,29.622,26.795,32.654v74.126H13V263.501z M189.876,290.156V216.03 c15.257-3.032,26.795-16.519,26.795-32.654c0-16.135-11.538-29.621-26.795-32.653V76.597h163.877v26.655h-28.352 c-21.399,0-41.521,8.336-56.658,23.472c-15.104,15.104-23.431,35.183-23.459,56.549c0,0.035-0.003,0.069-0.003,0.104 c0,0.001,0,0.001,0,0.002s0,0.002,0,0.002c0,44.179,35.941,80.121,80.12,80.121h28.352v26.655H189.876z M278.576,163.082 c11.19,0,20.295,9.104,20.295,20.295s-9.104,20.295-20.295,20.295c-11.19,0-20.294-9.104-20.295-20.294c0-0.002,0-0.004,0-0.005 C258.284,172.184,267.387,163.082,278.576,163.082z M353.753,203.672h-48.809c4.338-5.623,6.927-12.66,6.927-20.295 c0-7.635-2.589-14.672-6.927-20.295h48.809V203.672z M277.467,216.643v0.028h76.286v33.83h-28.352 c-25.943,0-48.479-14.805-59.647-36.401C269.38,215.619,273.329,216.507,277.467,216.643z M353.753,150.082h-76.286v0.028 c-4.16,0.137-8.132,1.033-11.773,2.567c3.148-6.108,7.245-11.763,12.242-16.761c12.682-12.68,29.539-19.664,47.466-19.664h28.352 V150.082z"></path>{" "}
                                            <path d="M32.27,165.652c-3.59,0-6.5,2.91-6.5,6.5v22.448c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5v-22.448 C38.77,168.563,35.859,165.652,32.27,165.652z"></path>{" "}
                                            <path d="M334.482,201.101c3.59,0,6.5-2.91,6.5-6.5v-22.448c0-3.59-2.91-6.5-6.5-6.5s-6.5,2.91-6.5,6.5v22.448 C327.982,198.19,330.893,201.101,334.482,201.101z"></path>{" "}
                                        </g>{" "}
                                    </g>
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
                                Total Futsal
                            </p>
                            <p class="text-4xl font-medium text-gray-800">
                                {totalFutsalListings}
                            </p>
                        </div>

                        <div class="max-w-md rounded-lg border px-6 pt-6 pb-10">
                            <div class="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
                                <svg
                                    class="h-8 w-8"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="4"
                                    version="1.1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 366.753 366.753"
                                    xml:space="preserve"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <g>
                                            {" "}
                                            <path d="M360.253,63.597H6.5c-3.59,0-6.5,2.91-6.5,6.5v226.559c0,3.59,2.91,6.5,6.5,6.5h353.753c3.59,0,6.5-2.91,6.5-6.5V70.097 C366.753,66.507,363.843,63.597,360.253,63.597z M176.876,202.585c-8.008-2.718-13.795-10.293-13.795-19.208 s5.787-16.49,13.795-19.208V202.585z M189.876,164.168c8.008,2.718,13.795,10.293,13.795,19.208s-5.787,16.49-13.795,19.208 V164.168z M13,163.082h48.805c-4.338,5.623-6.927,12.66-6.927,20.295c0,7.635,2.589,14.672,6.927,20.295H13V163.082z M108.469,183.375c0,0.002,0,0.004,0,0.005c-0.002,11.189-9.106,20.291-20.295,20.291c-11.191,0-20.296-9.104-20.296-20.295 s9.104-20.295,20.296-20.295C99.364,163.082,108.468,172.185,108.469,183.375z M13,216.672h74.734v-0.011 c0.147,0.002,0.292,0.011,0.439,0.011c4.565,0,8.917-0.925,12.882-2.595c-3.148,6.107-7.245,11.763-12.243,16.76 c-12.68,12.681-29.537,19.664-47.465,19.664H13V216.672z M88.174,150.082c-0.147,0-0.292,0.009-0.439,0.011v-0.011H13v-33.83 h28.348c25.944,0,48.48,14.805,59.648,36.401C97.047,150.998,92.716,150.082,88.174,150.082z M13,263.501h28.348 c21.4,0,41.521-8.336,56.658-23.472c15.104-15.105,23.432-35.184,23.46-56.549c0-0.035,0.003-0.069,0.003-0.104 c0-0.001,0-0.001,0-0.002s0-0.002,0-0.002c0-44.179-35.942-80.121-80.121-80.121H13V76.597h163.876v74.126 c-15.257,3.032-26.795,16.519-26.795,32.653c0,16.135,11.538,29.622,26.795,32.654v74.126H13V263.501z M189.876,290.156V216.03 c15.257-3.032,26.795-16.519,26.795-32.654c0-16.135-11.538-29.621-26.795-32.653V76.597h163.877v26.655h-28.352 c-21.399,0-41.521,8.336-56.658,23.472c-15.104,15.104-23.431,35.183-23.459,56.549c0,0.035-0.003,0.069-0.003,0.104 c0,0.001,0,0.001,0,0.002s0,0.002,0,0.002c0,44.179,35.941,80.121,80.12,80.121h28.352v26.655H189.876z M278.576,163.082 c11.19,0,20.295,9.104,20.295,20.295s-9.104,20.295-20.295,20.295c-11.19,0-20.294-9.104-20.295-20.294c0-0.002,0-0.004,0-0.005 C258.284,172.184,267.387,163.082,278.576,163.082z M353.753,203.672h-48.809c4.338-5.623,6.927-12.66,6.927-20.295 c0-7.635-2.589-14.672-6.927-20.295h48.809V203.672z M277.467,216.643v0.028h76.286v33.83h-28.352 c-25.943,0-48.479-14.805-59.647-36.401C269.38,215.619,273.329,216.507,277.467,216.643z M353.753,150.082h-76.286v0.028 c-4.16,0.137-8.132,1.033-11.773,2.567c3.148-6.108,7.245-11.763,12.242-16.761c12.682-12.68,29.539-19.664,47.466-19.664h28.352 V150.082z"></path>{" "}
                                            <path d="M32.27,165.652c-3.59,0-6.5,2.91-6.5,6.5v22.448c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5v-22.448 C38.77,168.563,35.859,165.652,32.27,165.652z"></path>{" "}
                                            <path d="M334.482,201.101c3.59,0,6.5-2.91,6.5-6.5v-22.448c0-3.59-2.91-6.5-6.5-6.5s-6.5,2.91-6.5,6.5v22.448 C327.982,198.19,330.893,201.101,334.482,201.101z"></path>{" "}
                                        </g>{" "}
                                    </g>
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
                                Total Bookings
                            </p>
                            <p class="text-4xl font-medium text-gray-800">
                                {totalBookings}
                            </p>
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
                                Active Customers
                            </p>
                            <p class="text-4xl font-medium text-gray-800">
                                {totalUsers}
                            </p>
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
                                Active Vendors
                            </p>
                            <p class="text-4xl font-medium text-gray-800">
                                {totalUsers}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
