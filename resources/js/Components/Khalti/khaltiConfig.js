import KhaltiCheckout from "khalti-checkout-web";
import React from "react";
import myKey from "./khaltiKey";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

let config = {
    // replace this key with yours
    publicKey: "live_public_key_9901b601b0304a58b95ff5af57619230",
    productIdentity: "1234567890",
    productName: "kickIt",
    productUrl: "http://localhost:8000/",
    eventHandler: {
        onSuccess: (payload) => {
            console.log("Payment successful", payload);
            // Directly using Inertia inside the event handler
            Inertia.post("/api/payment/verify", {
                token: payload.token,
                amount: payload.amount,
            });
        },
        onError: (error) => {
            console.log("Error during payment", error);
        },
        onClose: () => {
            console.log("Payment widget is closing");
        },
    },
    paymentPreference: [
        "KHALTI",
        "EBANKING",
        "MOBILE_BANKING",
        "CONNECT_IPS",
        "SCT",
    ],
};

export default config;
