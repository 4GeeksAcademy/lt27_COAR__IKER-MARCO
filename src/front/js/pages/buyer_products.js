import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import ProductCard_Buyer from "../component/productCard_Buyer";
import { Hero_buyer } from "../component/hero_buyer.js";

export const Buyer_products = () => {
  const { store, actions } = useContext(Context);
  const [sortType, setSortType] = useState('');
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    if (store.products) {
      sortProducts(sortType);
    }
  }, [store.products, sortType]);

  const sortProducts = (type) => {
    let sorted = [...store.products];
    if (type === 'price') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    // Agrega más condiciones si tienes otros tipos de ordenamiento
    setSortedProducts(sorted);
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

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
    <>
      <Hero_buyer />
      <div className="container fluid">
        <div className="row text-center">
          <div className="container mt-5">
            <div className="row">
              <div className="card col-6 col-md-2">
                <div className="col">
                  <select onChange={handleSortChange} value={sortType}>
                    <option value="">Order by</option>
                    <option value="category">Category</option>
                    <option value="price_asc">Price (less to more)</option>
                    <option value="price_desc">Price (more to less)</option>
                    <option value="alphabetical">Alfabethic</option>
                  </select>
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
        </div>
      </div>

    </>
  );
};
