import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import MenuSections from "./MenuSections";

const MenuDetails = () => {
  const [menus, setMenus] = useState([]);
  const menuCollectionRef = collection(db, "menu");
  useEffect(() => {
    const antipastiFilter = document.querySelector("#antipasti");
    console.log(antipastiFilter);
    const carpaccioFilter = document.querySelector("#carpaccio");
    const insalateFilter = document.querySelector("#insalate");
    const specialiteFilter = document.querySelector("#specialite");
    const pesceFilter = document.querySelector("#pesce");
    const carneFilter = document.querySelector("#carne");
    const pastaFilter = document.querySelector("#pasta");
    const pizzaFilter = document.querySelector("#pizza");

    const antipastiZone = document.querySelector(".antipasti");
    console.log(antipastiZone);
    const carpaccioZone = document.querySelector(".carpaccio");
    const insalateZone = document.querySelector(".insalate");
    const specialiteZone = document.querySelector(".specialite");
    const pesceZone = document.querySelector(".pesce");
    const carneZone = document.querySelector(".carne");
    const pastaZone = document.querySelector(".pasta");
    const pizzaZone = document.querySelector(".pizza");

    antipastiFilter.addEventListener("click", function () {
      antipastiZone.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    carpaccioFilter.addEventListener("click", function () {
      carpaccioZone.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    insalateFilter.addEventListener("click", function () {
      insalateZone.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    specialiteFilter.addEventListener("click", function () {
      specialiteZone.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    pesceFilter.addEventListener("click", function () {
      pesceZone.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    carneFilter.addEventListener("click", function () {
      carneZone.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    pastaFilter.addEventListener("click", function () {
      pastaZone.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    pizzaFilter.addEventListener("click", function () {
      pizzaZone.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, []);

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
      <div className="filterWrapper">
        <div className="menuTitle">
          <h1>La Carte</h1>
        </div>
        <div className="filterContainer">
          <button id="antipasti">Antipasti</button>
          <button id="carpaccio">Carpaccio</button>
          <button id="insalate">Insalate</button>
          <button id="specialite">Specialité</button>
          <button id="pesce">Pesce</button>
          <button id="carne">Carne</button>
          <button id="pasta">Pasta</button>
          <button id="pizza">Pizza</button>
        </div>
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
