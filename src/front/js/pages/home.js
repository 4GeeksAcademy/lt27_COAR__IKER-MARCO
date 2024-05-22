import React, { useContext } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Formc } from "../component/formlogin_c";
import { Formb } from "../component/formlogin_b";

import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h2>Craftmen</h2>
            {store.authorize == true ? <Navigate to="/craftmen" /> : <Formc />}
          </div>
          <div className="col">
            <h2>Buyer</h2>
            {store.authorize_b == true ? <Navigate to="/buyer_products" /> : <Formb />}
          </div>
          <div className="col">
            <h2>Admin</h2>
          </div>
        </div>
      </div>

      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://start.4geeksacademy.com/starters/react-flask">
          Read documentation
        </a>
      </p>
    </div>
  );
};
