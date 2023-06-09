import './App.css';
import Home from './pages/Home';
import FilmDetail from './pages/FilmDetail';
import VnPayReturn from './pages/VnPayReturn';
import Chat from './pages/Chat';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter, Outlet } from "react-router-dom";
import Profile from "../src/component/user_details/Profile";
import Login from '../src/pages/Login/Login.js'
import Register from '../src/pages/Register/Register.js'
import NewsDetail from '../src/pages/NewsDetails.js'
import BookingsPage from '../src/component/booking/BookingPage.jsx'
import Verify from './component/user_details/Verify';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import MessageProvider from './Context/MessageContext';
import FilmSearch from './pages/FilmSearch';
import AppFooter from './components/home/AppFooter';
import Header from './components/home/Header';
import FilmDetails from './pages/FilmDetails/FilmDetails';

function Layout() {
  return (
    <div className="booking-page-main">
      <Header />
      <Chat />
      <Outlet />
      <AppFooter />
    </div>
  );
}

function App() {
  return (
    <MessageProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route exact path="/" element={<Home />} />
            <Route path="/filmdetail" element={<FilmDetail />} />
            <Route path="/newsdetail" element={<NewsDetail />} />
            <Route path="/filmsearch" element={<FilmSearch />} />
            <Route path="/booking" element={<BookingsPage />} />

            <Route path="/my" element={<Profile />} />
            <Route path="/verify" element={<Verify />} />

            <Route path="/vnpay_return" element={<VnPayReturn />} />
            <Route path="/chat" element={<Chat />} />

            <Route path='/film/:id' element={<FilmDetails />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

        </Routes>
      </BrowserRouter>
    </MessageProvider>
  );
}

export default App;