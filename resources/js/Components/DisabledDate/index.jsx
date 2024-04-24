import React from "react";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";

function DisabledDate({ futsal_listing }) {
    console.log(futsal_listing);
    const HandleOnClick = () => {
        console.log("Disable Date or Time");
        Inertia.visit(route("vendor.disable.index", { id: futsal_listing.id }));
    };
    return (
        <div>
            <Button
                width="w-[200px]"
                className={"text-nowrap"}
                onClick={HandleOnClick}
            >
                Disable Date or Time
            </Button>
        </div>
    );
}

export default DisabledDate;
