import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import ProductCard from "../component/productCard";

export const Buyer_products = () => {
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
    <div className="container text-center mt-5">
      
      <div className="container text-cemter">
        <div className="row">
          <div className="col">
            <div className="col mt-5">
              <h1>Welcome buyer</h1>
            </div>       
          </div>
          <div className="col">
            <div className="col mt-5">
              <Link to={"/productcreate"} className="btn btn-outline-primary">
                    <span>Create new product</span>
              </Link>      
            </div>       
          </div>
        </div>

      </div>
    

      <div className="row flex-row flex-nowrap " style={{ overflowX: "auto" }}>
        {store.product.map((product) => {
          return (
            <ProductCard
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
  );
};
