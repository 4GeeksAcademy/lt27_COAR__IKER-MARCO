import React, { useState, useContext, act } from "react";
import { Context } from "../store/appContext";

export const Forma = () => {
    const [email_b, setEmail_b] = useState("");
    const [password_b, setPassword_b] = useState("");
    const { store, actions } = useContext(Context);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("send data");
      console.log(email_b, password_b);
      actions.login_b(email_b, password_b);
    };
  
    return (
      <div>
        <form className="w-50 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              value={email_b}
              type="email_a"
              className="form-control"
              id="email_a"
              onChange={(e) => setEmail_b(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={password_b}
              type="password_a"
              className="form-control"
              id="password_a"
              onChange={(e) => setPassword_b(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  };