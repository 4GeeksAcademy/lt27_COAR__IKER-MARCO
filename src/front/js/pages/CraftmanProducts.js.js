import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../component/productCard";

export const CraftmanProducts = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()

  useEffect(() => {
    actions.getCraftmanProducts(); 
  }, []);

  return (
    <div className="container text-center mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="col mt-5">
              <h1>Your Products</h1>
            </div>
          </div>
          <div className="col">
            <div className="col mt-5">
              <Link to={"/productcreate"} className="btn btn-outline-primary">
                <span>Create new product</span>
              </Link>
              <button className="btn btn-outline-primary" onClick={()=> navigate("/pedidos")}>Pedidos</button>
            </div>

          </div>
        </div>
      </div>
      <div className="row flex-row flex-nowrap" style={{ overflowX: "auto" }}>
        {store.products && store.products.length > 0 ? (
          store.products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              stock={product.stock}
              price={product.price}
              {...product}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};