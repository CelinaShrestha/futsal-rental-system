import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import Table from "@/Components/Table";
import CourtTable from "@/Components/Table/CourtTable";
import Pagination from "@/Components/Pagination";

export default function ShowCourt({ auth, futsal_listings }) {
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
                <CourtTable futsal_listings={futsal_listings.data} />
            </Table>
            <Pagination meta={futsal_listings} pageSize={2} />
        </AdminLayout>
    );
}
