import React, { useContext } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Formc } from "../component/formlogin_c";
import { Formb } from "../component/formlogin_b";
import { Forma } from "../component/formlogin_a";

import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login_admin = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Hi boss!</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            {store.authorize_a == true ? <Navigate to="/admin" /> : <Forma />}
          </div>
        </div>
      </div>
    </div>
  );
};
