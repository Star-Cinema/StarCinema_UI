import {
  Breadcrumb,
  Row,
  Col,
  Image,
  Rate,
  Tag,
  DatePicker,
  Button,
  Modal,
  Typography,
  Card,
} from "antd";
import { useState } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import YoutubeEmbed from "./YoutubeEmbed";
import SideBanner from "./SideBanner";
const { Paragraph, Text } = Typography;

const FilmInfo = () => {
  const [open, setOpen] = useState(false);
  const [ellipsis, setEllipsis] = useState(true);

  const [displayTime, setDisplayTime] = useState(false);

  const onChange = () => {
    setDisplayTime(true);
  };

  return (
    <>
      <Breadcrumb
        style={{ margin: "1.5em" }}
        items={[
          {
            title: <a href="/">Home</a>,
          },
          {
            title: "Film Detail",
          },
        ]}
      />
      <Row>
        <Col span={18}>
          <Row style={{ marginTop: "1.5em" }}>
            <Col span={8}>
              <div>
                <Image
                  preview={{ visible: false }}
                  width={240}
                  src="https://cdn.marvel.com/content/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg"
                  onClick={() => setOpen(true)}
                />
              </div>
            </Col>
            <Col span={16} type="flex" align="left">
              <div>
                <h2>MOVIE TITLE</h2>
                <Rate disabled defaultValue={5} />
                <p>
                  <ClockCircleOutlined style={{}} /> 1 hour 30 minutes
                </p>
                <Tag color="#2db7f5">Category</Tag>
                <p>Country: Vietnam</p>
                <p>Director: Jame Cameroon</p>
                <p>Producer: Tran Thanh</p>
                <p>Release date: 26/05/2023</p>
              </div>
            </Col>
          </Row>
          <Row style={{ margin: "1.5em" }}>
            <Col span={24} type="flex" align="left">
              <div>
                <h2>DESCRIPTION</h2>
                <Card>
                  <Paragraph
                    ellipsis={
                      ellipsis
                        ? {
                            rows: 3,
                            expandable: true,
                            symbol: "more",
                          }
                        : false
                    }
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti amet, ipsam omnis nihil eos unde! Accusantium omnis
                    nesciunt illum inventore! Vero, assumenda maiores! Totam
                    asperiores eveniet fuga non voluptas corporis. Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Corrupti amet,
                    ipsam omnis nihil eos unde! Accusantium omnis nesciunt illum
                    inventore! Vero, assumenda maiores! Totam asperiores eveniet
                    fuga non voluptas corporis. Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Corrupti amet, ipsam omnis
                    nihil eos unde! Accusantium omnis nesciunt illum inventore!
                    Vero, assumenda maiores! Totam asperiores eveniet fuga non
                    voluptas corporis.
                  </Paragraph>
                </Card>
              </div>
            </Col>
          </Row>
          <Row style={{ margin: "1.5em" }}>
            <Col span={24} type="flex" align="left">
              <div>
                <h2>SCHEDULE</h2>
                <DatePicker onChange={onChange} />
              </div>
            </Col>
          </Row>
          {displayTime && (
            <Row style={{ margin: "1.5em" }}>
              <Col span={24} type="flex" align="left">
                <div>
                  <Card title="TIME">
                    <Tag>09:30</Tag>
                    <Tag>10:30</Tag>
                  </Card>
                </div>
              </Col>
            </Row>
          )}
        </Col>

        {/* RIGHT SIDE BAR */}
        <Col span={6} type="flex" align="left">
          <div>
            <h2 style={{ color: "red" }}>NOW SHOWING</h2>
            <SideBanner />
          </div>
        </Col>
      </Row>

      <Modal
        title="Movie title trailer"
        centered
        open={open}
        //onOk={() => setOpen(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onCancel={() => setOpen(false)}
        width={900}
      >
        <YoutubeEmbed embedId="rokGy0huYEA" />
      </Modal>
    </>
  );
};
export default FilmInfo;
