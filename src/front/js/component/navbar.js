import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="row container text-center">
          <div className="col">
            <Link to="/">
              <span className="navbar-brand mb-0 h1">React Boilerplate</span>
            </Link>
          </div>
          <div className="col">
            <Link to="/demo">
              <button className="btn btn-primary">
                Check the Context in action
              </button>
            </Link>
          </div>
          <div className="col">
            <Link to="/craftmen">
              <button className="btn btn-outline-secondary">Craftmen</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
