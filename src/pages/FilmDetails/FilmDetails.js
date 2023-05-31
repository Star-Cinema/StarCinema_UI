import React from 'react'
import './FilmDetails.css'
import { Card, Col, DatePicker, Image, Modal, Row, Tag } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { ArrowRightOutlined, FieldTimeOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import YoutubeEmbed from '../../components/filmdetail/YoutubeEmbed'
import moment from 'moment/moment'

function FilmDetails() {
  const params = useParams()
  const [film, setFilm] = useState()
  const [filmUpcomming, setFilmUpcomming] = useState()
  const [listTime, setListTime] = useState([]);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState()
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    var res = await axios.get(`https://localhost:7113/api/Films/${params.id}`)
    setFilm(res?.data?.data)

    var res = await axios.get(`https://localhost:7113/api/Films/Upcoming`)
    setFilmUpcomming(res?.data?.data)
  }

  useEffect(() => {
    if (date) {
      const selectListDatetime = film?.schedules?.filter(
        (item) => item.startTime.slice(0, 10) == date
      );
      setListTime(selectListDatetime);
    }

    console.log(filmUpcomming)
  }, [date])
  return (
    <div className='main-film-detail'>
      <div className='container-film-detail'>
        <div className='left'>
          <div className='film-info'>
            <div className='banner'>
              <Image src={film?.images[0]?.path}
                preview={{ visible: false }}
                onClick={() => setOpen(true)}
              />
            </div>
            <div className='info'>
              <div className='name'>
                <span>{film?.name}</span>
              </div>
              <div className='row-info duration'>
                <FieldTimeOutlined />
                <span>{film?.duration}</span>
                phút
              </div>
              <div className='row-info category'>
                Thể loại:
                <span>{film?.category?.name}</span>
              </div>
              <div className='row-info country'>
                Quốc gia:
                <span>{film?.country}</span>
              </div>
              <div className='row-info director'>
                Đạo diễn:
                <span>{film?.director}</span>
              </div>
              <div className='row-info producer'>
                Nhà sản xuất:
                <span>{film?.producer}</span>
              </div>
              <div className='row-info release'>
                Ngày khởi chiếu:
                <span>{film?.release}</span>
              </div>
            </div>
          </div>
          <div className='description'>
            <div className='title'>
              <span>NỘI DUNG PHIM</span>
            </div>
            <div>
              {film?.description}
            </div>
          </div>
          <div className='schedule'>
            <div className='title'>
              <span>LỊCH CHIẾU</span>
            </div>
            <div className='date'>
              <DatePicker placeholder='Chọn ngày chiếu' className='date-picker'
                onChange={(e) => setDate(e.toISOString().slice(0, 10))}
                disabledDate={(current) => current.isBefore(dayjs(new Date().setDate(new Date().getDate() - 1)))}
              />
            </div>
            <div className='list-time-title'>

              <span>KHUNG GIỜ CHIẾU</span>
            </div>
            <div className='list-time'>
              {
                // date && (
                //   <Row style={{ margin: "1.5em" }}>
                //     <Col span={24} type="flex" align="left">
                //       <div>
                //         <Card title="Thời gian">
                //           {listTime.map((item) => (
                //             <Tag color="orange">
                //               {item.startTime.slice(11, 16)}
                //             </Tag>
                //           ))}
                //         </Card>
                //       </div>
                //     </Col>
                //   </Row>
                // )}

                date &&
                (

                  !listTime?.length == 0 ? listTime?.map((item) => (
                    // <Tag color="orange">
                    //   {item.startTime.slice(11, 16)}
                    // </Tag>
                    <div className='time-item'>
                      <a href='/booking' style={{color:"#f26b38"}}>
                        {item?.startTime?.slice(11, 16)}
                      </a>
                    </div>
                  ))
                    : <span>Không có lịch chiếu</span>
                )
              }
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='right-title'>
            <span>PHIM SẮP CHIẾU</span>
          </div>
          <div className='list-film'>
            {
              filmUpcomming && filmUpcomming.slice(0,3).map((film, index) => (
                <div className='film-item'>
                  <a href={'/film/' + film?.id}>
                    <img src={film?.images[0]?.path} />
                  </a>
                  <span style={{ fontSize: "23px" }}>{film?.name}</span>
                </div>
              ))
            }
            <div className='button-more'>
              {/* <a href='/'>XEM THÊM
                <ArrowRightOutlined style={{marginLeft:"10px"}}/>
              </a> */}
              <Link to={"/"} state={{check:"false"}}>XEM THÊM
                <ArrowRightOutlined style={{marginLeft:"10px"}}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
        <YoutubeEmbed embedId={film?.videoLink} />
      </Modal>
    </div>
  )
}

export default FilmDetails