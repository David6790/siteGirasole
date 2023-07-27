import React from "react";

const Button = ({ buttonText, btnClass }) => {
  return <button className={btnClass}>{buttonText}</button>;
};

export default Button;
