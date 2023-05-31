import { React } from "react";
import "../App.css";
import { Row, Col, Card, List, Breadcrumb } from "antd";
import Advertise from "../components/home/Advertise";
import { useLocation, Link } from "react-router-dom";

const { Meta } = Card;

// VYVNK1 COMPONENT SEARCH

const FilmSearch = () => {
  const location = useLocation();
  const result = location.state.search;

  return (
    <>
      <Breadcrumb
        style={{ margin: "1.5em" }}
        items={[
          {
            title: <a href="/">Trang chủ</a>,
          },
          {
            title: "Tìm kiếm",
          },
        ]}
      />

      <Row style={{ margin: "1.5em" }}>
        <Col lg={18} xs={24}>
          {result.length == 0 ? (
            <>
              <h3>Không tìm thấy phim</h3>
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
                        <img alt="alt" src={p.images[0]?.path} height={300} />
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
    </>
  );
};

export default FilmSearch;
