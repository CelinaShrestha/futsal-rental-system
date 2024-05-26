import React from "react";
import VendorLayout from "@/Layouts/VendorLayout";
import Table from "@/Components/Table";
import VendorCourtTable from "@/Components/Table/VendorCourtTable";
import Pagination from "@/Components/Pagination";

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
                <VendorCourtTable futsal_listings={futsal_listings.data} />
            </Table>
            <Pagination meta={futsal_listings} pageSize={2} />
        </VendorLayout>
    );
}

export default ViewCourt;
