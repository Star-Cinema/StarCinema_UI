import { Affix } from "antd";
import { Header } from "antd/es/layout/layout";
const AppHeader = () => {
  return (
    <Affix offsetTop={0} onChange={(affixed) => console.log(affixed)}>
      <Header style={{ backgroundColor: "rgba(0,0,0,0.7)" }} />
    </Affix>
  );
};

export default AppHeader;
