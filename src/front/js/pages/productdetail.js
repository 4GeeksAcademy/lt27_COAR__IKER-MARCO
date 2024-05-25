import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const Productdetail = (props) => {
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

  const handleSelected = () => {
    actions.selectproduct(currentProduct);
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
          </div>

          <button
            type="button"
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop2"
            onClick={() => handleSelected(props.id)}
          >
            Editar
          </button>

          <div
            className="modal fade"
            id="staticBackdrop2"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel2"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel2">
                    Are you sure do you want to edit this product?
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      actions.puteditproduct();
                    }}
                  >
                    Yes, edit it
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link to={"/"} className="btn btn-outline-primary">
            <span>Home</span>
          </Link>
          <Link
            to={"/product"}
            className="btn btn-outline-success"
            onClick={() => actions.loadSomeData()}
          >
            <span>Regresar</span>
          </Link>

          <form>
            <div className="mb-3">
              <label forhtml="exampleInputcategory1" className="form-label">
                category
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputcategory1"
                onChange={info}
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputcategory_id1" className="form-label">
               category_id
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputcategory_id1"
                onChange={info}
                name="category_id"
              />
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
              <label forhtml="exampleInputId1" className="form-label">
                ID
              </label>
              <input
                type="id"
                className="form-control"
                id="exampleInputId1"
                placeholder={store.productselected.id}
                onChange={info}
                name="id"
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

          <button
            type="button"
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop2"
            onClick={() => handleSelected(props.id)}
          >
            Editar
          </button>

          <div
            className="modal fade"
            id="staticBackdrop2"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel2"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel2">
                    Are you sure do you want to edit this product?
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      actions.puteditproduct();
                    }}
                  >
                    Yes, edit it
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link to={"/"} className="btn btn-outline-primary">
            <span>Home</span>
          </Link>
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
  );
};

Productdetail.propTypes = {
  match: PropTypes.object,
};
