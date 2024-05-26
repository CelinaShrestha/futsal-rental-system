import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import Table from "@/Components/Table";
import VendorPayment from "@/Components/Table/VendorPaymentTable";

function index({ auth, payments }) {
    const headings = ["Vendor", "Contact Number", "Amount", "Last Updated"];
    return (
        <AdminLayout user={auth}>
            <Table headings={headings} title="Payment Dues">
                <VendorPayment payments={payments} />
            </Table>
        </AdminLayout>
    );
}

export default index;
