import React, { Component } from "react";
import placeholder from "../../img/placeholder.png";
import { Link } from "react-router-dom";

export const Hero_services = () => (
    <div className="hero bg-success p-2 text-dark bg-opacity-50">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5">
                    <div className="intro-excerpt">
                        <h1>Services<span clsas="d-block"><h3>
                            Hey! We're here to help.
                        </h3>
                        </span></h1>
                        <p className="mb-4">
                            Our services are designed to help artisans and customers connect and do business. We provide a platform for artisans to create profiles, upload products, manage inventories, and make sales. Customers can browse, search, and purchase unique and personalized products directly from the creators.
                        </p>
                        <br></br>
                        <div className="col">
                            <Link to="/">
                                <button className="btn btn-accent bsb-btn-2xl">
                                    <i className="bi bi-arrow-bar-left"></i>
                                    Home
                                </button>
                            </Link>
                        </div>
                        <br></br>

                    </div>
                </div>
                <div className="col-lg-7">

                </div>
            </div>
        </div>
    </div>
);
