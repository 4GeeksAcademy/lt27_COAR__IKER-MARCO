import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import wood from "../../img/wood.jpg";
import ceramic from "../../img/ceramic.jpg";
import rock from "../../img/rock.jpg";
import natural from "../../img/naturalfibers.jpg";

export const Cate = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">

        <div className="col-md-6 col-sm-12">
          <div className="h-100 p-5 bg-body-tertiary text-center">
            <a href="#" className="post-thumbnail">
              <img src={wood} alt="Image" className="img-fluid" />
            </a>
            <h2>Wood</h2>
            <p>
              Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.
            </p>
            <button className="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="h-100 p-5 bg-body-tertiary text-center">
            <a href="#" className="post-thumbnail">
              <img src={natural} alt="Image" className="img-fluid" />
            </a>
            <h2>Natural Fibers</h2>
            <p>
              Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.
            </p>
            <button className="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="h-100 p-5 bg-body-tertiary text-center">
            <a href="#" className="post-thumbnail">
              <img src={ceramic} alt="Image" className="img-fluid" />
            </a>
            <h2>Ceramics</h2>
            <p>
              Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.
            </p>
            <button className="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="h-100 p-5 bg-body-tertiary text-center">
            <a href="#" className="post-thumbnail">
              <img src={rock} alt="Image" className="img-fluid" />
            </a>
            <h2>Rock</h2>
            <p>
              Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.
            </p>
            <button className="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>

      </div>
    </div>
  );
};