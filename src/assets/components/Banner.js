import React from "react";
import Button from "./Button";

const Banner = (ref) => {
  return (
    <div className="parralax banner">
      <div className="title">
        <h1>Il Girasole</h1>
        <h2>La Trattoria revisitée</h2>
        <Button buttonText={"Réserver votre table"} />
      </div>
    </div>
  );
};

export default Banner;
