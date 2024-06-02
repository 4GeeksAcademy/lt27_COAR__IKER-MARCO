import React, { Component } from "react";
import placeholder from "../../img/placeholder.png";
import { Link } from "react-router-dom";

export const Hero_contact = () => (
    <div className="hero bg-success p-2 text-dark bg-opacity-50">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5">
                    <div className="intro-excerpt">
                        <h1>Contact us<span clsas="d-block"><h3> we would love to hear from you </h3></span></h1>
                        <p className="mb-4">
                            If you have any questions, comments, or suggestions, please feel free to contact us. We are always looking for ways to improve our platform and make it more useful for artisans and customers. Your feedback is important to us!
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
