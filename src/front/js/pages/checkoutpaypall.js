import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import {  } from "react-router-dom";

import PaypalButton from "../component/paypalButton.jsx";

export const CheckoutPaypall = () => {
  const { store, actions } = useContext(Context);
  

  const [data, setData] = useState({
    category: "",
    category_id: "",
    description: "",
    id: "",
    image: "",
    name: "",
    price: "",
    stock: "",
  });

  const info = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-6 col-md-2">
          <h1>Welcome buyer</h1>
          <br />
                  
        </div>
        <div className="row mb-3 text-center col-md-10">
          <h1>Paypall</h1>
          <PaypalButton />
        </div>
      </div>
    </div>
  );
};
