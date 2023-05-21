import { Card, List, Rate, Badge, Space } from "antd";
const { Meta } = Card;
const Relate = () => {
  const poster = Array.from({ length: 100 }).map((_, i) => ({
    alt: "movie",
    src: "https://cdn.marvel.com/content/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg",
    title: "Avenger",
    description: "Category",
  }));

  return (
    <>
      <List
        itemLayout="vertical"
        grid={{ gutter: 16, column: 4 }}
        dataSource={poster.slice(0, 4)}
        renderItem={(p) => (
          <List.Item>
            <Badge.Ribbon
              text="R15"
              placement="start"
              color="red"
              style={{
                marginRight: 0,
              }}
            >
              <Card
                bordered={false}
                hoverable
                style={{
                  width: 200,
                  marginBottom: "1em",
                }}
                cover={<img alt={p.alt} src={p.src} height={250} />}
              >
                <Meta title={p.title} />
              </Card>
            </Badge.Ribbon>
          </List.Item>
        )}
      />
    </>
  );
};

export default Relate;
