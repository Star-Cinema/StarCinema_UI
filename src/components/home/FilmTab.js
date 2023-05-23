import { Tabs } from "antd";
import { useState, useEffect } from "react";
import FilmList from "./FilmList";

const FilmTab = () => {
  const [isNowFilm, setIsNowFilm] = useState(true);

  const onChange = (key) => {
    setIsNowFilm(!isNowFilm);
  };

  const items = [
    {
      key: "1",
      label: `NOW SHOWING`,
      children: (
        <>
          <FilmList isNowFilm={isNowFilm} />{" "}
        </>
      ),
    },
    {
      key: "2",
      label: `UPCOMING`,
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
