import './App.css';
import Home from './pages/Home';
// import { Route, Routes, Router, BrowserRouter } from 'react-router-dom'
import FilmDetail from './pages/FilmDetail';
import TestPayment from './pages/TestPayment';
import VnPayReturn from './pages/VnPayReturn';
import Chat from './pages/Chat';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserDetailsPage from "../src/component/user_details/UserDetailsPage";
import logo from "./img/logo.png";
import Header from "./components/home/Header";
import BookingsPage from "./component/booking/BookingPage";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import NewsDetail from "./pages/NewsDetails";
import AppFooter from "./components/home/AppFooter";
function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/filmdetail" element={<FilmDetail />} />
        <Route path="/newsdetail" element={<NewsDetail />} />
        <Route path="/booking" element={<BookingsPage />} />

        <Route path="/userdetails" element={<UserDetailsPage />} />
        <Route path="/testPayment" element={<TestPayment />} />
        <Route path="/vnpay_return" element={<VnPayReturn />} />
        <Route path="/chat" element={<Chat />} />
        {/* <Route path="/bookables" element={<BookablesPage/>} />
          <Route path="/users" element={<UsersPage/>} /> */}
      </Routes>

      <AppFooter />
    </Router>
  );
}

export default App;
