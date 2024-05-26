import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import Table from "@/Components/Table";
import VendorTable from "@/Components/Table/VendorTable";
import Pagination from "@/Components/Pagination";

export default function ShowVendor({ auth, vendor }) {

    const headings = [
        "User",
        "Email",
        "Contact Number",
        "Total Courts",
        "Created at",
    ];

    return (
        <AdminLayout user={auth}>
            <Table headings={headings} title="Vendors">
                <VendorTable vendor={vendor.data} />
            </Table>
            <Pagination meta={vendor} pageSize={2} />
        </AdminLayout>
    );
}
