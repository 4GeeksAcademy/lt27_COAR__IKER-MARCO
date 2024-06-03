import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Productcreate = () => {
  const { store, actions } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const [data, setData] = useState({
    category_id: "",
    description: "",
    image: "",
    name: "",
    price: "",
    stock: "",
    craftman_id: store.currentCraftman
  });

  useEffect(() => {
  },[])

  useEffect(() => {
    actions.categorys();
  }, []);
  
  useEffect(() => {
    setData(prevData => ({
      ...prevData,
      category_id: selectedCategory,
      craftman_id: store.currentCraftman || ""
    }));
  }, [selectedCategory, store.currentCraftman])

  const saveProduct = (e) => {
    e.preventDefault();
    actions.postproduct(data);
    navigate("/product");
  };

  const info = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="text-center mt-5">
        <h1>Create Product</h1>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <button onClick={saveProduct} className="btn btn-outline-success">
              Create new Product
            </button>
          </div>

          <div className="col">
            <Link to={"/"} className="btn btn-outline-primary">
              <span>Home</span>
            </Link>
          </div>

          <div className="col">
            <Link
              to={"/product"}
              className="btn btn-outline-success"
              onClick={() => actions.loadSomeData()}
            >
              <span>Regresar</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-start mt-5">
        <div className="container">
          <form>
            <div className="mb-3">
              <label forhtml="exampleInputcategory1" className="form-label">
                Category
              </label>
              <select
                name="category_id"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
              <option value="">Select a category</option>
                {store.allCategory.map((category, index) => (
                  <option key={index} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputdescription1" className="form-label">
                description
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputdescription1"
                onChange={info}
                name="description"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputIsimage1" className="form-label">
                image
              </label>
              <input
                type="boolean"
                className="form-control"
                id="exampleInputIsimage1"
                onChange={info}
                name="image"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputIname1" className="form-label">
                name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputname1"
                onChange={info}
                name="name"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputprice1" className="form-label">
                price
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputprice1"
                onChange={info}
                name="price"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputstock" className="form-label">
                stock
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputstock"
                onChange={info}
                name="stock"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
