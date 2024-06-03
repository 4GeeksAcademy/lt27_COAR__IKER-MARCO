import React, { Component } from "react";
import placeholder from "../../img/placeholder.png";
import { Link } from "react-router-dom";

export const Hero_about = () => (
    <div className="hero bg-success p-2 text-dark bg-opacity-50">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5">
                    <div className="intro-excerpt">
                        <h1>About<span clsas="d-block"><h3>Hi there!</h3></span></h1>
                        <p className="mb-4">
                            COAR is a platform designed to connect artisans with customers interested in handmade and artisanal products. The platform will allow artisans to create profiles, upload their products, manage inventories, and make sales, while customers will be able to browse, search, and purchase unique and personalized products directly from the creators.
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
