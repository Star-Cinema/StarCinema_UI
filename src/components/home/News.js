import { Row, Tabs, Col, Card, Button, Divider } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const News = () => {
  const newsData = [
    {
      src: "./image/news1.jpg",
      title: "SIX BOOK-TO-FILM ADAPTATIONS TO GET EXCITED",
    },
    {
      src: "./image/news2.jpg",
      title: "THE BEATLES: EIGHT DAYS A WEEK – THE TOURING",
    },
    {
      src: "./image/news3.jpg",
      title: "WIN A WIZARDING WORLD HOLIDAY WITH FANTASTIC",
    },
    {
      src: "./image/news4.jpg",
      title: "DOCTOR STRANGE ASSEMBLES WITH THE AVENGERS",
    },
    {
      src: "./image/news5.jpg",
      title: "5 MOVIES TO WATCH THIS WEEK",
    },
  ];

  return (
    <Row>
      <Divider>
        <h2 style={{ color: "#ad6800" }}>NEWS CORNER</h2>
      </Divider>
      <Col span={6}>
        {newsData.slice(0, 2).map((i) => (
          <Card
            style={{
              width: 230,
              margin: "1em",
            }}
            cover={<img alt="example" src={i.src} />}
            actions={[
              <Link to={"/newsdetail"} state={{ title: i.title, src: i.src }}>
                <Button style={{ backgroundColor: "#fa8c16", color: "white " }}>
                  Read more
                </Button>
              </Link>,
            ]}
          >
            <Meta description={i.title} />
          </Card>
        ))}
      </Col>
      <Col span={12} style={{ padding: "3em" }}>
        <Card
          style={{
            width: 400,
          }}
          cover={<img alt="example" src={newsData[2].src} />}
          actions={[
            <Link
              to={"/newsdetail"}
              state={{ title: newsData[2].title, src: newsData[2].src }}
            >
              <Button style={{ backgroundColor: "#fa8c16", color: "white " }}>
                Read more
              </Button>
            </Link>,
          ]}
        >
          <Meta description={newsData[2].title} />
        </Card>
      </Col>
      <Col span={6}>
        {newsData.slice(3).map((i) => (
          <Card
            style={{
              width: 230,
              margin: "1em",
            }}
            cover={<img alt="example" src={i.src} />}
            actions={[
              <Link to={"/newsdetail"} state={{ title: i.title, src: i.src }}>
                <Button style={{ backgroundColor: "#fa8c16", color: "white " }}>
                  Read more
                </Button>
              </Link>,
            ]}
          >
            <Meta description={i.title} />
          </Card>
        ))}
      </Col>
    </Row>
  );
};
export default News;
