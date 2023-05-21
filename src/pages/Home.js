import { React, useEffect } from "react";
import Banner from "../components/home/Banner";
import FilmTab from "../components/home/FilmTab";
import News from "../components/home/News";
import { Footer, Header } from "antd/es/layout/layout";
import { Affix } from "antd";
import AppHeader from "../components/home/AppHeader";

import "../App.css";


const Home = () => {
  return (
    <>
      {/* <AppHeader /> */}
      <Banner  />
      
      <FilmTab />
      <News />
      {/* <Footer style={{ backgroundColor: "rgba(0,0,0,0.7)" }} /> */}
    </>
  );
};

export default Home;
