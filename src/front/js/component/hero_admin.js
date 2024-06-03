import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Hero_admin = () => {
    const { store, actions } = useContext(Context);
    const Navigate = useNavigate()

    function handlelogout_a() {
        actions.logout_a();
        Navigate("/");
    }
    return (
        <div className="hero bg-success p-2 text-dark bg-opacity-50">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>Hello bos<span clsas="d-block"></span></h1>
                            <p className="mb-4">
                                From here you can manage your products, orders, and customers. You can also view reports and change your account settings. If you have any questions or need help, please contact us.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                    </div>
                    <div className="col-lg-12">
                        <div className="col">
                            {store.authorize_a}
                            {store.authorize_a == true ? (

                                <div className="col">
                                    <ul className="nav nav-underline">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#"><div className="col">
                                                <button
                                                    onClick={() => handlelogout_a()}
                                                    className="btn btn-accent bsb-btn-2xl"
                                                >
                                                    <i className="bi bi-arrow-bar-left"></i>
                                                    Logout
                                                </button>
                                            </div></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"> <div className="col">
                                                <Link to="/admin">
                                                    <button className="btn btn-accent bsb-btn-2xl">Admin</button>
                                                </Link>
                                            </div></a>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"> <div className="col">
                                                <Link to="/category">
                                                    <button className="btn btn-accent bsb-btn-2xl">
                                                        Category
                                                    </button>
                                                </Link>
                                            </div></a>
                                        </li>
                                       
                                        <li className="nav-item">
                                            <a className="nav-link" aria-disabled="true"><div className="col">
                                                <Link to="/craftmen">
                                                    <button className="btn btn-accent bsb-btn-2xl">
                                                        Craftmen
                                                    </button>
                                                </Link>
                                            </div></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-disabled="true">
                                                <div className="col">
                                                    <Link to="/buyer">
                                                        <button className="btn btn-accent bsb-btn-2xl">
                                                            Buyers
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
