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
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                            <CardFilm />
                        </div>

                        <div class="col">
                            <CardFilm />
                        </div>
                        <div class="col">
                            <CardFilm />
                        </div>
                        <div class="col">
                            <CardFilm />
                        </div>
                        {/* <div class="col">
                            <div class="card">
                                <img
                                    src="..."
                                    class="card-img-top"
                                    alt="..."
                                ></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
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
