import React from "react";

const Section = ({ title, text, imgLink, alt }) => {
  return (
    <div className="section">
      <div className="textSection">
        <div className="textContent">
          <h3> {title} </h3>
          <p>{text}</p>
        </div>
      </div>
      <div className="imgSection">
        <img src={imgLink} alt={alt} />
      </div>
    </div>
  );
};

export default Section;
