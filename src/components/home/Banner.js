import { Carousel, Image, Card } from "antd";


const carouselStyle = {
  position: "absolute",
  bottom: 70,
  zIndex: 20,
  textAlign: "left",
  marginLeft: 50,
  backgroundColor: "rgba(0,0,0,0.3)",
};

const Banner = () => (
  <>
    <Carousel autoplay style={{ backgroundColor: "grey" }}>
      <div style={{ position: "relative" }}>
        <div style={carouselStyle}>
          <h1 style={{ color: "white" }}>STAR CINEMA</h1>
          <h2 style={{ color: "white" }}>TOP CINEMA QUALIFIED</h2>
          <h3 style={{ color: "white" }}>
            We provide the high quality film with affordable price
          </h3>
        </div>
        <Image
          width={"100%"}
          preview={false}
          height={500}
          src="https://img1.wallspic.com/crops/6/9/6/4/6/164696/164696-star_wars-bb_8-darth_vader-poe_dameron-poster-1920x1080.jpg"
        />
      </div>
      <div style={{ position: "relative" }}>
        
        <Image
          width={"100%"}
          preview={false}
          height={500}
          src="./image/banner2.jpg"
        />
      </div>
      <div style={{ position: "relative" }}>
        <div style={carouselStyle}>
          <h1 style={{ color: "white" }}>STAR CINEMA</h1>
          <h2 style={{ color: "white" }}>TOP CINEMA QUALIFIED</h2>
          <h3 style={{ color: "white" }}>
            We provide the high quality film with affordable price
          </h3>
        </div>

        <Image
          width={"100%"}
          preview={false}
          height={500}
          src="https://shorturl.at/hP348" 
        />
      </div>
      <div style={{ position: "relative" }}>
        
        <Image
          width={"100%"}
          preview={false}
          height={500}
          src="./image/banner3.jpg"
        />
      </div>
    </Carousel>
  </>
);
export default Banner;
