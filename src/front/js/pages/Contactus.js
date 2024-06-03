import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import { Hero_contact } from "../component/hero_contact.js";

export const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, subject, message);
  };

  return (
    <>
      <Hero_contact />
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="container col">
            <div className="container text-center">
                  <form onSubmit={handleSubmit}>
                    <br />
                    <div className="row">
                      <div className="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                      </div>
                      <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col">
                        <input type="text" className="form-control" placeholder="Email" aria-label="First name" />
                      </div>
                    </div>
                    <br />
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                      <label for="floatingTextarea">Comments</label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-outline-secondary">Submit</button>
                  </form>
            </div>     
          </div>
          <div className="col-2"></div>

        </div>  
      </div>
    </>
  );
};