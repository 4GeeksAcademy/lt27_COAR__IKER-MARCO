import React, { useState, useContext, act } from "react";
import { Context } from "../store/appContext";

export const Forma = () => {
    const [email_a, setEmail_a] = useState("");
    const [password_a, setPassword_a] = useState("");
    const { store, actions } = useContext(Context);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("send data");
      console.log(email_a, password_a);
      actions.login_a(email_a, password_a);
    };
  
    return (
      <div>
        <form className="w-50 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              value={email_a}
              type="email_a"
              className="form-control"
              id="email_a"
              onChange={(e) => setEmail_a(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={password_a}
              type="password_a"
              className="form-control"
              id="password_a"
              onChange={(e) => setPassword_a(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  };