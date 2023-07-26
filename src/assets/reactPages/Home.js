import React from "react";

import Header from "../components/layout/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Banner2 from "../components/Banner2";
import Reservations from "./Reservations";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <About />
      <Banner2 />
      <Reservations />
      <Banner />
    </div>
  );
};

export default Home;
