import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div className="navigation">
        <ul>
          <NavLink to="/">
            <li>accueil</li>
          </NavLink>
          <NavLink to="/menu">
            <li>notre carte</li>
          </NavLink>
          <NavLink to="/reservation">
            <li>réservation</li>
          </NavLink>
          <NavLink to="/contact">
            <li>contactez-nous</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
