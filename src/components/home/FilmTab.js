import { Tabs } from "antd";
import NowShowing from "./NowShowing";
import Upcoming from "./Upcoming";

const FilmTab = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `NOW SHOWING`,
      children: (
        <>
          <NowShowing />{" "}
        </>
      ),
    },
    {
      key: "2",
      label: `UPCOMING`,
      children: (
        <>
          <Upcoming />{" "}
        </>
      ),
    },
  ];
  return (
    <>
      <Tabs
        style={{ margin: "1em" }}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </>
  );
};

export default FilmTab;
