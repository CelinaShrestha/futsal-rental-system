import React from "react";
import VendorLayout from "@/Layouts/VendorLayout";
import FutsalCard from "@/Components/FutsalCard";

function ViewCourt({ auth, futsal_listings }) {
    console.log(futsal_listings);
    return (
        <VendorLayout user={auth.user}>
            Hello
            {futsal_listings.map((listing) => (
                <FutsalCard key={listing.id} listing={listing} />
            ))}
        </VendorLayout>
    );
}

export default ViewCourt;
