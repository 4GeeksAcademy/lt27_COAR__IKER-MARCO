import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const Craftmendetail = (props) => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  const [currentCraftman, setCurrentCraftman] = useState({
    address: "",
    city: "",
    email: "",
    id: "",
    is_active: true,
    last_name: "",
    name: "",
    password: "",
    phone: "",
    state: "",
    zip_code: "",
  });

  useEffect(() => {
    const artesano = actions.getcraftman(id);
    setCurrentCraftman(store.craftmenselected);
  }, []);

  const handleSelected = () => {
    actions.selectcraftmen(currentCraftman);
  };

  const info = (e) => {
    setCurrentCraftman({
      ...currentCraftman,
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
              <h2>{store.craftmenselected.name}</h2>
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
                  <th>address</th>
                  <th>city</th>
                  <th>email</th>
                  <th>id</th>
                  <th>is_active</th>
                  <th>last_name</th>
                  <th>name</th>
                  <th>phone</th>
                  <th>state</th>
                  <th>zip_code</th>
                </tr>
              </thead>
              <tbody className="text-danger">
                <tr>
                  <td>{store.craftmenselected.address}</td>
                  <td>{store.craftmenselected.city}</td>
                  <td>{store.craftmenselected.email}</td>
                  <td>{store.craftmenselected.id}</td>
                  <td>{store.craftmenselected.is_active}</td>
                  <td>{store.craftmenselected.boolean}</td>
                  <td>{store.craftmenselected.last_name}</td>
                  <td>{store.craftmenselected.name}</td>
                  <td>{store.craftmenselected.phone}</td>
                  <td>{store.craftmenselected.state}</td>
                  <td>{store.craftmenselected.zip_code}</td>
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
                    Are you sure do you want to edit this contact?
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
                      actions.putedit();
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
            to={"/craftmen"}
            className="btn btn-outline-success"
            onClick={() => actions.loadSomeData()}
          >
            <span>Regresar</span>
          </Link>



          <form>
            <div className="mb-3">
              <label forhtml="exampleInputAddress1" className="form-label">
                address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAddress1"
                onChange={info}
                name="address"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputCity1" className="form-label">
                city
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputCity1"
                onChange={info}
                name="city"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputEmail1" className="form-label">
                email
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                onChange={info}
                name="email"
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
                placeholder={store.craftmenselected.id}
                onChange={info}
                name="id"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputIsActive1" className="form-label">
                is_active
              </label>
              <input
                type="boolean"
                className="form-control"
                id="exampleInputIsActive1"
                placeholder="true"
                onChange={info}
                name="is_active"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputIsLastname1" className="form-label">
                last_name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputLastname1"
                onChange={info}
                name="last_name"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputIsName1" className="form-label">
                name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                onChange={info}
                name="name"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputPassword" className="form-label">
                password
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword"
                onChange={info}
                name="password"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputPhone1" className="form-label">
                phone
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPhone1"
                onChange={info}
                name="phone"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputState1" className="form-label">
                state
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputState1"
                onChange={info}
                name="state"
              />
            </div>

            <div className="mb-3">
              <label forhtml="exampleInputZip_code1" className="form-label">
                zip_code
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputZip_code1"
                onChange={info}
                name="zip_code"
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
                    Are you sure do you want to edit this contact?
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
                      actions.putedit();
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
            to={"/craftmen"}
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

Craftmendetail.propTypes = {
  match: PropTypes.object,
};
