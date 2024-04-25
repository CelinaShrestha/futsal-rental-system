import React from "react";
import futsal from "../../../assets/images/futsal.jpg";
import Button from "../Button";
import { Inertia } from "@inertiajs/inertia";

export default function FutsalCard({ listing }) {
    const onClickHandler = (e) => {
        Inertia.visit(route("futsal-listings.show", { id: listing.id }));
    };

    const truncateDescription = (description) => {
        const words = description.split(" ");
        const truncatedWords = words.slice(0, 20);
        return truncatedWords.join(" ");
    };

    return (
        <div className="futsal-card mb-4">
            <div className="img self-center">
                <img
                    src={`http://127.0.0.1:8000/storage/${listing.images[0]}`}
                    alt=""
                />
            </div>
            <div className="grid grid-cols-[60%,40%] gap-4 p-4">
                <div>
                    <h1 className="text-lg font-semibold">{listing.title}</h1>
                    <p className="text-secondary-color">{listing.location}</p>
                </div>
                {listing.average_rating ? (
                    <div className="flex justify-end pr-4 text-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {listing.average_rating}
                    </div>
                ) : (
                    <div>
                        <p className="text-gray-600 flex justify-end pr-4 items-center">
                            Not rated
                        </p>
                    </div>
                )}

                <div>
                    <p className="text-justify">
                        {truncateDescription(listing.short_description)} ...
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-end justify-end pr-4 mb-2">
                    <p className="text-secondary-color">
                        Rs. {listing.price}/hr
                    </p>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="w-[100px]"
                        onClick={onClickHandler}
                    >
                        View
                    </Button>
                </div>
            </div>
        </div>
    );
}
