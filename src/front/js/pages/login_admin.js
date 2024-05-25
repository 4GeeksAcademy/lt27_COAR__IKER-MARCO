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
      <h1>Hello Admin!!</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            {store.authorize_a == true ? <Navigate to="/admin" /> : <Forma />}
          </div>
        </div>
      </div>

      <h2>Or sing up if you are new </h2>

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
