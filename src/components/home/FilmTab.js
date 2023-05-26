import { Tabs } from "antd";
import { useState, useEffect } from "react";
import FilmList from "./FilmList";


//VYVNK1 COMPONENT FILMTAB CONTAINS NOWSHOWING / UPCOMING FILM
const FilmTab = () => {
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
