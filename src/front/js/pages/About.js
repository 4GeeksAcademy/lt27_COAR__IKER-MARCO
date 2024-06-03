import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import ProductCard_Buyer from "../component/productCard_Buyer";
import { Carousel } from "../component/carousel.js";
import { Jumbo } from "../component/jumbo.js";
import { Cate } from "../component/cate.js";
import { Blog } from "../component/blog.js";
import { Hero_about } from "../component/hero_about.js";

import about2 from "../../img/about/about-img-2.webp";
import team1 from "../../img/team/team-img-1.jpg";
import team2 from "../../img/team/team-img-2.jpg";
import team3 from "../../img/team/team-img-3.jpg";
import team4 from "../../img/team/team-img-4.jpg";
import team5 from "../../img/team/team-img-5.jpg";
import team6 from "../../img/team/team-img-6.jpg";


export const About = () => {

  return (
    <div>
      <Hero_about />
      <div className="container fluid">
        <div className="row text-center">


          {/* <!-- About 7 - Bootstrap Brain Component --> */}
          <section className="pb-3 pb-md-5 pb-xl-8">
            <br></br>
            <div className="container">
              <div className="row gy-4 gy-lg-0 align-items-lg-center">
                <div className="col-12 col-lg-6">
                  <img className="img-fluid rounded border border-dark" loading="lazy" src={about2} alt="About Us" />
                </div>
                <div className="col-12 col-lg-6 col-xxl-6">
                  <div className="row justify-content-lg-end">
                    <div className="col-12 col-lg-11">
                      <div className="about-wrapper">
                        <p className="lead mb-4 mb-md-5">As a socially responsible entity, we are deeply committed to positively impacting the communities we serve and the world at large. Through various initiatives and partnerships, we actively contribute to environmental sustainability, social welfare, and educational advancement.</p>
                        <div className="row gy-4 mb-4 mb-md-5">
                          <div className="col-12 col-md-6">
                            <div className="card border border-dark">
                              <div className="card-body p-4">
                                <h3 className="display-5 fw-bold text-primary text-center mb-2">370+</h3>
                                <p className="fw-bold text-center m-0">Qualified Experts</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="card border border-dark">
                              <div className="card-body p-4">
                                <h3 className="display-5 fw-bold text-primary text-center mb-2">18k+</h3>
                                <p className="fw-bold text-center m-0">Satisfied Clients</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a href="#!" className="btn btn-accent bsb-btn-2xl">
                          Explore
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Team 3 - Bootstrap Brain Component --> */}
          <section className="py-3 py-md-5 py-xl-8 bg-white">
            {/* Your code here */}
          </section>

          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 className="mb-4 display-5 text-center">Our Team</h2>
                <p className="text-secondary mb-5 text-center lead fs-4">Our team embodies our business's core values and vision, bringing together diverse talents and expertise to provide unparalleled support to our clients.</p>
                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
              </div>
            </div>

            <div className="container">
              <div className="row gy-4 gy-lg-0">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card border border-dark">
                    <img className="card-img-top" src={team1} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">John Doe</h5>
                      <p className="card-text">CEO</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card border border-dark">
                    <img className="card-img-top" src={team2} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Jane Doe</h5>
                      <p className="card-text">COO</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card border border-dark">
                    <img className="card-img-top" src={team3} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">John Smith</h5>
                      <p className="card-text">CTO</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card border border-dark">
                    <img className="card-img-top" src={team4} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Jane Smith</h5>
                      <p className="card-text">CFO</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card border border-dark">
                    <img className="card-img-top" src={team5} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">John Doe</h5>
                      <p className="card-text">CEO</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card border border-dark">
                    <img className="card-img-top" src={team6} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Jane Doe</h5>
                      <p className="card-text">COO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br></br>


          </div>
        </div>
      </div>
    </div>
  );
};
