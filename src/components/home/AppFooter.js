import { Affix, Row, Col } from "antd";
import { Footer } from "antd/es/layout/layout";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";


//VYVNK1 COMPONENT FOOTER
const AppFooter = () => {

  return (
    <>
      <Footer style={{ backgroundColor: "rgba(225, 238, 246, 0.7)" }}>
        <Row>
          <Col lg={6} xs={12}type="flex" align="left">
            <h3>Address</h3>
            <p>123 Phan Dang Luu</p>
            <p>Da Nang, Viet Nam</p>
          </Col>
          <Col lg={6} xs={12} type="flex" align="left">
            <h3>Services</h3>
            <p>Email Marketing</p>
            <p>Campaigns</p>
            <p>Branding</p>
            <p>Offline</p>
          </Col>
          <Col lg={6} xs={12} type="flex" align="left">
            <h3>About</h3>
            <p>Our Story</p>
            <p>Benefits</p>
            <p>Team</p>
            <p>Careers</p>
          </Col>
          <Col lg={6} xs={12} type="flex" align="left">
            <h3>Help</h3>
            <p>FAQs</p>
            <p>Contact Us</p>
            <p>
              {" "}
              <InstagramOutlined /> <FacebookOutlined /> <TwitterOutlined />{" "}
            </p>
          </Col>
        </Row>
      </Footer>
    </>
  );
};

export default AppFooter;
