import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import FutsalCard from "@/Components/FutsalCard";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
    AdjustmentsHorizontalIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import SearchComponent from "@/Components/SearchComponent";
import { Inertia } from "@inertiajs/inertia";

const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
];

const filterOptions = [
    {
        id: "location",
        name: "City",
        options: [
            { value: "kathmandu", label: "Kathmandu" },
            { value: "bhaktapur", label: "Bhaktapur" },
            { value: "lalitpur", label: "Lalitpur" },
        ],
    },
    {
        id: "price",
        name: "Price Range",
        options: [
            { value: "300-500", label: "रु 300 - रु 500" },
            { value: "501-1000", label: "रु 501 - रु 1000" },
            {
                value: "1001-2000",
                label: "रु 1001 - रु 2000",
            },
            {
                value: "2001-3000",
                label: "रु 2001 - रु 3000",
            },
        ],
    },
    {
        id: "is_available",
        name: "Availability",
        options: [
            { value: "true", label: "Available" },
            { value: "false", label: "Not Available" },
        ],
    },
];

export default function ViewFutsal({ auth, futsal_listings }) {
    const [filters, setFilters] = useState(filterOptions);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const { data, setData, post } = useForm({
        filters: [],
    });

    console.log(futsal_listings);

    const checkedValue = (e) => {
        const { name, value, checked } = e.target;
        if (checked) {
            // Update filters based on filter type
            switch (name) {
                case "location":
                    setData((data) => ({
                        ...data,
                        location: value,
                    }));
                    break;
                case "price":
                    setData((data) => ({
                        ...data,
                        price: value,
                    }));
                    break;
                case "is_available":
                    setData((data) => ({
                        ...data,
                        is_available: value,
                    }));
                    break;
                default:
                    break;
            }
        } else {
            // Remove filter if unchecked
            setData((data) => ({
                ...data,
                [name]: null,
            }));
        }
    };

    console.log(data);

    const handleSearch = async () => {
        try {
            const response = Inertia.visit(route("search", { q: inputValue }));
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data.futsal_listings);
            } else {
                console.error("Failed to fetch search results");
            }
        } catch (error) {
            console.error(
                "Error occurred while fetching search results:",
                error
            );
        }
    };

    // ViewFutsal.js

    const applyFilters = async () => {
        try {
            // Send separate requests for each filter type
            if (data.location) {
                await Inertia.visit(route("futsal-listings.filter"), {
                    data: { location: data.location },
                });
            }
            if (data.price) {
                await Inertia.visit(route("futsal-listings.filter"), {
                    data: { price: data.price },
                });
            }
            if (data.is_available) {
                await Inertia.visit(route("futsal-listings.filter"), {
                    data: { is_available: data.is_available },
                });
            }
        } catch (error) {
            console.error(
                "Error occurred while fetching filtered listings:",
                error
            );
        }
    };

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <div className="bg-white">
                    <div>
                        {/* Mobile filter dialog */}

                        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex items-baseline border-b border-gray-200 pb-6 justify-between">
                                <SearchComponent
                                    inputValue={inputValue}
                                    setInputValue={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                    handleSearch={handleSearch}
                                />

                                <div className="flex items-center">
                                    <Menu
                                        as="div"
                                        className="relative inline-block text-left"
                                    >
                                        <div>
                                            <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                                Sort
                                                <ChevronDownIcon
                                                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                    aria-hidden="true"
                                                />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    {sortOptions.map(
                                                        (option) => (
                                                            <Menu.Item
                                                                key={
                                                                    option.name
                                                                }
                                                            >
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <a
                                                                        href={
                                                                            option.href
                                                                        }
                                                                        className={classNames(
                                                                            option.current
                                                                                ? "font-medium text-gray-900"
                                                                                : "text-gray-500",
                                                                            active
                                                                                ? "bg-gray-100"
                                                                                : "",
                                                                            "block px-4 py-2 text-sm"
                                                                        )}
                                                                    >
                                                                        {
                                                                            option.name
                                                                        }
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        )
                                                    )}
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>

                                    {/* <button
                                type="button"
                                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                            >
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button> */}
                                    <button
                                        type="button"
                                        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                        onClick={() =>
                                            setMobileFiltersOpen(true)
                                        }
                                    >
                                        <span className="sr-only">Filters</span>
                                        <FunnelIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </div>

                            <section
                                aria-labelledby="products-heading"
                                className="pb-24 pt-6"
                            >
                                <h2 id="products-heading" className="sr-only">
                                    Products
                                </h2>

                                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                    {/* Filters */}
                                    <div className="hidden lg:block">
                                        <div className="flex gap-2">
                                            <AdjustmentsHorizontalIcon className="h-5 w-5" />
                                            <h1 className="text-text font-semibold ">
                                                Filter by
                                            </h1>
                                        </div>

                                        {/* <ul
                                    role="list"
                                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                                >
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href}>
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul> */}

                                        {filters.map((section) => (
                                            <Disclosure
                                                as="div"
                                                key={section.id}
                                                className="border-b border-gray-200 py-6"
                                            >
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-my-3 flow-root">
                                                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-gray-900">
                                                                    {
                                                                        section.name
                                                                    }
                                                                </span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <MinusIcon
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    ) : (
                                                                        <PlusIcon
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-4">
                                                                {section.options.map(
                                                                    (
                                                                        option,
                                                                        optionIdx
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                option.value
                                                                            }
                                                                            className="flex items-center"
                                                                        >
                                                                            <input
                                                                                id={`filter-${section.id}-${optionIdx}`}
                                                                                name={`${section.id}`}
                                                                                defaultValue={
                                                                                    option.value
                                                                                }
                                                                                type="checkbox"
                                                                                defaultChecked={
                                                                                    option.checked
                                                                                }
                                                                                onChange={
                                                                                    checkedValue
                                                                                }
                                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                            />
                                                                            <label
                                                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                                className="ml-3 text-sm text-gray-600"
                                                                            >
                                                                                {
                                                                                    option.label
                                                                                }
                                                                            </label>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                        <Button
                                            variant="secondary"
                                            className="mt-6"
                                            onClick={applyFilters}
                                        >
                                            Apply Filters
                                        </Button>
                                    </div>
                                    {/* Product grid */}
                                    <div className="lg:col-span-3 ml-14">
                                        {futsal_listings.map((listing) => (
                                            <FutsalCard
                                                key={listing.id}
                                                listing={listing}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
