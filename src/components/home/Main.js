import { Row, Col, Card } from "antd";
import FilmTab from "./FilmTab";
import News from "./News";
import Advertise from "./Advertise";
const { Meta } = Card;

// VYVNK1 COMPONENT MAIN ON HOMEPAGE - DISPLAY MAIN CONTENTS
const Main = () => {
  return (
    <>
      <Row style={{width: '80%', margin: 'auto'}}>
        <Col lg={24} xs={24}  style={{marginBottom:"1.5em"}}>
          <FilmTab />

          <News  />
        </Col>

        {/* RIGHT SIDE */}
        {/* <Col lg={6} xs={0}>
          <Advertise />
        </Col> */}
      </Row>
    </>
  );
};

export default Main;
