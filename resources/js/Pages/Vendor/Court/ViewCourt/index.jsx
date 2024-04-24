import React from "react";
import VendorLayout from "@/Layouts/VendorLayout";
import Table from "@/Components/Table";
import VendorCourtTable from "@/Components/Table/VendorCourtTable";

function ViewCourt({ auth, futsal_listings }) {
    console.log(futsal_listings);
    const headings = [
        "Court Name",
        "Location",
        "Contact Number",
        "no. of Bookings",
        "Created at",
        "Status",
    ];
    return (
        <VendorLayout user={auth}>
            <Table headings={headings} title="Futsal Courts">
                <VendorCourtTable futsal_listings={futsal_listings} />
            </Table>
        </VendorLayout>
    );
}

export default ViewCourt;
