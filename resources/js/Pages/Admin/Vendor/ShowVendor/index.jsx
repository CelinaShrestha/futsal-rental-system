import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function ShowVendor({ auth,vendor }) {
    console.log(vendor);
    return (
        <AdminLayout user={auth}>
            {vendor.map((listing) => (
                <div key={listing.id}>
                    <div>{listing.username}</div>
                    <div>{listing.email}</div>
                    <div>{listing.phone}</div>
                </div>
            ))}
        </AdminLayout>
    );
}
