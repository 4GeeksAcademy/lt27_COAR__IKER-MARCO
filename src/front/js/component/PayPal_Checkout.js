import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalCheckout = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "ATJqMAkqG5mG-xCRTSquqwgZLLNBKMY-205ucKxZp_ahIKvIRkFW4Y90cPoqbdBQk6Z6pmmTprOoYYzj" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: "0.01" // Change this to the amount you want to charge
              }
            }]
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Transacción completada por " + details.payer.name.given_name);
            // Llama a tu backend para almacenar los detalles de la transacción
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckout;
