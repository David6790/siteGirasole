import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import MenuSections from "./MenuSections";

const MenuDetails = () => {
  const [menus, setMenus] = useState([]);
  const menuCollectionRef = collection(db, "menu");

  useEffect(() => {
    const getMenu = async () => {
      const data = await getDocs(menuCollectionRef);
      setMenus(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMenu();
    // eslint-disable-next-line
  }, []);

  return menus ? (
    <div className="menuDetailWrapper">
      <div className="menuTitle">
        <h1>La Carte</h1>
      </div>
      <div className="filterContainer"></div>
      <div className="menuContainer">
        <div className="menuSection">
          <MenuSections menus={menus} category={"antipasti"} />
          <MenuSections menus={menus} category={"carpaccio"} />
          <MenuSections menus={menus} category={"insalate"} />
          <MenuSections menus={menus} category={"specialite"} />
          <MenuSections menus={menus} category={"pesce"} />
          <MenuSections menus={menus} category={"carne"} />
          <MenuSections menus={menus} category={"pasta"} />
          <MenuSections menus={menus} category={"pizza"} />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default MenuDetails;
