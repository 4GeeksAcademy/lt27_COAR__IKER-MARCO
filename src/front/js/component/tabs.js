import React from "react";
import { Link } from "react-router-dom";

export const Tabs = () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="pages/single2">
          Single2
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Single3
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Single4
        </a>
      </li>
    </ul>
  );
};

