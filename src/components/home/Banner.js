import { Carousel, Image, Card } from "antd";


const carouselStyle = {
  position: "absolute",
  bottom: 70,
  zIndex: 20,
  textAlign: "left",
  marginLeft: 50,
  backgroundColor: "rgba(0,0,0,0.3)",
};

// VYVNK1 DISPLAY CAROUSEL ON HOMEPAGE
const Banner = () => (
  <>
    <Carousel autoplay style={{ backgroundColor: "grey" }}>
      <div style={{ position: "relative" }}>
        {/* <div style={carouselStyle}>
          <h1 style={{ color: "white" }}>STAR CINEMA</h1>
          <h2 style={{ color: "white" }}>Trang web hàng đầu cho đặt vé xem phim</h2>
          <h3 style={{ color: "white" }}>
            Chất lượng dịch vụ là tài sản lớn nhất của chúng tôi
          </h3>
        </div> */}
        <Image
          width={"100%"}
          preview={false}
          height={500}
          src="https://cdn.galaxycine.vn/media/2023/5/23/2048wx682h_1684824878382.jpg"
        />
      </div>
      {/* <div style={{ position: "relative" }}>

        <Image
          width={"100%"}
          preview={false}
          height={500}
          src="./image/banner2.jpg"
        />
      </div> */}
      <div style={{ position: "relative" }}>
        {/* <div style={carouselStyle}>
          <h1 style={{ color: "white" }}>STAR CINEMA</h1>
          <h2 style={{ color: "white" }}>TOP CINEMA QUALIFIED</h2>
          <h3 style={{ color: "white" }}>
            We provide the high quality film with affordable price
          </h3>
        </div> */}

        <Image
          width={"100%"}
          preview={false}
          height={500}
          src="https://cdn.galaxycine.vn/media/2023/5/23/2048x682_1684823880733.jpg"
        />
      </div>
      <div style={{ position: "relative" }}>

        <Image
          width={"100%"}
          preview={false}
          height={500}
          src="https://cdn.galaxycine.vn/media/2023/5/12/2048wx682h_1683861238716.jpg"
        />
      </div>
    </Carousel>
  </>
);
export default Banner;
