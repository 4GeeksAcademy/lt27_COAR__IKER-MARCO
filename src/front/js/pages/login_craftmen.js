import React, { useContext } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Formc } from "../component/formlogin_c";
import { Formb } from "../component/formlogin_b";
import { Forma } from "../component/formlogin_a";
import { Link } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login_craftmen = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Hello Craftman!!</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            {store.authorize == true ? <Navigate to="/product" /> : <Formc />}
          </div>
        </div>
      </div>

      <h2>Or <Link to={"/craftmencreate"} className="btn btn-outline-primary">
        <span>Sign-up</span>
      </Link>  if you are new </h2>
    </div>
  );
};
