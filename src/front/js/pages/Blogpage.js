import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Blog } from "../component/blog.js";



import { Hero_blog } from "../component/hero_blog.js";

export const Blogpage = () => {
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
      <Hero_blog />
      <div className="container">
        <br />
        <Blog />
        <br />
        <Blog />
        <br />
        <Blog />

      </div>
    </>
  );
};
