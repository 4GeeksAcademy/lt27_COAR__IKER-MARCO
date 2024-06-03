import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import ProductCard_Buyer from "../component/productCard_Buyer";

export const Buyer_products = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()
  function handlelogout_b() {
    actions.logout_b();
    navigate("/");
  }
  

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
          <div className="col">
              {store.authorize_b}
              {store.authorize_b == true ? (
                <>
                  <button
                    onClick={() => handlelogout_b()}
                    className="btn btn-outline-secondary"
                  >
                    Logout Buyer
                  </button>
                  <div className="btn-group dropstart">
                    <button
                      type="button"
                      className="btn btn-outline-secondary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Favorites{" "}
                      <span className="badge text-bg-secondary">
                        {store.productsLiked.length}
                      </span>
                    </button>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#"></a>
                      </li>
                      {store.productsLiked.length === 0 ? (
                      <li>
                          <p>Empty</p>
                      </li>
                      ) : (
                        store.productsLiked.map((elemento, index) => (
                          <li key={index}>
                            <a className="dropdown-item" href="#">
                              <div className="d-flex justify-content-between m-2">
                                <p>{elemento}</p>
                                <i
                                  onClick={() => actions.deleteFavorite(elemento)}
                                  className="bi bi-trash3-fill"
                                ></i>
                              </div>
                            </a>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                </>
              ) : null}
              <button onClick={()=> navigate("/my-orders")} className="btn btn-outline-secondary">
            Orders
          </button>

          </div>              

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
