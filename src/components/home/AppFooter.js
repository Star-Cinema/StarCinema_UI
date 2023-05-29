import { Affix, Row, Col } from "antd";
import { Footer } from "antd/es/layout/layout";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  EnvironmentOutlined,
  ShoppingOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

//VYVNK1 COMPONENT FOOTER
const AppFooter = () => {
  return (
    <>
      <Footer style={{ backgroundColor: "#1a1a1a" }}>
        <Row>
          <Col lg={6} xs={12} type="flex" align="left">
            <h3 style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              <EnvironmentOutlined /> Địa chỉ
            </h3>
            <ul>
              <li>
                <p style={{ color: "#a0a3a7" }}>123 Phan Đặng Lưu</p>
              </li>
              <li>
                <p style={{ color: "#a0a3a7" }}>Đà Nẵng, Việt Nam</p>
              </li>
            </ul>
          </Col>
          <Col lg={6} xs={12} type="flex" align="left">
            <h3 style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              <ShoppingOutlined /> Dịch vụ
            </h3>
            <ul>
              <li>
                <p style={{ color: "#a0a3a7" }}>Email Marketing</p>
              </li>
              <li>
                <p style={{ color: "#a0a3a7" }}>Quảng cáo</p>
              </li>
              <li>
                <p style={{ color: "#a0a3a7" }}>Nhãn hàng</p>
              </li>
            </ul>
          </Col>
          <Col lg={6} xs={12} type="flex" align="left">
            <h3 style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              <HomeOutlined /> Về Chúng tôi
            </h3>
            <ul>
              <li>
                <p style={{ color: "#a0a3a7" }}>Giới thiệu công ty</p>
              </li>
              <li>
                <p style={{ color: "#a0a3a7" }}>Quyền lợi</p>
              </li>
              <li>
                <p style={{ color: "#a0a3a7" }}>Cơ hội việc làm</p>
              </li>
            </ul>
          </Col>
          <Col lg={6} xs={12} type="flex" align="left">
            <h3 style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              <PhoneOutlined /> Hỗ trợ
            </h3>
            <ul>
              <li>
                <p style={{ color: "#a0a3a7" }}>Câu hỏi thường gặp</p>
              </li>
              <li>
                <p style={{ color: "#a0a3a7" }}>Liên hệ chúng tôi</p>
              </li>
              <li>
                <p style={{ color: "#a0a3a7" }}>
                  {" "}
                  <InstagramOutlined /> <FacebookOutlined /> <TwitterOutlined />{" "}
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Footer>
    </>
  );
};

export default AppFooter;
