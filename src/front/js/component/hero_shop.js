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
                        <div className="row">
                            <div className="col text-end">
                                <Link to="/">
                                    <button className="btn btn-outline-light">Home</button>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/about">
                                    <button className="btn btn-outline-light">About</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-7">

                </div>
            </div>
        </div>
    </div>
);
