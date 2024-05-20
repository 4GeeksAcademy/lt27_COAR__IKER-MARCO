import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="row container text-center">
          <div className="col">
            <Link to="/craftmen">
              <button className="btn btn-outline-secondary">Craftmen</button>
            </Link>
          </div>
          <div className="col">
            <Link to="/category">
              <button className="btn btn-outline-secondary">Category</button>
            </Link>
          </div>
          <div className="col">
            <Link to="/admin">
              <button className="btn btn-outline-secondary">Admin</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
