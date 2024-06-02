import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import ProductCard_Buyer from "../component/productCard_Buyer";
import { Carousel } from "../component/carousel.js";
import { Jumbo } from "../component/jumbo.js";
import { Cate } from "../component/cate.js";
import { Blog } from "../component/blog.js";
import { Testimonial } from "../component/testimonial.js";
import { Hero_services } from "../component/hero_services.js";

export const Services = () => {
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
      <Hero_services />
      <div className="container fluid">
        <div className="row text-center">
          <h2>Services</h2>
        </div>
      </div>
    </>
  );
};
