import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function PaymentSuccess({ auth, paymentDetails }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <h1>Payment Successful!</h1>
            <p>Thank you for your payment.</p>
            <div>
                <p>Amount: {paymentDetails.amount}</p>
                <p>Transaction ID: {paymentDetails.idx}</p>
                <p>
                    Date: {new Date(paymentDetails.created_on).toLocaleString()}
                </p>
            </div>
            {/* <InertiaLink href="/">Go back to homepage</InertiaLink> */}
        </AuthenticatedLayout>
    );
}
