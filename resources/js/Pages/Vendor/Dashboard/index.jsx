import React from "react";
import VendorLayout from "@/Layouts/VendorLayout";

export default function Dashboard({ auth }) {
    return (
        <VendorLayout user={auth}>
           Vendor
        </VendorLayout>
    );
}
