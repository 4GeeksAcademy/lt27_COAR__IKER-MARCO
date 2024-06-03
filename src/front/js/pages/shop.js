import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import ProductCard_Buyer from "../component/productCard_Buyer";
import { Hero_shop } from "../component/hero_shop.js";

export const Shop = () => {
  const { store, actions } = useContext(Context);
  const [sortType, setSortType] = useState('');

  const sortProducts = (type) => {
    console.log(`Ordenando productos por ${type}`);
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    sortProducts(e.target.value);
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
      <Hero_shop />
      <div className="container fluid">
        <div className="row text-center">
          <div className="container mt-5">
            <div className="row">
              <div className="card col-6 col-md-2">
                <div className="col">
                  <select onChange={handleSortChange} value={sortType}>
                    <option value="">Ordenar por</option>
                    <option value="category">Categoría</option>
                    <option value="price_asc">Precio (menor a mayor)</option>
                    <option value="price_desc">Precio (mayor a menor)</option>
                    <option value="alphabetical">Orden alfabético</option>
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
