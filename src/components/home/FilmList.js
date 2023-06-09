import { Card, List, Badge, Modal } from "antd";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const { Meta } = Card;


// VYVNK1 COMPONENT TO DISPLAY NOWSHOWING / UPCOMING FILM

const FilmList = ({ isNowFilm }) => {
  // FOR TESTING LAYOUT AND PAGINATION
  //   const poster = Array.from({ length: 100 }).map((_, i) => ({
  //     alt: "movie",
  //     src: "https://cdn.marvel.com/content/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg",
  //     title: "Avenger",
  //     description: "Category",
  //   }));

  const [nowfilmAPI, setNowFilmAPI] = useState([]);
  const data = [];
  const [isBusy, setBusy] = useState(true);

  // VYVNK1 GET API OF NOW SHOWING FILM

  const loadNowFilm = () => {
    setBusy(true);

    async function fetchData() {
      setBusy(true);
      axios
        .get("https://localhost:7113/api/Films/nowShowing")
        .then((response) => {
          setBusy(false);

          setNowFilmAPI(response.data);
        }).catch(function (error) {
          console.log(error);
        });
    }
    fetchData();
  };

  // VYVNK1 GET API OF UPCOMING FILM 
  const loadUpFilm = () => {
    setBusy(true);
    async function fetchData() {
      axios
        .get("https://localhost:7113/api/Films/Upcoming")
        .then((response) => {
          setBusy(false);
          setNowFilmAPI(response.data);
        }).catch(function (error) {
          console.log(error);
        });
    }

    fetchData();
  };

  useEffect(() => {
    isNowFilm ? loadNowFilm() : loadUpFilm();
    //loadNowFilm();
  }, []);

  if (nowfilmAPI.length != 0) {
    nowfilmAPI.data.map((c, key) => {
      data.push({
        key: key,
        image: c.images[0]?.path,
        id: c.id,
        name: c.name,
        category: c.category.name,
      });
    });
  }

  // VYVNK1 UI OF LIST FILM ON HOME PAGE
  return (
    <>
      {isBusy ? (
        <></>
      ) : (
        <>
          <List
            pagination={{
              pageSize: 8,
            }}
            itemLayout="vertical"
            grid={{ gutter: 16, lg: 4, xs: 1 }}
            dataSource={data}
            renderItem={(p) => (
              <List.Item>
                <Badge.Ribbon
                  text="R15"
                  placement="start"
                  color="red"
                  style={{
                    marginRight: 0,
                  }}
                >
                  {/* <Link to={"/filmdetail"} state={{ id: p.id }}> */}
                  <Link to={"/film/" + p.id} state={{ id: p.id }}>
                    <Card
                      bordered={false}
                      hoverable
                      style={{
                        width: 240,
                        marginBottom: "1em",
                      }}
                      cover={<img alt="alt" src={p.image} height={300} />}
                    >
                      <Meta title={p.name} description={p.category} />
                    </Card>
                  </Link>
                </Badge.Ribbon>
              </List.Item>
            )}
          />
        </>
      )}
    </>
  );
};

export default FilmList;
