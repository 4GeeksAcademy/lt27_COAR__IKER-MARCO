import React, { useState, useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const ProductCard_Buyer = (props) => {
  const { store, actions } = useContext(Context);
  const Navigate = useNavigate()



  const handleAdd =()=>{
    const product = {
      id : props.id,
      name: props.name,
      price:props.price,
      category:props.category
    }
    console.log(product)
    if(store.authorize_b == true){
      actions.addToCart(product)
    }else{
      Navigate("/login_buyer")
    }      
  }
  

  const handleSelected = (id) => {
    actions.getproduct(id);
  };

  console.log(store.cart)

  return (
    <div className="card mx-3 m-3" style={{ width: "14rem" }}>
      <h3 className="card-title">
          <strong> {props.name}</strong>
        </h3>
      <img src={rigoImage} className="card-img-top" alt="..." />
      <div className="card-body m-2 ">
        
        <h5 className="card-title">
          <strong> {props.name}</strong>
        </h5>
        <p className="card-text">Price: ${props.price}</p>
        <p className="card-text">In stock: {props.stock} units </p>


        <div className="d-flex justify-content-between">
          <Link
            to={"/buyer_productdetail/" + props.id}
            className="btn btn-outline-success"
          >
            <span>Details</span>
          </Link>

          <button className="btn btn-outline-success mx-2"
           onClick={handleAdd}
          >
              <i className="fa-solid fa-cart-shopping"></i>
          </button>

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
