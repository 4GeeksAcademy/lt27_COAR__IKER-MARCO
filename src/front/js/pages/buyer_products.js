import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import ProductCard_Buyer from "../component/productCard_Buyer";

export const Buyer_products = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()
  

  const [data, setData] = useState({
    category: "",
    category_id: "",
    description: "",
    id: "",
    image: "",
    name: "",
    price: "",
    stock: "",
  });

  const info = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-6 col-md-2">
          <h1>Welcome buyer</h1>
          <br />
          <button className="btn btn-outline-secondary">
            Edit profile
          </button>
          <br />
          <button onClick={()=> navigate("/my-orders")} className="btn btn-outline-secondary">
            Orders
          </button>
          <br />
          <button className="btn btn-outline-secondary">
            Favorites
          </button>
          <br />
          



        </div>
        <div className="row mb-3 text-center col-md-10">
          {store.product.map((product) => {
            return (
              <ProductCard_Buyer
                key={product.id}
                name={product.name}
                category={product.category}
                stock={product.stock}
                price={product.price}
                {...product}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
