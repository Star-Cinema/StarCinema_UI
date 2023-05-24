import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import UserDetailsPage from "./component/user_details/Profile";
import logo from "./img/logo.png";
import FilmDetail from "./pages/FilmDetail";
import Home from "./pages/Home";
import Header from "./components/home/Header";
import BookingsPage from "./component/booking/BookingPage";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import NewsDetail from "./pages/NewsDetails";
import AppFooter from "./components/home/AppFooter";
import Login from '../src/pages/Login/Login.js'
import Register from '../src/pages/Register/Register.js'
import Main from "./components/home/Main";
// import { Header } from "antd/es/layout/layout";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/filmdetail" element={<FilmDetail />} />
                <Route path="/newsdetail" element={<NewsDetail />} />
                <Route path="/booking" element={<BookingsPage />} />

                <Route path="/my" element={<UserDetailsPage />} />


                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
