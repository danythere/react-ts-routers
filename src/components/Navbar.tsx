import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper cyan lighten-3 px1">
      <a href="/" className="brand-logo">
        React+TS
      </a>
      <ul id="nav-mobile" className="right ">
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
