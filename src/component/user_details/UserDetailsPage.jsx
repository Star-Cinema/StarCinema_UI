import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import InforUser from "./InforUser.jsx";
import CardFilm from "./CardFilm.jsx";
import Transactions from "./Transactions.jsx";
function UserDetailsPage() {
    return (
        <div className="container">
            <div className="main">
                <Tabs
                    defaultActiveKey="infor"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="infor" title="Thông tin thành viên">
                        {/* <Sonnet /> */}
                        <InforUser />
                    </Tab>
                    <Tab eventKey="transaction" title="Giao dịch của tôi">
                        <Transactions />
                    </Tab>
                    {/* <Tab eventKey="contact" title="Contact" disabled>
                <Sonnet />
            </Tab> */}
                </Tabs>
                <div className="list-films">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <CardFilm />
                        </div>

                        <div className="col">
                            <CardFilm />
                        </div>
                        <div className="col">
                            <CardFilm />
                        </div>
                        <div className="col">
                            <CardFilm />
                        </div>
                        {/* <div className="col">
                            <div className="card">
                                <img
                                    src="..."
                                    className="card-img-top"
                                    alt="..."
                                ></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        This is a longer card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetailsPage;
