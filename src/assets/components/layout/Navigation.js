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
        <NavLink
          to="/reservation"
          className={(nav) => (nav.isActive ? "navActive" : "")}
        >
          <li>réservation</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "navActive" : "")}
        >
          <li>contactez-nous</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
