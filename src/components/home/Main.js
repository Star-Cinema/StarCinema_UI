import { Row, Col, Card } from "antd";
import FilmTab from "./FilmTab";
import News from "./News";
import Advertise from "./Advertise";

const { Meta } = Card;
const Main = () => {
  return (
    <>
      <Row>
        <Col span={18}>
          <FilmTab />

          <News />
        </Col>

        {/* RIGHT SIDE */}
        <Col span={6}>
          <Advertise />
        </Col>
      </Row>
    </>
  );
};

export default Main;
