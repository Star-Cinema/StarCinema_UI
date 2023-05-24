import './App.css';
import Home from './pages/Home';
// import { Route, Routes, Router, BrowserRouter } from 'react-router-dom'
import FilmDetail from './pages/FilmDetail';
import TestPayment from './pages/TestPayment';
import VnPayReturn from './pages/VnPayReturn';
import Chat from './pages/Chat';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Profile from "../src/component/user_details/Profile";
import Login from '../src/pages/Login/Login.js'
import Register from '../src/pages/Register/Register.js'
import Main from "./components/home/Main";
// import { Header } from "antd/es/layout/layout";
import NewsDetail from '../src/pages/NewsDetails.js'
import BookingsPage from '../src/component/booking/BookingPage.jsx'
import Verify from './component/user_details/Verify';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/filmdetail" element={<FilmDetail />} />
                <Route path="/newsdetail" element={<NewsDetail />} />
                <Route path="/booking" element={<BookingsPage />} />

                <Route path="/my" element={<Profile />} />
                <Route path="/verify" element={<Verify />} />


                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
