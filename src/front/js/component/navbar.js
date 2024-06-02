import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();




  const handleClick = () => {
    navigate("/cart")
  }


  return (
    <>
      <div className="hero bg-success p-2 text-dark bg-opacity-50">
        <nav className="navbar">
          <div className="col-1"></div>

          <div className="col-1">
            <Link to="/">
              <span className="btn btn-outline-light">COAR</span>
            </Link>
          </div>
          <div className="col-7 row">

            <div className="col">
            </div>
            <div className="col">
            </div>
            <div className="col">
            </div>
    

            <div className="col">
              <Link to="/">
                <button className="btn btn-outline-light">Home</button>
              </Link>
            </div>

            <div className="col">
              <Link to="/shop">
                <button className="btn btn-outline-light">Shop</button>
              </Link>
            </div>

            <div className="col">
              <Link to="/about">
                <button className="btn btn-outline-light">About</button>
              </Link>
            </div>

            <div className="col">
              <Link to="/services">
                <button className="btn btn-outline-light">Services</button>
              </Link>
            </div>

            <div className="col">
              <Link to="/blogpage">
                <button className="btn btn-outline-light">Blog</button>
              </Link>
            </div>

            <div className="col">
              <Link to="/contactus">
                <button className="btn btn-outline-light">Contact</button>
              </Link>
            </div>

          </div>
          <div className="col-2 row">

            <div className="col btn-group dropstart">
              <button
                className=" btn btn-outline-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-lines-fill"></i>

              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    <Link to="/login_craftmen">
                      <button className="btn btn-outline-dark">Craftmen</button>
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <Link to="/login_buyer">
                      <button className="btn btn-outline-dark">Client</button>
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <Link to="/login_admin">
                      <button className="btn btn-outline-dark">Admin</button>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col btn-group dropstart">
              <button
                className=" btn btn-outline-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i style={{ "border": "1px solid white" }} onClick={handleClick} className="fa-solid fa-cart-shopping p-1 m-0"></i>
                <span className="badge text-bg-secondary">
                  ({store.cart.length})
                </span>
              </button>
              <ul className="dropdown-menu">
                {store.cart.map((item, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex justify-content-between m-2">
                        <p style={{ "margin": "0px" }}>Name: <strong>{item.name}</strong>
                          <br />
                          Price: <strong>{item.price}</strong></p>
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={() => actions.deleteFromCart(item.name)}
                        ></button>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="col-1"></div>
        </nav>
      </div>
    </>
  );
};
