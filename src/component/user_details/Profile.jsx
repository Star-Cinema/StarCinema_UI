import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import InforUser from "./InforUser.js";
import CardFilm from "./CardFilm.jsx";
import Transactions from "./Transactions.jsx";
import Header from "../../components/home/Header.jsx";
import AppFooter from "../../components/home/AppFooter.js";
import './Profile.css'
import { useNavigate } from "react-router-dom";
import ChangePass from "./ChangePass.js";

//Show profile of user HungTD34
function Profile() {
    const navigate = useNavigate()

    //Check login HungTD34
    if(!sessionStorage.getItem("token")){
        return (
            <div className="main-profile">
                {/* <div className="header">
                    <Header />
                </div> */}
                <div className="container">
                    <div className="main not-login">
                        <span>Bạn chưa đăng nhập</span>
                        <a className="btn" href="/login">Đăng nhập ngay</a>
                    </div>
                </div>
                {/* <div className="footer">
                    <AppFooter />
                </div> */}
            </div>
        );
    }
    else
    return (
        <div className="main-profile">
            {/* <div className="header">
                <Header />
            </div> */}
            <div className="container">
                <div className="main">
                    <Tabs
                        defaultActiveKey="infor"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="infor" title="Thông tin cá nhân">
                            <InforUser />
                        </Tab>
                        <Tab eventKey="transaction" title="Lịch sử giao dịch">
                            <Transactions />
                        </Tab>
                        <Tab eventKey="change-pass" title="Đổi mật khẩu"  style={{minHeight:"50vh"}}>
                            <ChangePass />
                        </Tab>
                    </Tabs>
                    {/* <div className="list-films">
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
                    </div>
                </div> */}
                </div>
            </div>
            {/* <div className="footer">
                <AppFooter />
            </div> */}
        </div>
    );
}

export default Profile;
