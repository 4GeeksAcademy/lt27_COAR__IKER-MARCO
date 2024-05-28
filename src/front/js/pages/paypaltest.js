import React, { useContext } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Formc } from "../component/formlogin_c";
import { Formb } from "../component/formlogin_b";
import { Forma } from "../component/formlogin_a";

import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

import PayPalCheckout from "../component/PayPal_Checkout.js";

export const Paypalltest = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Paypall test</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col"><PayPalCheckout /></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
