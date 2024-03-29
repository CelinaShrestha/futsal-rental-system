import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import Table from "@/Components/Table";
import UnverifiedCourtTable from "@/Components/Table/UnverifiedTable";

export default function UnverifiedCourt({ auth, futsal_listings }) {
    console.log(futsal_listings);


    const headings = [
        "Court Name",
        "Location",
        "Contact Number",
        "Vendor",
        "Created at",
    ];

    return (
        <AdminLayout user={auth}>
            <Table headings={headings} title="Futsal Courts">
                <UnverifiedCourtTable
                    futsal_listings={futsal_listings}
                />
            </Table>
        </AdminLayout>
    );
}
