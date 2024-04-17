import React from "react";
import futsal from "../../../assets/images/futsal.jpg";
import Button from "../Button";
import { Inertia } from "@inertiajs/inertia";

export default function FutsalCard({ listing }) {
    const onClickHandler = (e) => {
        console.log(listing.id);
        Inertia.visit(route("futsal-listings.show", { id: listing.id }));
    };

    const truncateDescription = (description) => {
        console.log("Description:", description);
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
                <div>ratings</div>
                <div>
                    <p className="text-justify">{truncateDescription(listing.short_description)} ...</p>
                </div>
                <div className="flex flex-col gap-2 items-end justify-end pr-4">
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
