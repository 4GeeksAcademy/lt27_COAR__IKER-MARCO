import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  function handlelogout_c() {
    actions.logout();
    navigate("/");
  }
  function handlelogout_b() {
    actions.logout_b();
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
                  onClick={() => handlelogout_c()}
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
            {store.authorize_b}
            {store.authorize_b == true ? (
              <>
                <button
                  onClick={() => handlelogout_b()}
                  className="btn btn-danger"
                >
                  Logout Buyer
                </button>
                <div className="btn-group dropstart">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Favorites{" "}
                    <span className="badge text-bg-secondary">
                      {store.productsLiked.length}
                    </span>
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#"></a>
                    </li>
                    {store.productsLiked.length === 0 ? (
                      <li>
                        <p>Empty</p>
                      </li>
                    ) : (
                      store.productsLiked.map((elemento, index) => (
                        <li key={index}>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex justify-content-between m-2 ">
                              <p>{elemento}</p>
                              <i
                                onClick={() => actions.deleteFavorite(elemento)}
                                className="bi bi-trash3-fill"
                              ></i>
                            </div>
                          </a>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
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
