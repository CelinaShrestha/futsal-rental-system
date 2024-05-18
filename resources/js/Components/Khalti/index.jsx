import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";
import Button from "../Button";

function Khalti() {
    let checkout = new KhaltiCheckout(config);
    return (
        <Button onClick={() => checkout.show({ amount: 1000 })} color="primary">
            Pay
        </Button>
    );
}

export default Khalti;
// import React from "react";
// import axios from "axios";
// import Button from "../Button";
// import { Inertia } from "@inertiajs/inertia";

// function Khalti() {
//     const handleKhaltiPayment = async () => {
//         const payload = {
//             return_url: "http://localhost:8000/",
//             website_url: "http://localhost:8000/",
//             amount: 1000, // Ensure this is in paisa if required by Khalti
//             purchase_order_id: "Order01",
//             purchase_order_name: "KickIt Futsal",
//             merchant_username: "KickIt Futsal",
//             customer_info: {
//                 name: "Celina",
//                 email: "celinasth7@gmail.com",
//                 phone: "9843453113",
//             },
//         };

//         try {
//             Inertia.post("/api/payment/verify", payload);
//             // if (response.data.payment_url) {
//             //     // Redirect to the payment URL returned from the backend
//             //     window.location.href = response.data.payment_url;
//             // }

//         } catch (err) {
//             console.error("Error during payment initiation:", err);
//         }
//     };

//     return (
//         <Button onClick={handleKhaltiPayment} color="primary">
//             Pay
//         </Button>
//     );
// }

// export default Khalti;
