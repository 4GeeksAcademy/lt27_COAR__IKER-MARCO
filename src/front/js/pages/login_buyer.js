import React, { useContext } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Formc } from "../component/formlogin_c";
import { Formb } from "../component/formlogin_b";
import { Forma } from "../component/formlogin_a";

import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login_buyer = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Welcome!</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            {store.authorize_b == true ? (
              <Navigate to="/buyer_products" />
            ) : (
              <Formb />
            )}
          </div>
        </div>
      </div>

      <h2>Or <Link to={"/buyer/new"} className="btn btn-outline-primary">
        <span>Sign-up</span>
      </Link>  if you are new </h2>
    </div>
  );
};
