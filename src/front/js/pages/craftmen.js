import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Hero_admin } from "../component/hero_admin.js";


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
    <>
      <Hero_admin />
      <div className="container text-center mt-5">

        <div className="container text-cemter">
          <div className="row">
            <div className="col">
              <div className="col mt-5">
                <h1>Craftmen available</h1>
              </div>
            </div>
            <div className="col">
              <div className="col mt-5">
                <Link to={"/craftmencreate"} className="btn btn-outline-primary">
                  <span>Create new craftman</span>
                </Link>
              </div>
            </div>
          </div>

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
      </div>


    </>
  );
};
