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

//START REGION
//VYVNK1 COMPONENT FILM INFO
const FilmInfo = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [ellipsis, setEllipsis] = useState(true);

  const [displayTime, setDisplayTime] = useState(false);

  const [filmDetailAPI, setFilmDetailAPI] = useState([]);
  const data = [];
  const [isBusy, setBusy] = useState(true);

  // FOR USING ANTD DATEPICKER
  function addDate(date) {
    const d = new Date(date);
    d.setDate(d.getDate() + 1);
    return d.toLocaleDateString("en-US");
  }

  const loadFilmDetail = () => {
    setBusy(true);

    async function fetchData() {
      setBusy(true);
      axios
        .get(`https://localhost:7113/api/Films/${location.state.id}`)
        .then((response) => {
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

      const lastStartDate = addDate(listSchedule[index].startTime.slice(0, 10));
      
      disabledDate = (current) => {
        // Can not select days before today and date after last start date
        return (
          current &&
          (current <= dayjs().startOf("day") || current >= dayjs(lastStartDate))
        );
      };
      dateStartShowing = listSchedule[0].startTime.slice(0, 10);
      dateEndShowing = listSchedule[index].startTime.slice(0, 10);
    }
  }

  // DISPLAY TIME WHEN SELECT A DATE
  const [listTime, setListTime] = useState([]);
  const onSelectDate = (date, dateString) => {
    const listSchedule = data[0].schedules;
    const selectListDatetime = listSchedule.filter(
      (item) => item.startTime.slice(0, 10) == dateString
    );
    setListTime(selectListDatetime);
    setDisplayTime(true);
  };

  //UI OF FILM INFO
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
                  title: <a href="/">Trang chủ</a>,
                },
                {
                  title: "Phim ...",
                },
              ]}
            />
            <Row>
              <Col lg={18} xs={24}>
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
                        phút
                      </p>
                      <Tag color="#2db7f5">{data[0].category.name}</Tag>
                      <p>Quốc gia: {data[0].country}</p>
                      <p>Đạo diễn: {data[0].director}</p>
                      <p>Nhà sản xuất: {data[0].producer}</p>
                      <p>Ngày ra rạp: {data[0].release.slice(0, 10)}</p>
                      <p>Ngày khởi chiếu: {dateStartShowing} </p>
                      {/* <p>Ngày: {dateEndShowing} </p> */}
                    </div>
                  </Col>
                </Row>
                <Row style={{ margin: "1.5em" }}>
                  <Col span={24} type="flex" align="left">
                    <div>
                      <Divider orientation="left">
                        <h2>Mô tả phim</h2>
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
                        <h2>Lịch chiếu</h2>{" "}
                        <DatePicker
                          disabledDate={disabledDate}
                          onChange={onSelectDate}
                        />
                      </Divider>
                    </div>
                  </Col>
                </Row>
                {displayTime && (
                  <Row style={{ margin: "1.5em" }}>
                    <Col span={24} type="flex" align="left">
                      <div>
                        <Card title="Thời gian">
                          {listTime.map((item) => (
                            <Tag color="orange">
                              {item.startTime.slice(11, 16)}
                            </Tag>
                          ))}
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
              title="Trailer phim"
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
