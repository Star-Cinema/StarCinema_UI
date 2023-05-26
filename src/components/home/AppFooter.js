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
      <Footer style={{ backgroundColor: "#1a1a1a" }}>
        <Row>
          <Col lg={6} xs={12}type="flex" align="left">
            <h3 style={{color:"rgba(255, 255, 255, 0.7)"}}>Address</h3>
            <p style={{color:"#a0a3a7"}}>123 Phan Dang Luu</p>
            <p style={{color:"#a0a3a7"}}>Da Nang, Viet Nam</p>
          </Col>
          <Col lg={6} xs={12} type="flex" align="left">
            <h3 style={{color:"rgba(255, 255, 255, 0.7)"}}>Services</h3>
            <p style={{color:"#a0a3a7"}}>Email Marketing</p>
            <p style={{color:"#a0a3a7"}}>Campaigns</p>
            <p style={{color:"#a0a3a7"}}>Branding</p>
            <p style={{color:"#a0a3a7"}}>Offline</p>
          </Col>
          <Col lg={6} xs={12} type="flex" align="left">
            <h3 style={{color:"rgba(255, 255, 255, 0.7)"}}>About</h3>
            <p style={{color:"#a0a3a7"}}>Our Story</p>
            <p style={{color:"#a0a3a7"}}>Benefits</p>
            <p style={{color:"#a0a3a7"}}>Team</p>
            <p style={{color:"#a0a3a7"}}>Careers</p>
          </Col>
          <Col lg={6} xs={12} type="flex" align="left">
            <h3 style={{color:"rgba(255, 255, 255, 0.7)"}}>Help</h3>
            <p style={{color:"#a0a3a7"}}>FAQs</p>
            <p style={{color:"#a0a3a7"}}>Contact Us</p>
            <p style={{color:"#a0a3a7"}}>
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
