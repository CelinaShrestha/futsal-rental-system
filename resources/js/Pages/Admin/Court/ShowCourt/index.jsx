import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import Table from "@/Components/Table";
import CourtTable from "@/Components/Table/CourtTable";

export default function ShowCourt({ auth, futsal_listings }) {
    console.log(futsal_listings);

    const headings = [
        "Court Name",
        "Location",
        "Contact Number",
        "Vendor",
        "Created at",
        "Status",
    ];

    return (
        <AdminLayout user={auth}>
            <Table headings={headings} title="Futsal Courts">
                <CourtTable futsal_listings={futsal_listings} />
            </Table>
        </AdminLayout>
    );
}
