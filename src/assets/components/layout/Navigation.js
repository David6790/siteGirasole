import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "navActive" : "")}>
          <li>accueil</li>
        </NavLink>
        <NavLink
          to="/menu"
          className={(nav) => (nav.isActive ? "navActive" : "")}
        >
          <li>notre carte</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
