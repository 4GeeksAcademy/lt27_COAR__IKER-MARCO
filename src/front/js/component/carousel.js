import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import fondo1 from "../../img/fondo1-01.png";
import rigoImage from "../../img/rigo-baby.jpg";


export const Carousel = () => {

    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={fondo1} className="d-block w-100" alt="..." style={{ width: '1920px', height: '540px' }}/>
                    <div className="carousel-caption d-none d-md-block">
                        <img src={rigoImage} className="circle" alt="..." />
                        <h5>Testimonial 1</h5>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={fondo1} className="d-block w-100" alt="..." style={{ width: '1920px', height: '540px' }}/>
                    <div className="carousel-caption d-none d-md-block">
                        <img src={rigoImage} className="circle" alt="..." />  
                        <h5>Testimonial 2</h5>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                   
                   
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={fondo1} className="d-block w-100" alt="..." style={{ width: '1920px', height: '540px' }}/>
                    <div className="carousel-caption d-none d-md-block">
                        <img src={rigoImage} className="circle" alt="..." />
                        <h5>Testimonial 3</h5>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};