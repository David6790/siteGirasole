import React from "react";

const MenuSections = ({ menus, category }) => {
  return (
    <>
      <h2>{category}</h2>
      <div className="menuSectionContent">
        {menus
          ? menus
              .filter((menu) => menu.category === category)
              .map((menu) => {
                return (
                  <div className="menuElement">
                    <h3>{menu.name}</h3>
                    <p>{menu.description}</p>
                    <span>{menu.price}</span>
                  </div>
                );
              })
          : ""}
      </div>
    </>
  );
};

export default MenuSections;
