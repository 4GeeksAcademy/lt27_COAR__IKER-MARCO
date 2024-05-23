import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const Buyer_Productdetail = (props) => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({
    category: "",
    category_id: "",
    description: "",
    id: "",
    image: "",
    name: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    const artesano = actions.getproduct(id);
    setCurrentProduct(store.productselected);
  }, []);

  const handleSelected = (id) => {
    actions.getproduct(id);
  };

  const info = (e) => {
    setCurrentProduct({
      ...currentProduct,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="col-8 m-auto">
        <div>
          <div className="row flex-row">
            <div className="col-5">
              <img src={rigoImage} className="img-thumbnail" alt="..." />
            </div>
            <div className="col-7">
              <h2>Product</h2>
              <h2>{store.productselected.name}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="table-responsive ">
            <table className="table">
              <thead>
                <tr className="text-danger">
                  <th>category</th>
                  <th>category id</th>
                  <th>description</th>
                  <th>id</th>
                  <th>image</th>
                  <th>name</th>
                  <th>price</th>
                  <th>stock</th>
                </tr>
              </thead>
              <tbody className="text-danger">
                <tr>
                  <td>{store.productselected.category}</td>
                  <td>{store.productselected.category_id}</td>
                  <td>{store.productselected.description}</td>
                  <td>{store.productselected.id}</td>
                  <td>{store.productselected.image}</td>
                  <td>{store.productselected.name}</td>
                  <td>{store.productselected.price}</td>
                  <td>{store.productselected.stock}</td>
                </tr>
              </tbody>
            </table>

            <div className="d-flex justify-content-between">
              <Link to={"/buyer_products"} className="btn btn-outline-primary">
                <span>Go Back</span>
              </Link>

              <button
                type="button"
                className="btn btn-outline-warning"
                onClick={() => actions.favoriteLiked(props.name)}
              >
                <i className="bi bi-suit-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Buyer_Productdetail.propTypes = {
  match: PropTypes.object,
};
