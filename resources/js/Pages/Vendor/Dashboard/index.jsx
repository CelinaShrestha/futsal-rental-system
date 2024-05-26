import React from "react";
import VendorLayout from "@/Layouts/VendorLayout";

export default function Dashboard({
    auth,
    FutsalCount,
    BookingCount,
    CustomerCount,
    RefundCount,
}) {
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
                                Total Futsal Courts
                            </p>
                            <p class="text-4xl font-medium text-gray-800">
                                {FutsalCount}
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
                                {BookingCount}
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
                                {CustomerCount}
                            </p>
                        </div>
                        <div class="max-w-md rounded-lg border px-6 pt-6 pb-10">
                            <div class="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
                                <svg
                                    class="h-8 w-8"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="5"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512"
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
                                            <g>
                                                {" "}
                                                <path d="M256,79.62c-97.257,0-176.38,79.123-176.38,176.38S158.743,432.38,256,432.38S432.38,353.257,432.38,256 S353.257,79.62,256,79.62z M256,415.793c-88.11,0-159.793-71.682-159.793-159.793S167.89,96.207,256,96.207 S415.793,167.89,415.793,256S344.11,415.793,256,415.793z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M264.294,249.668v-64.661c27.098,2.178,45.339,14.785,45.339,26.207c0,4.58,3.713,8.294,8.294,8.294 c4.58,0,8.294-3.713,8.294-8.294c0-22.456-26.601-40.384-61.927-42.832v-9.695c0-4.58-3.713-8.294-8.294-8.294 c-4.58,0-8.294,3.713-8.294,8.294v9.695c-35.326,2.448-61.927,20.376-61.927,42.832c0,30.084,28.605,41.823,61.927,51.118v64.661 c-27.098-2.179-45.339-14.785-45.339-26.207c0-4.58-3.713-8.294-8.294-8.294c-4.58,0-8.294,3.713-8.294,8.294 c0,22.456,26.601,40.384,61.927,42.832v9.695c0,4.58,3.713,8.294,8.294,8.294c4.58,0,8.294-3.713,8.294-8.294v-9.695 c35.326-2.448,61.927-20.376,61.927-42.832C326.22,270.702,297.616,258.964,264.294,249.668z M247.706,245.057 c-33.638-9.939-45.339-18.966-45.339-33.843c0-11.422,18.241-24.029,45.339-26.207V245.057z M264.294,326.993v-60.05 c33.638,9.939,45.339,18.966,45.339,33.843C309.633,312.208,291.392,324.815,264.294,326.993z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M437.019,74.981C388.668,26.628,324.38,0,256,0C182.385,0,113.65,30.975,65.041,85.5l4.543-31.8 c0.647-4.535-2.504-8.735-7.038-9.383c-4.536-0.643-8.735,2.504-9.383,7.037l-8.847,61.927c-0.406,2.845,0.69,5.698,2.896,7.541 c1.514,1.263,3.4,1.926,5.316,1.926c0.878,0,1.764-0.139,2.622-0.426l53.08-17.693c4.346-1.449,6.694-6.145,5.246-10.491 c-1.45-4.346-6.145-6.696-10.491-5.246l-26.668,8.89C121.837,46.021,186.602,16.587,256,16.587 c63.949,0,124.071,24.903,169.291,70.122c45.219,45.22,70.122,105.341,70.122,169.291s-24.903,124.071-70.122,169.291 c-45.22,45.219-105.341,70.122-169.291,70.122c-4.58,0-8.294,3.713-8.294,8.294c0,4.58,3.713,8.294,8.294,8.294 c68.38,0,132.668-26.628,181.019-74.981S512,324.38,512,256S485.372,123.332,437.019,74.981z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M221.789,492.987c-2.82-0.404-5.66-0.861-8.441-1.361c-4.51-0.813-8.82,2.186-9.631,6.695 c-0.811,4.508,2.186,8.82,6.695,9.631c2.976,0.535,6.013,1.025,9.028,1.456c0.398,0.057,0.794,0.085,1.185,0.085 c4.06,0,7.608-2.985,8.2-7.119C229.472,497.838,226.323,493.637,221.789,492.987z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M181.254,483.516c-5.221-1.714-10.451-3.636-15.546-5.712c-4.24-1.726-9.081,0.308-10.811,4.552 c-1.728,4.242,0.31,9.082,4.552,10.811c5.451,2.221,11.046,4.276,16.632,6.11c0.859,0.282,1.731,0.416,2.589,0.416 c3.486,0,6.731-2.216,7.879-5.709C187.976,489.63,185.606,484.945,181.254,483.516z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M22.092,307.29c-1.171-5.368-2.169-10.848-2.966-16.288c-0.665-4.533-4.873-7.664-9.407-7.004 c-4.533,0.664-7.669,4.876-7.004,9.407c0.853,5.818,1.919,11.679,3.172,17.42c0.847,3.88,4.281,6.528,8.095,6.528 c0.586,0,1.181-0.062,1.776-0.192C20.232,316.184,23.069,311.765,22.092,307.29z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M19.299,182.287c-4.413-1.212-8.98,1.387-10.192,5.805c-1.556,5.667-2.932,11.466-4.09,17.234 c-0.902,4.491,2.007,8.863,6.498,9.765c0.552,0.111,1.1,0.164,1.642,0.164c3.869,0,7.332-2.723,8.122-6.662 c1.083-5.392,2.37-10.814,3.824-16.113C26.314,188.063,23.717,183.499,19.299,182.287z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M37.658,354.358c-2.26-5.008-4.372-10.16-6.278-15.312c-1.589-4.296-6.361-6.491-10.656-4.901 c-4.296,1.589-6.49,6.36-4.901,10.656c2.038,5.51,4.297,11.021,6.715,16.38c1.384,3.069,4.403,4.884,7.565,4.884 c1.14,0,2.299-0.237,3.406-0.736C37.685,363.445,39.541,358.533,37.658,354.358z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M9.241,232.649c-4.578-0.278-8.502,3.209-8.776,7.782C0.157,245.582,0,250.82,0,256.007c0,0.707,0.003,1.413,0.009,2.119 c0.036,4.558,3.742,8.228,8.293,8.228c0.021,0,0.044,0,0.066,0c4.58-0.036,8.264-3.779,8.229-8.359 c-0.005-0.667-0.009-1.334-0.009-1.995c0-4.85,0.147-9.753,0.436-14.575C17.299,236.853,13.814,232.924,9.241,232.649z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M135.995,463.212c-4.75-2.757-9.47-5.719-14.03-8.805c-3.794-2.567-8.949-1.574-11.517,2.219 c-2.568,3.794-1.574,8.949,2.219,11.517c4.874,3.3,9.922,6.467,15.001,9.415c1.31,0.761,2.741,1.122,4.156,1.122 c2.86,0,5.642-1.481,7.181-4.133C141.305,470.588,139.957,465.512,135.995,463.212z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M62.633,397.197c-3.245-4.437-6.376-9.043-9.309-13.695c-2.442-3.874-7.563-5.037-11.439-2.592 c-3.875,2.443-5.035,7.564-2.592,11.439c3.135,4.973,6.483,9.898,9.952,14.641c1.625,2.221,4.146,3.397,6.7,3.397 c1.7,0,3.414-0.521,4.89-1.6C64.533,406.082,65.338,400.894,62.633,397.197z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M95.894,434.005c-4.087-3.678-8.099-7.547-11.924-11.497c-3.186-3.291-8.435-3.376-11.727-0.189 c-3.291,3.186-3.376,8.436-0.189,11.727c4.088,4.223,8.376,8.358,12.744,12.289c1.586,1.427,3.57,2.129,5.546,2.129 c2.269,0,4.529-0.926,6.167-2.745C99.575,442.313,99.298,437.069,95.894,434.005z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M35.692,142.346c-4.139-1.965-9.086-0.203-11.051,3.932c-1.302,2.74-2.571,5.54-3.773,8.324 c-1.816,4.204,0.121,9.086,4.326,10.902c1.072,0.462,2.187,0.682,3.284,0.682c3.209,0,6.266-1.874,7.618-5.007 c1.124-2.602,2.31-5.221,3.528-7.783C41.589,149.258,39.829,144.312,35.692,142.346z"></path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                    </g>
                                </svg>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class=" h-6 w-6 "
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
                                Refund Requests
                            </p>
                            <p class="text-4xl font-medium text-gray-800">
                                {RefundCount}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </VendorLayout>
    );
}
