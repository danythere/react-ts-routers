import React from "react";

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper cyan lighten-3 px1">
      <a href="/" className="brand-logo">
        React+TS
      </a>
      <ul id="nav-mobile" className="right ">
        <li>
          <a href="/">Список дел</a>
        </li>
        <li>
          <a href="/">Информация</a>
        </li>
      </ul>
    </div>
  </nav>
);
