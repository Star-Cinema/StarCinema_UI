import { Card, Col, Row, Pagination, List,  } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
const Upcoming = () => {
  const poster = Array.from({ length: 100 }).map((_, i) => ({
    alt: "movie",
    src: "https://cdn.marvel.com/content/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg",
    title: "Avenger",
    description: "abc",
  }));

  return (
    <>
      <List
        pagination={{
          // onChange: (page) => {
          //   console.log(page);
          // },
          pageSize: 8,
        }}
        itemLayout="vertical"
        grid={{ gutter: 16, column: 4 }}
        dataSource={poster}
        renderItem={(p) => (
          <List.Item>
          <Link to={"/filmdetail"}>
            <Card
              bordered={false}
              hoverable
              style={{
                width: 240,
                marginBottom: "1em",
              }}
              cover={<img alt={p.alt} src={p.src} />}
            >
              <Meta title={p.title} description={p.description} />
            </Card>
            </Link>
          </List.Item>
        )}
      />
    </>
  );
};

export default Upcoming;
