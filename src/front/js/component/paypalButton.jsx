import React, { useEffect } from "react";
import axios from "axios";
import products from "/workspaces/lt27_COAR__IKER-MARCO/src/front/js/component/products.json"

function PaypalButton() {
    function renderPaypalButton (){
        window.paypal.Buttons({
            createOrder: async () => {
                axios (
                    {
                        url: "http://localhost:5000/paypal/create-payment",
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        data: products
                    }
                )
            }
            
        }).render("#paypal-button-container");
    }

    useEffect(() => {
        renderPaypalButton();
    }, []);

  return (
    <div>
      <div id="paypal-button-container"></div>
    </div>
  );
}

export default PaypalButton;


// createOrder: (data, actions) => {
//     // This function sets up the details of the transaction, including the amount and line item details.
//     return actions.order.create({
//         purchase_units: [
//             {
//                 amount: {
//                     value: "0.01",
//                 },
//             },
//         ],
//     });
// },