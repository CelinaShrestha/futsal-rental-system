import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function PaymentError({ auth, error, status }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <h1>Payment Failed</h1>
            <p>Unfortunately, there was an error processing your payment.</p>
            <p>Error: {error.detail || "Unknown error"}</p>
            <p>Status code: {status}</p>
            {/* <InertiaLink href="/">Try Again</InertiaLink> */}
        </AuthenticatedLayout>
    );
}
