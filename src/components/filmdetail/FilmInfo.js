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
  Divider,
} from "antd";
import { useState } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import YoutubeEmbed from "./YoutubeEmbed";
import axios from "axios";
import Relate from "./Relate";
import Advertise from "../home/Advertise";
import { useEffect } from "react";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useLocation } from "react-router-dom";
dayjs.extend(customParseFormat);

const { Paragraph, Text } = Typography;

const FilmInfo = () => {
  
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [ellipsis, setEllipsis] = useState(true);

  const [displayTime, setDisplayTime] = useState(false);

  const onChange = () => {
    setDisplayTime(true);
  };

  const [filmDetailAPI, setFilmDetailAPI] = useState([]);
  const data = [];
  const [isBusy, setBusy] = useState(true);

  function addDate(date) {
    const d = new Date(date);
    d.setDate(d.getDate() + 1);
    return d.toLocaleDateString("en-US");
  }


  const loadFilmDetail = () => {
    setBusy(true);

    async function fetchData() {
      setBusy(true);
      axios.get(`https://localhost:7113/api/Films/${location.state.id}`).then((response) => {
        setBusy(false);

        setFilmDetailAPI(response.data);
      });
    }
    fetchData();
  };

  useEffect(() => {
    loadFilmDetail();
  }, []);

  if (filmDetailAPI.length != 0) {
    data.push(filmDetailAPI.data);
  }

  // INITIATE disabledDate
  var disabledDate = (current) => {
    return (
      current &&
      (dayjs().startOf("day") <= current || current >= dayjs().startOf("day"))
    );
  };

  // GET START DATE AND END DATE

  var dateStartShowing = "Not Yet";
  var dateEndShowing = "Not Yet";

  if (data.length > 0) {
    if (data[0].schedules.length > 0) {
      const listSchedule = data[0].schedules;
      const index = listSchedule.length - 1;
     
      const lastStartDate = addDate(
        listSchedule[index].startTime.slice(0, 10)
      );
      console.log(lastStartDate);

      disabledDate = (current) => {
        // Can not select days before today and date after last start date
        return (
          current &&
          (current <= dayjs().startOf("day") ||
            current >= dayjs(lastStartDate))
        );
      };
      dateStartShowing = listSchedule[0].startTime.slice(0, 10);
      dateEndShowing = listSchedule[index].startTime.slice(0, 10);
    }
  }

  return (
    <>
      {isBusy ? (
        <></>
      ) : (
        <>
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
              <Col lg={18} xs={24} >
                <Row style={{ margin: "1.5em" }}>
                  <Col lg={8} xs={24}>
                    <div>
                      <Image
                        preview={{ visible: false }}
                        width={240}
                        src={data[0].images[0].path}
                        onClick={() => setOpen(true)}
                      />
                    </div>
                  </Col>
                  <Col lg={16} xs={24} type="flex" align="left">
                    <div>
                      <h2>{data[0].name}</h2>
                      <Rate disabled defaultValue={5} />
                      <p>
                        <ClockCircleOutlined style={{}} /> {data[0].duration}{" "}
                        minutes
                      </p>
                      <Tag color="#2db7f5">{data[0].category.name}</Tag>
                      <p>Country: {data[0].country}</p>
                      <p>Director: {data[0].director}</p>
                      <p>Producer: {data[0].producer}</p>
                      <p>Release date: {data[0].release.slice(0, 10)}</p>
                      <p>Date Start Showing: {dateStartShowing} </p>
                      <p>Date End Showing: {dateEndShowing} </p>
                    </div>
                  </Col>
                </Row>
                <Row style={{ margin: "1.5em" }}>
                  <Col span={24} type="flex" align="left">
                    <div>
                      <Divider orientation="left">
                        <h2>DESCRIPTION</h2>
                      </Divider>
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
                          {/* Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti amet, ipsam omnis nihil eos unde!
                            Accusantium omnis nesciunt illum inventore! Vero,
                            assumenda maiores! Totam asperiores eveniet fuga non
                            voluptas corporis. Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Corrupti amet, ipsam
                            omnis nihil eos unde! Accusantium omnis nesciunt
                            illum inventore! Vero, assumenda maiores! Totam
                            asperiores eveniet fuga non voluptas corporis.
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti amet, ipsam omnis nihil eos unde!
                            Accusantium omnis nesciunt illum inventore! Vero,
                            assumenda maiores! Totam asperiores eveniet fuga non
                            voluptas corporis. */}
                          {data[0].description}
                        </Paragraph>
                      </Card>
                    </div>
                  </Col>
                </Row>
                <Row style={{ margin: "1.5em" }}>
                  <Col span={24} type="flex" align="left">
                    <div>
                      <Divider orientation="left">
                        <h2>SCHEDULE</h2>{" "}
                        <DatePicker disabledDate={disabledDate} onChange={() => onChange()} />
                      </Divider>
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

                {/* <Row style={{ margin: "1.5em" }}>
                  <Col span={24} type="flex" align="left">
                    <Divider>
                      <h2 style={{ color: "red" }}>NOW SHOWING</h2>
                    </Divider>

                    <Relate />
                  </Col>
                </Row> */}
              </Col>

              {/* RIGHT SIDE BAR */}
              <Col lg={6} xs={0} type="flex" align="left">
                <div>
                  <Advertise />
                </div>
              </Col>
            </Row>

            {/* MODAL TO DISPLAY YOUTUBE */}
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
              <YoutubeEmbed embedId={data[0].videoLink} />
            </Modal>
          </>
        </>
      )}
    </>
  );
};
export default FilmInfo;
