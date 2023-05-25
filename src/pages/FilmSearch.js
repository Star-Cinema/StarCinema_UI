import { React } from "react";
import "../App.css";
import { Row, Col, Card, List } from "antd";
import Advertise from "../components/home/Advertise";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/home/Header";
import AppFooter from "../components/home/AppFooter";
const { Meta } = Card;

// VYVNK1 COMPONENT SEARCH

const FilmSearch = () => {
  const location = useLocation();
  const result = location.state.search;

  return (
    <>
    <Header></Header>
      <Row style={{ margin: "1.5em" }}>
        <Col lg={18} xs={24}>
          {result.length == 0 ? (
            <>
              <h3>No Film(s) Found</h3>
            </>
          ) : (
            <List
              pagination={{
                pageSize: 6,
              }}
              itemLayout="vertical"
              grid={{ gutter: 16, lg: 3, xs: 1 }}
              dataSource={result}
              renderItem={(p) => (
                <List.Item>
                  <Link to={"/filmdetail"} state={{ id: p.id }}>
                    <Card
                      bordered={false}
                      hoverable
                      style={{
                        width: 240,
                        marginBottom: "1em",
                      }}
                      cover={
                        <img alt="alt" src={p.images[0].path} height={300} />
                      }
                    >
                      <Meta title={p.name} description={p.category.name} />
                    </Card>
                  </Link>
                </List.Item>
              )}
            />
          )}
        </Col>

        {/* RIGHT SIDE */}
        <Col lg={6} xs={0}>
          <Advertise />
        </Col>
      </Row>
      <AppFooter></AppFooter>
    </>
  );
};

export default FilmSearch;
