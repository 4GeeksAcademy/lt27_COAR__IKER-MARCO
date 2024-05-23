import React, { useState, useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ProductCard_Buyer = (props) => {
  const { store, actions } = useContext(Context);

  const handleSelected = (id) => {
    actions.getproduct(id);
  };

  return (
    <div className="card mx-3" style={{ width: "14rem" }}>
      <img src={rigoImage} className="card-img-top" alt="..." />
      <div className="card-body m-2 ">
        <h5 className="card-title">
          Product de compra
        </h5>
        <h5 className="card-title">
          Nombre:
          <strong> {props.name}</strong>
        </h5>
        <p className="card-text">Price: {props.price}</p>
        <p className="card-text">Category: {props.category}</p>
        <p className="card-text">In stock: {props.stock}</p>


        <div className="d-flex justify-content-between">
          <Link
            to={"/buyer_productdetail/" + props.id}
            className="btn btn-outline-primary"
          >
            <span>Details</span>
          </Link>

          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => actions.favoriteLiked(props.name)}
          >
            <i className="bi bi-suit-heart"></i>
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard_Buyer;
