import {Image, Affix } from "antd";
import "../../App.css";
const data = [
  {
    key: 1,
    src: "/image/side2.jpg",
  },
  // {
  //   key: 2,
  //   src: "/image/side3.jpg",
  // },
];
const Advertise = () => {
  return (
    <>
      <Affix offsetTop={60}>
        <div  className="imgModify" style={{ margin: "1.5em" }}>
          {data.map((c) => (
            <Image
           
              style={{ margin: "1em" }}
              preview={{ visible: false }}
              width={230}
              src={c.src}
              onClick={() => true}
            />
          ))}
        </div>
      </Affix>
    </>
  );
};

export default Advertise;
