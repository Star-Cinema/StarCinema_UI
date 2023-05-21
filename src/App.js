import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserDetailsPage from "../src/component/user_details/UserDetailsPage";
import logo from "./img/logo.png";
import FilmDetail from "./pages/FilmDetail";
import Home from "./pages/Home";
import BookingsPage from "./component/booking/BookingPage";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import NewsDetail from "./pages/NewsDetails";
import AppFooter from "./components/home/AppFooter";
function App() {
    return (
        <Router>
            <div>
                <header className="p-3 text-white">
                    <div className="header-top">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a
                                href="/"
                                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                            >
                                {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap"></use></svg> */}
                                <img
                                    id="logo"
                                    src={logo}
                                    alt="Girl in a jacket"
                                ></img>
                            </a>

                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li>
                                    <Link
                                        to="/booking"
                                        className="btn btn-header"
                                    >
                                        <FaDoorOpen />
                                        <span>Booking</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/userdetails"
                                        className="btn btn-header"
                                    >
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
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                >
                                    Sign-up
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/filmdetail" element={<FilmDetail />} />
                <Route path="/newsdetail" element={<NewsDetail/>} />
                <Route path="/booking" element={<BookingsPage />} />

                <Route path="/userdetails" element={<UserDetailsPage />} />
                {/* <Route path="/bookables" element={<BookablesPage/>} />
                <Route path="/users" element={<UsersPage/>} /> */}
            </Routes>
            {/* <footer className="text-center text-lg-start text-white">
                <div className=" p-4 pb-0">
                    <section className="">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to
                                    organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Products
                                </h6>
                                <p>
                                    <a className="text-white">MDBootstrap</a>
                                </p>
                                <p>
                                    <a className="text-white">MDWordPress</a>
                                </p>
                                <p>
                                    <a className="text-white">BrandFlow</a>
                                </p>
                                <p>
                                    <a className="text-white">
                                        Bootstrap Angular
                                    </a>
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Useful links
                                </h6>
                                <p>
                                    <a className="text-white">Your Account</a>
                                </p>
                                <p>
                                    <a className="text-white">
                                        Become an Affiliate
                                    </a>
                                </p>
                                <p>
                                    <a className="text-white">Shipping Rates</a>
                                </p>
                                <p>
                                    <a className="text-white">Help</a>
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Contact
                                </h6>
                                <p>
                                    <i className="fas fa-home mr-3"></i> New
                                    York, NY 10012, US
                                </p>
                                <p>
                                    <i className="fas fa-envelope mr-3"></i>{" "}
                                    info@gmail.com
                                </p>
                                <p>
                                    <i className="fas fa-phone mr-3"></i> + 01
                                    234 567 88
                                </p>
                                <p>
                                    <i className="fas fa-print mr-3"></i> + 01
                                    234 567 89
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3"></hr>

                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2020 Copyright:
                                    <a
                                        className="text-white"
                                        href="https://mdbootstrap.com/"
                                    >
                                        MDBootstrap.com
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                <a
                                    className="btn btn-outline-light btn-floating m-1 text-white"
                                    role="button"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    className="btn btn-outline-light btn-floating m-1 text-white"
                                    role="button"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>

                                <a
                                    className="btn btn-outline-light btn-floating m-1 text-white"
                                    role="button"
                                >
                                    <i className="fab fa-google"></i>
                                </a>

                                <a
                                    className="btn btn-outline-light btn-floating m-1 text-white"
                                    role="button"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer> */}
            <AppFooter/>
        </Router>
    );
}

export default App;
