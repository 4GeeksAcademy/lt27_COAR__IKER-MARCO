import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Hero_buyer = () => {
    const { store, actions } = useContext(Context);
    const Navigate = useNavigate()

    function handlelogout_b() {
        actions.logout_b();
        Navigate("/");
    }
    return (
        <div className="hero bg-success p-2 text-dark bg-opacity-50">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>Hello {store.currentBuyerAddress} <span className="d-block"></span></h1>                            <p className="mb-4">
                                From here you can manage your products, orders, and customers. You can also view reports and change your account settings. If you have any questions or need help, please contact us.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                    </div>
                    <div className="col-lg-12">
                        <div className="col">
                            {store.authorize_b}
                            {store.authorize_b == true ? (

                                <div className="col">
                                    <ul className="nav nav-underline">
                                       
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#"><div className="col">
                                                <button
                                                    onClick={() => handlelogout_b()}
                                                    className="btn btn-accent bsb-btn-2xl"
                                                >
                                                    <i className="bi bi-arrow-bar-left"></i>
                                                    Logout
                                                </button>
                                            </div></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"> <div className="col">
                                                <Link to="/buyer_products">
                                                    <button onClick={() => Navigate("/my-orders")} className="btn btn-outline-secondary">
                                                        Buy
                                                    </button>
                                                </Link>
                                            </div></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"> <div className="col">
                                                <div className="btn-group dropstart">
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-secondary dropdown-toggle"
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
                                                                        <div className="d-flex justify-content-between m-2">
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
                                            </div></a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="#"> <div className="col">
                                                <Link to="/my-orders">
                                                    <button onClick={() => Navigate("/my-orders")} className="btn btn-outline-secondary">
                                                        Orders
                                                    </button>
                                                </Link>
                                            </div></a>
                                        </li>


                                    </ul>

                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
