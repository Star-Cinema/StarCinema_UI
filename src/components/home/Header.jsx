import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../../img/logo.png"
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import { Affix } from "antd";
function Header() {
    return (
        <Affix offsetTop={0} onChange={(affixed) => console.log(affixed)}>
        <header className="p-3 text-white">
            <div className="header-top">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                        {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap"></use></svg> */}
                        <img id="logo" src={logo} alt="Girl in a jacket"></img>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/booking" className="btn btn-header">
                                <FaDoorOpen />
                                <span>Booking</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/userdetails" className="btn btn-header">
                                <FaUsers />
                                <span>User Details</span>
                            </Link>
                        </li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input
                            type="search"
                            className="form-control form-control-dark"
                            placeholder="Search..."
                            aria-label="Search"
                        ></input>
                    </form>

                    <div className="text-end">
                        <button
                            type="button"
                            className="btn btn-outline-light me-2"
                        >
                            Login
                        </button>
                        <button type="button" className="btn btn-warning">
                            Sign-up
                        </button>
                    </div>
                </div>
            </div>
        </header>
        </Affix>
    );
}

export default Header;
