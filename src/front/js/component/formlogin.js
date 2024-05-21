import React, { useState, useContext, act } from "react";
import { Context } from "../store/appContext";

export const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = useContext(Context);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("send data");
      console.log(email, password);
      actions.login(email, password);
    };
  
    return (
      <div>
        <form className="w-50 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              value={email}
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={password}
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  };