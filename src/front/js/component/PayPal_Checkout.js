import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalCheckout = () => {
  const { store } = useContext(Context);

  return (
    <PayPalScriptProvider options={{ "client-id": "AUmVvVtMmjOG1_oYnEC0SkOXI07qoNtDv-qXUx5iTlpQjNwZysTiOGY9iHUJWa3OPVXOtjhjE2p28NKR" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: `${store.Pago}` // Change this to the amount you want to charge
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