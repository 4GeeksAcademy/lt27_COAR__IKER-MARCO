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

  function handlelogout_c() {
    actions.logout();
    navigate("/");
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-6 col-md-2">
            <h1>Welcome Craftman</h1>
            <div className="col">
              {store.authorize}
              {store.authorize == true ? (
                <>
                  <button
                    onClick={() => handlelogout_c()}
                    className="btn btn-danger"
                  >
                    Logout Craftmen
                  </button>

                  <Link to="/product">
                    <button className="btn btn-outline-secondary">
                      Products
                    </button>
                  </Link>
                </>
              ) : null}
            </div>
            
            <button onClick={()=> navigate("/my-orders")} className="btn btn-outline-secondary">
              Orders
            </button>     

        </div>

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

      </div>
    </div>
  );
};