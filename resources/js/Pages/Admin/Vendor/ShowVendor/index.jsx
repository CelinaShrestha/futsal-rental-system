import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import Table from "@/Components/Table";
import VendorTable from "@/Components/Table/VendorTable";

export default function ShowVendor({ auth, vendor }) {
    console.log(vendor);

    const headings = [
        "User",
        "Email",
        "Contact Number",
        "Total Courts",
        "Created at",
    ];

    return (
        <AdminLayout user={auth}>
            <Table headings={headings} title="Vendors" >
               <VendorTable vendor={vendor} />
            </Table>
            {/* {vendor.map((listing) => (
                <div key={listing.id}>
                    <div>{listing.username}</div>
                    <div>{listing.email}</div>
                    <div>{listing.phone}</div>
                </div>
            ))} */}

            {/* <div>
                <div className="flex mb-5">
                    <div className="w-[1200px]">
                        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                                <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                                    <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                        <span className="mr-3 font-semibold text-dark">
                                            Projects Deliveries
                                        </span>
                                        <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
                                            All projects from the Loopple team
                                        </span>
                                    </h3>
                                    <div className="relative flex flex-wrap items-center my-2">
                                        <a
                                            href="javascript:void(0)"
                                            className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                                        >
                                            {" "}
                                            See other projects{" "}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex-auto block py-8 pt-6 px-9">
                                    <div className="overflow-x-auto">
                                        <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                            <thead className="align-bottom">
                                                <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                    <th className="pb-3 text-start min-w-[175px]">
                                                        TASK
                                                    </th>
                                                    <th className="pb-3 text-end min-w-[100px]">
                                                        OWNER
                                                    </th>
                                                    <th className="pb-3 text-end min-w-[100px]">
                                                        PROGRESS
                                                    </th>
                                                    <th className="pb-3 pr-12 text-end min-w-[175px]">
                                                        STATUS
                                                    </th>
                                                    <th className="pb-3 pr-12 text-end min-w-[100px]">
                                                        DEADLINE
                                                    </th>
                                                    <th className="pb-3 text-end min-w-[50px]">
                                                        DETAILS
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-dashed last:border-b-0">
                                                    <td className="p-3 pl-0">
                                                        <div className="flex items-center">
                                                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                                <img
                                                                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                                                                    className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="flex flex-col justify-start">
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                                                >
                                                                    {" "}
                                                                    Social Media
                                                                    API{" "}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="font-semibold text-light-inverse text-md/normal">
                                                            Olivia Cambell
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                className="w-5 h-5 mr-1"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                                                />
                                                            </svg>{" "}
                                                            6.5%{" "}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-12 text-end">
                                                        <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                                            {" "}
                                                            In Progress{" "}
                                                        </span>
                                                    </td>
                                                    <td className="pr-0 text-start">
                                                        <span className="font-semibold text-light-inverse text-md/normal">
                                                            2023-08-23
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="1.5"
                                                                    stroke="currentColor"
                                                                    className="w-4 h-4"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-dashed last:border-b-0">
                                                    <td className="p-3 pl-0">
                                                        <div className="flex items-center">
                                                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                                <img
                                                                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-40-new.jpg"
                                                                    className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="flex flex-col justify-start">
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                                                >
                                                                    {" "}
                                                                    Geolocation
                                                                    App{" "}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="font-semibold text-light-inverse text-md/normal">
                                                            Luca Micloe
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-danger bg-danger-light rounded-lg">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                className="w-5 h-5 mr-1"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                                                                />
                                                            </svg>{" "}
                                                            2.7%{" "}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-12 text-end">
                                                        <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-light-inverse bg-light rounded-lg">
                                                            {" "}
                                                            Under Review{" "}
                                                        </span>
                                                    </td>
                                                    <td className="pr-0 text-start">
                                                        <span className="font-semibold text-light-inverse text-md/normal">
                                                            2024-04-11
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="1.5"
                                                                    stroke="currentColor"
                                                                    className="w-4 h-4"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-dashed last:border-b-0">
                                                    <td className="p-3 pl-0">
                                                        <div className="flex items-center">
                                                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                                <img
                                                                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-39-new.jpg"
                                                                    className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="flex flex-col justify-start">
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                                                >
                                                                    {" "}
                                                                    iOS Login{" "}
                                                                    <span className="text-sm">
                                                                        (Morra)
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="font-semibold text-light-inverse text-md/normal">
                                                            Bianca Winson
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                className="w-5 h-5 mr-1"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                                                />
                                                            </svg>{" "}
                                                            6.8%{" "}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-12 text-end">
                                                        <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                                            {" "}
                                                            In Progress{" "}
                                                        </span>
                                                    </td>
                                                    <td className="pr-0 text-start">
                                                        <span className="font-semibold text-light-inverse text-md/normal">
                                                            2024-02-10
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="1.5"
                                                                    stroke="currentColor"
                                                                    className="w-4 h-4"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-dashed last:border-b-0">
                                                    <td className="p-3 pl-0">
                                                        <div className="flex items-center">
                                                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                                <img
                                                                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-47-new.jpg"
                                                                    className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="flex flex-col justify-start">
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                                                >
                                                                    {" "}
                                                                    Axios Menu{" "}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="font-semibold text-light-inverse text-md/normal">
                                                            Roberto Alliton
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                className="w-5 h-5 mr-1"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                                                />
                                                            </svg>{" "}
                                                            4.5%{" "}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-12 text-end">
                                                        <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-success bg-success-light rounded-lg">
                                                            {" "}
                                                            Done{" "}
                                                        </span>
                                                    </td>
                                                    <td className="pr-0 text-start">
                                                        <span className="font-semibold text-light-inverse text-md/normal">
                                                            2023-05-31
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="1.5"
                                                                    stroke="currentColor"
                                                                    className="w-4 h-4"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-dashed last:border-b-0">
                                                    <td className="p-3 pl-0">
                                                        <div className="flex items-center">
                                                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                                <img
                                                                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-48-new.jpg"
                                                                    className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="flex flex-col justify-start">
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                                                >
                                                                    {" "}
                                                                    Resto Aperto{" "}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="font-semibold text-light-inverse text-md/normal">
                                                            Michael Kenny
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-danger bg-danger-light rounded-lg">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                className="w-5 h-5 mr-1"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                                                                />
                                                            </svg>{" "}
                                                            1%{" "}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-12 text-end">
                                                        <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-warning bg-warning-light rounded-lg">
                                                            {" "}
                                                            Postponed{" "}
                                                        </span>
                                                    </td>
                                                    <td className="pr-0 text-start">
                                                        <span className="font-semibold text-light-inverse text-md/normal">
                                                            2023-05-15
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="1.5"
                                                                    stroke="currentColor"
                                                                    className="w-4 h-4"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                    <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
                        <p className="text-sm text-slate-500 py-1">
                            {" "}
                            Tailwind CSS Component from{" "}
                            <a
                                href="https://www.loopple.com/theme/riva-dashboard-tailwind?ref=tailwindcomponents"
                                className="text-slate-700 hover:text-slate-900"
                                target="_blank"
                            >
                                Riva Dashboard
                            </a>{" "}
                            by{" "}
                            <a
                                href="https://www.loopple.com"
                                className="text-slate-700 hover:text-slate-900"
                                target="_blank"
                            >
                                Loopple Builder
                            </a>
                            .{" "}
                        </p>
                    </div>
                </div>
            </div> */}

            {/* <div className="lg:w-[1200px]">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">
                            Vendors
                        </h2>
                    </div>
                    <div className="my-2 flex sm:flex-row flex-col">
                        <div className="flex flex-row mb-1 sm:mb-0">
                        </div>
                        <div className="block relative">
                            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 fill-current text-gray-500"
                                >
                                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                                </svg>
                            </span>
                            <input
                                placeholder="Search"
                                className="appearance-none rounded  border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        {headings.map((heading) => (
                                            <th
                                                key={heading}
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                            >
                                                {heading}
                                            </th>

                                            // <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            //     User
                                            // </th>
                                            // <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            //     Email
                                            // </th>
                                            // <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            //     Contact Number
                                            // </th>
                                            // <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            //     Total Courts
                                            // </th>
                                            // <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            //     Created at
                                            // </th>
                                        ))}
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {vendor.map((listing) => (
                                        <tr key={listing.id}>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img
                                                            className="w-full h-full rounded-full"
                                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {listing.firstName}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {listing.email}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {listing.contactNumber}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    *Listngs no*
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {new Date(
                                                        listing.created_at
                                                    ).toLocaleDateString()}
                                                </p>
                                            </td>
                                            <td className="flex gap-2 px-5 py-5 border-b border-gray-200 bg-white text-sm items-center justify-center">
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    className="w-[25px]"
                                                >
                                                    <span>
                                                        <RiEdit2Line />
                                                    </span>
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="danger"
                                                    className="w-[25px]"
                                                >
                                                    <span>
                                                        <RiDeleteBin6Line />
                                                    </span>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span className="text-xs xs:text-sm text-gray-900">
                                    Showing 1 to 4 of 50 Entries
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                        Prev
                                    </button>
                                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </AdminLayout>
    );
}
