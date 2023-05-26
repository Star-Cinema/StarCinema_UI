import { React } from "react";
import Banner from "../components/home/Banner";
import "../App.css";
import Main from "../components/home/Main";
import Header from "../components/home/Header";
import AppFooter from "../components/home/AppFooter";

// VYVNK1 COMPONENT HOME
const Home = () => {
  return (
    <>
    <Header></Header>
      <Banner />
      <Main />
      <AppFooter></AppFooter>
    </>
  );
};

export default Home;
