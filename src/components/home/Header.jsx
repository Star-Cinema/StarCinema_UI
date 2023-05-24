import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../../img/logo.png"
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import { useState } from "react";
import jwtDecode from "jwt-decode";
function Header() {
    const [user, setUser] = useState(sessionStorage.getItem("token") && jwtDecode(sessionStorage.getItem("token")))
    console.log(user)

    const handleLogout = () => {
        sessionStorage.removeItem("token")
        window.location = "/"
    }
    return (
        <header className="p-3 text-white">
            <div className="header-top">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                        {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap"></use></svg> */}
                        <img id="logo" src={logo} alt="Girl in a jacket" style={{ marginLeft: "40px" }}></img>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/booking" className="btn-header">
                                <FaDoorOpen />
                                <span>Booking</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/my" className="btn-header">
                                <FaUsers />
                                <span>User Details</span>
                            </Link>
                        </li> */}
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input
                            type="search"
                            className="form-control form-control-dark"
                            placeholder="Search..."
                            aria-label="Search"
                            style={{ height: "40px" }}
                        ></input>
                    </form>
                    {
                        user ?
                            <>
                                <div className="dropdown" >
                                    {/* <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" */}
                                    <button className="" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                        style={{ color: "#000", backgroundColor: "#fff", border: "none", display: "flex", alignItems: "center" }}
                                    >

                                        <img src="https://banner2.cleanpng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg"
                                            style={{ height: "40px", width: "40px", objectFit: "cover", borderRadius: "50px", border: "1px solid #000", marginRight: "5px" }}
                                        />
                                        <span style={{ color: "#000", fontSize: "23px" }}>{user?.name}</span>

                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/my">Thông tin cá nhân</a></li>
                                        <li><a className="dropdown-item" onClick={() => handleLogout()}>Đăng xuất</a></li>
                                    </ul>
                                </div>
                            </>
                            // <Link to={'/my'} style={{
                            //     display: "flex",
                            //     alignItems: "center"
                            // }}>
                            //     <img src="https://banner2.cleanpng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg"
                            //         style={{ height: "40px", width: "40px", objectFit: "cover", borderRadius: "50px", border: "1px solid #000", marginRight: "5px" }}
                            //     />
                            //     <span style={{ color: "#000" }}>{user?.name}</span>
                            // </Link> 
                            :
                            <div className="text-end">
                                <a href="/login"
                                style={{
                                    textDecoration: "none",
                                    color: "#000",
                                    border:"1px solid #000",
                                    padding:"10px",
                                    borderRadius: "5px",
                                    marginRight: "10px"
                                }}
                                >
                                    Login
                                </a>
                                <a
                                 href="/register"
                                 style={{
                                    textDecoration: "none",
                                    color: "#000",
                                    backgroundColor:"#fc3",
                                    border:"1px solid #fc3",
                                    padding:"10px",
                                    borderRadius: "5px",
                                    marginRight:"40px"
                                }}
                                >
                                    Sign-up
                                </a>
                            </div>
                    }

                </div>
            </div>
        </header >
    );
}

export default Header;
