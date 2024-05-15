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
