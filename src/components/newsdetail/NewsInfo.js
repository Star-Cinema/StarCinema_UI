import { Breadcrumb, Row, Col, Image, Tag, Space } from "antd";
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

import { useLocation } from "react-router-dom";
import Advertise from "../home/Advertise";

//VYVNK1 COMPONENT NEWSINFO -  DISPLAY DETAIL OF NEWS

const NewsInfo = () => {
  const location = useLocation();

  return (
    <>
      <Breadcrumb
        style={{ margin: "1.5em" }}
        items={[
          {
            title: <a href="/">Home</a>,
          },
          {
            title: "News Detail",
          },
        ]}
      />
      <Row>
        <Col span={3} ></Col>
        <Col lg={14} xs={24}>
          <Row>
            <Col
              type="flex"
              align="left"
              className="imgModify"
              style={{ margin: "1.2em" }}
            >
              <h1>{location.state.title}</h1>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <Image
                style={{ margin: "0.5em" }}
                preview={{ visible: false }}
                width={400}
                src={location.state.src}
                onClick={() => true}
              />
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                “Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.”, Ut enim ad minima veniam, quis nostrum
                exercitationem.
              </p>
              <h4>Ut Enim ad minima denim</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <ul>
                <li>
                  Eque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet.
                </li>
                <li>
                  Quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam.
                </li>
                <li>Ut enim ad minima veniam, quis nostrum exercitationem.</li>
              </ul>
              <h4>Marvel’s Doctor Strange</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>

              <h5>Share:</h5>
              <Space size={[0, 8]} wrap>
                <Tag icon={<TwitterOutlined />} color="#55acee">
                  Twitter
                </Tag>
                <Tag icon={<YoutubeOutlined />} color="#cd201f">
                  Youtube
                </Tag>
                <Tag icon={<FacebookOutlined />} color="#3b5999">
                  Facebook
                </Tag>
                <Tag icon={<LinkedinOutlined />} color="#55acee">
                  LinkedIn
                </Tag>
              </Space>
            </Col>
          </Row>
        </Col>

        {/* RIGHT SIDE BAR */}
        <Col lg={7} xs={0} type="flex" align="left">
          <div>
            <Advertise />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default NewsInfo;
