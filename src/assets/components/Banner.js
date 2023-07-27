import React from "react";
import Button from "./Button";

const Banner = ({ title, secondTitle }) => {
  return (
    <div className="parralax banner">
      <div className="title">
        <h1>{title}</h1>
        <h2>{secondTitle}</h2>

        <Button buttonText={"Réserver votre table"} btnClass={"btnResa"} />
      </div>
    </div>
  );
};

export default Banner;
