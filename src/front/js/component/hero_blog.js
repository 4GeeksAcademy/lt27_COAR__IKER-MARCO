import React, { Component } from "react";
import placeholder from "../../img/placeholder.png";
import { Link } from "react-router-dom";

export const Hero_blog = () => (
    <div className="hero bg-success p-2 text-dark bg-opacity-50">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5">
                    <div className="intro-excerpt">
                        <h1>Blog<span clsas="d-block"><h3> wow </h3></span></h1>
                        <p className="mb-4">
                            In our blog you will find articles about the artisans, their products, their stories, and their lives. We will also share tips and tricks for artisans to improve their craft and grow their business. Stay tuned for more!
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
