import React, { useEffect } from "react";

import Header from "../components/layout/Header";
import Banner from "../components/Banner";
import Section from "../components/Section";
import Banner2 from "../components/Banner2";
import Reservations from "./Reservation";
import Banner3 from "../components/layout/Banner3";
import Footer from "../components/layout/Footer";

const Home = () => {
  useEffect(() => {
    const reservation = document.querySelector(".reservation");
    const button = document.querySelector(".btnResa");
    button.addEventListener("click", function () {
      reservation.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Banner title={"Il Girasole"} secondTitle={"La Trattoria revisitée"} />
      <Section
        title={"Notre Menu de la semaine"}
        text={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque fugit, suscipit sunt aperiam fuga possimus modi, incidunt excepturi molestiae provident illo sed inventore quis labore ex? Ab voluptates minus perferendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum, architecto excepturi voluptatum, perferendis cupiditate sequi nesciunt delectus deserunt, error dolore. Nobis odio architecto ratione voluptatem laudantium iure, reprehenderit autem?"
        }
        imgLink={"https://i.ibb.co/w6w48X7/menu.png"}
        alt={"menu de la semaine"}
      />
      <Banner2 />
      <Reservations />
      <Banner3 />
      <Footer />
    </div>
  );
};

export default Home;
