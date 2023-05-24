import { Affix } from "antd";
import { Header } from "antd/es/layout/layout";

//VYVNK1 COMPONENT HEADER
const AppHeader = () => {
  return (
    <Affix offsetTop={0} onChange={(affixed) => console.log(affixed)}>
      <Header style={{ backgroundColor: "rgba(225, 238, 246, 0.7)" }} />
    </Affix>
  );
};

export default AppHeader;
