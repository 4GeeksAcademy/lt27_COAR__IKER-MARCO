import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";


export const Signup_b = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [data, setData] = useState({
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


  const saveBuyer = (e) => {
    e.preventDefault();
    actions.postcratfman(data);
    navigate("/login_craftmen");

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
        <h1>Are you a New Buyer? Please sign-up</h1>
      </div>
      <div className="container text-center">
              <div className="row">

                <div className="col">
                  <button
                    onClick={saveBuyer}
                    className="btn btn-outline-success"
                  >
                    Create new Buyer
                  </button>
                </div>

                <div className="col">
                  <Link to={"/"} className="btn btn-outline-primary">
                    <span>Home</span>
                  </Link>
                </div>

                <div className="col">
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


      <div className="text-start mt-5">
        <div className="container">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputAdress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAdress2"
                value={data.address}
                onChange={info}
                name="address"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputFullName" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail"
                value={data.email}
                onChange={info}
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputIsActive1" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputLastname1"
                value={data.last_name}
                onChange={info}
                name="last_name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAdress" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                value={data.name}
                onChange={info}
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAdress" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={data.password}
                onChange={info}
                name="password"
              />
            </div>
                
            <div className="container text-center">
              <div className="row">

                <div className="col">
                  <button
                    onClick={saveBuyer}
                    className="btn btn-outline-success"
                  >
                    Create new buyer
                  </button>
                </div>

                <div className="col">
                  <Link to={"/"} className="btn btn-outline-primary">
                    <span>Home</span>
                  </Link>
                </div>

                <div className="col">
                  <Link
                    to={"/login_buyer"}
                    className="btn btn-outline-success"
                    onClick={() => actions.loadSomeData()}
                  >
                    <span>back</span>
                  </Link>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
