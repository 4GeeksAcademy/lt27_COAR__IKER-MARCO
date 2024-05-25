import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import ProductCard_Buyer from "../component/productCard_Buyer";

export const Allproducts = () => {
  const { store, actions } = useContext(Context);
  

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
          <h1>All products</h1>
          <br />
          <h2>Order by : </h2>
            <select
                className="form-select"
                aria-label="Default select example"
                name="category"
                onChange={info}>
                <option value="1">Category</option>
                <option value="2">Price</option>
                <option value="3">Stock</option>
                <option value="4">Craftmen</option>
            </select>         

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
