import { Tabs } from "antd";
import { useState, useEffect } from "react";
import FilmList from "./FilmList";
import { useLocation } from "react-router-dom";


//VYVNK1 COMPONENT FILMTAB CONTAINS NOWSHOWING / UPCOMING FILM
const FilmTab = () => {
  const location = useLocation();
  console.log(location)
  const [isNowFilm, setIsNowFilm] = useState(true);

  const onChange = (key) => {
    setIsNowFilm(!isNowFilm);
  };

  const items = [
    {
      key: "1",
      label: `PHIM ĐANG CHIẾU`,
      children: (
        <>
          <FilmList isNowFilm={isNowFilm} />{" "}
        </>
      ),
    },
    {
      key: "2",
      label: `PHIM SẮP CHIẾU`,
      children: (
        <>
          <FilmList isNowFilm={isNowFilm} />{" "}
        </>
      ),
    },
  ];
  return (
    <>
      <Tabs
        style={{ margin: "1em" }}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </>
  );
};

export default FilmTab;
