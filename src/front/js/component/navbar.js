import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  function handlelogout() {
    actions.logout();
    navigate("/");
  }

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="row container text-center">
          <div className="col">
            <Link to="/">
              <span className="navbar-brand mb-0 h1">React Boilerplate</span>
            </Link>
          </div>
          <div className="col">
            <Link to="/demo">
              <button className="btn btn-primary">
                Check the Context in action
              </button>
            </Link>
          </div>
          <div className="col">
            {store.authorize}
            {store.authorize == true ? (
              <>
                <button
                  onClick={() => handlelogout()}
                  className="btn btn-danger"
                >
                  Logout Craftmen
                </button>
                <Link to="/craftmen">
                  <button className="btn btn-outline-seconda ry">
                    Craftmen
                  </button>
                </Link>
                <Link to="/product">
                  <button className="btn btn-outline-secondary">
                    Products
                  </button>
                </Link>
              </>
            ) : null}
          </div>
          <div className="col">
            <Link to="/category">
              <button className="btn btn-outline-secondary">Category</button>
            </Link>
          </div>
          <div className="col">
            <Link to="/admin">
              <button className="btn btn-outline-secondary">Admin</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
