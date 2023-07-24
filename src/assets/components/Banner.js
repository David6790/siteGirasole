import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="parralax banner">
      <div className="title">
        <h1>Il Girasole Strasbourg</h1>
        <Button buttonText={"Réserver votre table"} />
      </div>
    </div>
  );
};

export default Banner;
