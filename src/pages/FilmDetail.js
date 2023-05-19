import { React, useEffect } from "react";
import FilmInfo from "../components/filmdetail/FilmInfo";
import AppHeader from "../components/home/AppHeader";
import { Footer } from "antd/es/layout/layout";

const FilmDetail = () => {
  return (
    <>
      <AppHeader />
      <FilmInfo />
      <Footer style={{ backgroundColor: "rgba(0,0,0,0.7)" }} />
    </>
  );
};

export default FilmDetail;
