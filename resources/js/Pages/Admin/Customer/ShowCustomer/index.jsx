import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import Table from "@/Components/Table";
import UserTable from "@/Components/Table/UserTable";


export default function ShowVendor({ auth, user }) {
    console.log(user);

    const headings = [
        "User",
        "Email",
        "Contact Number",
        "Booked Courts",
        "Created at",
    ];

    return (
        <AdminLayout user={auth}>
            <Table headings={headings} title="Customers">
                <UserTable user={user} />
            </Table>
        </AdminLayout>
    );
}
