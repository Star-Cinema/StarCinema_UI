import { Row, Col, Card } from "antd";
import FilmTab from "./FilmTab";
import News from "./News";
import Advertise from "./Advertise";

const { Meta } = Card;
const Main = () => {
  return (
    <>
      <Row>
        <Col lg={18} xs={24}>
          <FilmTab />

          <News />
        </Col>

        {/* RIGHT SIDE */}
        <Col lg={6} xs={0}>
          <Advertise />
        </Col>
      </Row>
    </>
  );
};

export default Main;
