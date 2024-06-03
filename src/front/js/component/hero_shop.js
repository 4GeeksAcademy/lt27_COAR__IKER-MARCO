import React, { Component } from "react";
import placeholder from "../../img/placeholder.png";
import { Link } from "react-router-dom";

export const Hero_shop = () => (
    <div className="hero bg-success p-2 text-dark bg-opacity-50">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5">
                    <div className="intro-excerpt">
                        <h1>Shop<span clsas="d-block"><h3>Great deals!</h3></span></h1>
                        <p className="mb-4">
                            Find the best deals on handmade products from local artisans. Support small businesses and get unique products that you won't find anywhere else.
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
