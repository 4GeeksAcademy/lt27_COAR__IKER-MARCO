import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import CraftmenCard from "../component/craftmenCard";

export const Craftmen = () => {
  const { store, actions } = useContext(Context);

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

  const saveCraftmen = (e) => {
    e.preventDefault();
    actions.postContact(data);
  };

  const info = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container text-center mt-5">
      <div className="text-center mt-5">
        <h1>Craftmen available</h1>
      </div>

      <div className="row flex-row flex-nowrap " style={{ overflowX: "auto" }}>
        {store.craftmen.map((craftmen) => {
          return (
            <CraftmenCard
              key={craftmen.id}
              name={craftmen.name}
              last_name={craftmen.last_name}
              email={craftmen.email}
              phone={craftmen.phone}
              {...craftmen}
            />
          );
        })}
      </div>

      <div className="text-center mt-5">
        <h1>Create</h1>
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
              <label htmlFor="exampleInputAgendaName" className="form-label">
                city
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputCity2"
                value={data.city}
                onChange={info}
                name="city"
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
            <div className="mb-3">
              <label htmlFor="exampleInputPhone1" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPhone1"
                value={data.phone}
                onChange={info}
                name="phone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPhone1" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputState1"
                value={data.state}
                onChange={info}
                name="state"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPhone1" className="form-label">
                Zip code
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputzip_code"
                value={data.zip_code}
                onChange={info}
                name="zip_code"
              />
            </div>
            
            
            <div className="container text-center row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div className="col">
              <button onClick={saveCraftmen} className="btn btn-outline-success">
                Create new craftmen
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
