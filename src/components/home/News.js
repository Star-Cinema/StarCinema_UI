import { Row, Tabs, Col, Card, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Meta } = Card;

// VYVNK1 COMPONENT NEWS
const News = () => {
  const newsData = [
    {
      src: "./image/news1.jpg",
      title: "TOP 6 phim chuyển thể xuất sắc nhất",
    },
    {
      src: "./image/news2.jpg",
      title: "The BEATLES: Vòng quanh thế giới",
    },
    {
      src: "https://cdn.galaxycine.vn/media/2023/5/21/fast-x-cung-gap-phan-dien-xuat-sac-nhat-loat-phim-fast--furious-5_1684644461547.jpg",
      title:
        "[Review] Fast X: Cùng Gặp Phản Diện Xuất Sắc Nhất Loạt Phim Fast & Furious!",
    },
    {
      src: "https://cdn.galaxycine.vn/media/2023/5/17/maxresdefault-6_1684307079427.jpg",
      title: "Nobita hóa phi công trong phần phim mới",
    },
    {
      src: "./image/news5.jpg",
      title: "5 phim bạn nên xem trong tuần này",
    },
  ];
  // VYVNK1 UI OF NEWS
  return (
    <>
      {/* <Row gutter={[24, 24]}>
        <Divider>
          <h2 style={{ color: "#ad6800" }}>NEWS CORNER</h2>
        </Divider>
        <Col lg={6} xs={24} style={{ border: "3px solid red" }}>
          {newsData.slice(0, 2).map((i) => (
            <Row gutter={[24, 24]} style={{ border: "2px solid yellow" }}>
              <Col>
                <Card
                  cover={<img alt="example" src={i.src} />}
                  actions={[
                    <Link to={"/newsdetail"} state={{ title: i.title, src: i.src }}>
                      <Button style={{ backgroundColor: "#fe7900", color: "white ", borderRadius: 15 }}>
                        Xem thêm
                      </Button>
                    </Link>
                  ]}
                >
                  <Meta description={i.title} />
                </Card>
              </Col>
            </Row>
          ))}
        </Col>
        <Col lg={12} xs={24}>
        <Card
          cover={<img alt="example" src={newsData[2].src} />}
          actions={[
            <Link
              to={"/newsdetail"}
              state={{ title: newsData[2].title, src: newsData[2].src }}
            >
              <Button style={{ backgroundColor: "#fe7900", color: "white ", borderRadius: 15 }}>
                Xem thêm
              </Button>
            </Link>,
          ]}
        >
          <Meta description={newsData[2].title} />
        </Card>
      </Col>
      <Col lg={6} xs={24}>
        {newsData.slice(3).map((i) => (
          <Card
            cover={<img alt="example" src={i.src} />}
            actions={[
              <Link to={"/newsdetail"} state={{ title: i.title, src: i.src }}>
                <Button style={{ backgroundColor: "#fe7900", color: "white ", borderRadius: 15 }}>
                  Xem thêm
                </Button>
              </Link>,
            ]}
          >
            <Meta description={i.title} />
          </Card>
        ))}
      </Col>
      </Row> */}
      <NewsStyle>
        <Row
          gutter={[24, 0]}
          style={{
            backgroundImage:
              "url(http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/bg_latestnew.png)",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Divider>
            <h2
              style={{
                color: "#FE7900",
                fontFamily: '"Roboto Condensed", Sans-serif',
                fontWeight: 600,
                margin: "40px",
              }}
            >
              TIN TỨC
            </h2>
          </Divider>
          <div style={{ width: "80%", margin: "auto" }}>
            <Col xs={24} md={24}>
              <Row gutter={[24, 0]}>
                <Col xs={24} xl={6}>
                  <Card
                    className="mb-24"
                    cover={<img alt="example" src={newsData[0].src} />}
                    actions={[
                      <Link
                        className="newsdetail"
                        to={"/newsdetail"}
                        state={{
                          title: newsData[0].title,
                          src: newsData[0].src,
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: "#fe7900",
                            color: "white ",
                            borderRadius: 15,
                          }}
                        >
                          Xem thêm
                        </Button>
                      </Link>,
                    ]}
                  >
                    <DescriptionNewStyle>
                      <Meta description={newsData[0].title} />
                    </DescriptionNewStyle>
                  </Card>
                  <Card
                    className="mb-24"
                    cover={<img alt="example" src={newsData[1].src} />}
                    actions={[
                      <Link
                        to={"/newsdetail"}
                        state={{
                          title: newsData[1].title,
                          src: newsData[1].src,
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: "#fe7900",
                            color: "white ",
                            borderRadius: 15,
                          }}
                        >
                          Xem thêm
                        </Button>
                      </Link>,
                    ]}
                  >
                    <DescriptionNewStyle>
                      <Meta description={newsData[1].title} />
                    </DescriptionNewStyle>
                  </Card>
                </Col>
                <Col
                  xs={24}
                  xl={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div style={{ margin: "auto", marginTop: 0 }}>
                    <Card
                      cover={<img alt="example" src={newsData[2].src} />}
                      actions={[
                        <Link
                          to={"/newsdetail"}
                          state={{
                            title: newsData[2].title,
                            src: newsData[2].src,
                          }}
                        >
                          <Button
                            style={{
                              backgroundColor: "#fe7900",
                              color: "white ",
                              borderRadius: 15,
                            }}
                          >
                            Xem thêm
                          </Button>
                        </Link>,
                      ]}
                    >
                      <DescriptionNewStyle>
                        <Meta description={newsData[2].title} />
                      </DescriptionNewStyle>
                      <p
                        style={{
                          color: "rgb(51 51 51 / 82%)",
                          margin: 8,
                          fontWeight: "normal",
                        }}
                      >
                        Tính đến nay, thương hiệu The Fast And The Furious thu
                        về hơn 6 tỷ $. Furious 7 vượt mốc 1,5 tỷ $. F9: The Fast
                        Sage dù công chiếu khi cơn đại dịch Covid-19 vẫn hoành
                        hành khắp thế giới vẫn đạt doanh thu đáng thèm muốn 726
                        triệu $. Tại sao một cái tên vắt sữa hết phần phim mới
                        này tới phần phim mới khác, vắt sữa luôn spin-off vẫn
                        thành công?
                      </p>
                    </Card>
                  </div>
                </Col>
                <Col xs={24} xl={6}>
                  <Card
                    className="mb-24"
                    cover={<img alt="example" src={newsData[3].src} />}
                    actions={[
                      <Link
                        to={"/newsdetail"}
                        state={{
                          title: newsData[3].title,
                          src: newsData[3].src,
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: "#fe7900",
                            color: "white ",
                            borderRadius: 15,
                          }}
                        >
                          Xem thêm
                        </Button>
                      </Link>,
                    ]}
                  >
                    <DescriptionNewStyle>
                      <Meta description={newsData[3].title} />
                    </DescriptionNewStyle>
                  </Card>
                  <Card
                    className="mb-24 card-test"
                    cover={<img alt="example" src={newsData[4].src} />}
                    actions={[
                      <Link
                        to={"/newsdetail"}
                        state={{
                          title: newsData[4].title,
                          src: newsData[4].src,
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: "#fe7900",
                            color: "white ",
                            borderRadius: 15,
                          }}
                        >
                          Xem thêm
                        </Button>
                      </Link>,
                    ]}
                  >
                    <DescriptionNewStyle>
                      <Meta description={newsData[4].title} />
                    </DescriptionNewStyle>
                  </Card>
                </Col>
                {/* <Col xs={24}>
              <Card
                className="header-solid h-full ant-card-p-0"
                title={
                  <>
                    <Row
                      gutter={[24, 0]}
                      className="ant-row-flex ant-row-flex-middle"
                    >
                      <Col xs={24} md={12}>
                        <h6 className="font-semibold m-0">Payment Methods</h6>
                      </Col>
                      <Col xs={24} md={12} className="d-flex">
                        <Button type="primary">ADD NEW CARD</Button>
                      </Col>
                    </Row>
                  </>
                }
              >
                <Row gutter={[24, 0]}>
                  <Col span={24} md={12}>
                    <Card className="payment-method-card">
                      <img src={mastercard} alt="mastercard" />
                      <h6 className="card-number">**** **** **** 7362</h6>
                      <Button type="link" className="ant-edit-link">
                        {pencil}
                      </Button>
                    </Card>
                  </Col>
                  <Col span={24} md={12}>
                    <Card className="payment-method-card">
                      <img src={visa} alt="visa" />
                      <h6 className="card-number">**** **** **** 3288</h6>
                      <Button type="link" className="ant-edit-link">
                        {pencil}
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col> */}
              </Row>
            </Col>
          </div>
          {/* <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            className="header-solid h-full ant-invoice-card"
            title={[<h6 className="font-semibold m-0">Invoices</h6>]}
            extra={[
              <Button type="primary">
                <span>VIEW ALL</span>
              </Button>,
            ]}
          >
            <List
              itemLayout="horizontal"
              className="invoice-list"
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  actions={[<Button type="link">{download} PDF</Button>]}
                >
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                  <div className="amount">{item.amount}</div>
                </List.Item>
              )}
            />
          </Card>
        </Col> */}
        </Row>
      </NewsStyle>
    </>
  );
};
export default News;

const NewsStyle = styled.div`
  .ant-card .ant-card-body {
    padding: 10px 3px;
  }
`;

const DescriptionNewStyle = styled.div`
  overflow: hidden;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: black !important;
  .ant-card-meta-description {
    color: rgb(0, 0, 0);
    padding-bottom: 2px;
  }
  .ant-card-body {
    padding: 10px;
  }
`;
