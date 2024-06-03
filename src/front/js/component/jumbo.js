import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Jumbo = () => {

  return (
    // <div className="p-5 mb-4 bg-body-tertiary rounded-3">
    //   <div className="container-fluid py-5">

    //     <h1 className="display-5 fw-bold">Co-Ar</h1>
    //     <p className="col-md-8 fs-4">
    //       Welcome to Co-Ar, the place where you can find the best products
    //       made by the best craftmen.
    //     </p>
    //     <Link to="/login">
    //       <button type="button" className="btn btn-primary btn-lg">
    //         Login
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    <div id="carouselExampleCaptions" className="carousel slide">
      
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://picsum.photos/seed/picsum/500/200" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h1> Welcome to Co-Ar</h1>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

      </div>

    </div>



  );
};