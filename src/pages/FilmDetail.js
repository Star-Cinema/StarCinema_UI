import { React, useEffect } from "react";
import FilmInfo from "../components/filmdetail/FilmInfo";
import Header from "../components/home/Header";
import AppFooter from "../components/home/AppFooter";
// VYVNK1 COMPONENT FILMDETAIL
const FilmDetail = () => {
  return (
    <>  
    <Header></Header>
      <FilmInfo />
     <AppFooter></AppFooter>
    </>
  );
};

export default FilmDetail;
