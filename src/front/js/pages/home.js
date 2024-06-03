import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import ProductCard_Buyer from "../component/productCard_Buyer";
import { Carousel } from "../component/carousel.js";
import { Jumbo } from "../component/jumbo.js";
import { Cate } from "../component/cate.js";
import { Blog } from "../component/blog.js";
import { Testimonial } from "../component/testimonial.js";
import { Hero } from "../component/hero.js";

export const Home = () => {
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
    <>
      <Hero />
      <div className="container fluid">
        <div className="row text-center">
          <h2>Featured Categories</h2>
          <Cate />

          <h2>Popular products</h2>
          <div className="row flex-row flex-nowrap " style={{ overflowX: "auto" }}>
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

          <h2>Best Sellers</h2>
          <div className="row flex-row flex-nowrap " style={{ overflowX: "auto" }}>
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

          {/* <!-- Start Testimonial Section --> */}
          <br />
          <Testimonial />

          {/* <!-- Start Blog Section --> */}
          <br />
          <div className="row mb-5">
            <div className="col-md-6 text-start">
              <h2 className="section-title">Recent Blog</h2>
            </div>
            <div className="col-md-6 text-md-end">
              <Link to="/blogpage">
                <a className="more">View All Posts</a>
              </Link>
            </div>
          </div>
          <Blog />

        </div>
      </div>
    </>
  );
};
