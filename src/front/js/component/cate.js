import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Cate = () => {

    return (
        <div class="row align-items-md-stretch">
        
        <div class="col-md-6">
          <div class="h-100 p-5 bg-body-tertiary ">
            <h2>Wood</h2>
            <p>
              Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.
            </p>
            <button class="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-body-tertiary ">
            <h2>Natural Fibers</h2>
            <p>
              Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.
            </p>
            <button class="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-body-tertiary ">
            <h2>Ceramics</h2>
            <p>
              Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.

            </p>
            <button class="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-body-tertiary ">
            <h2>Rock</h2>
            <p>
              Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.

            </p>
            <button class="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>

      </div>
    );
};