import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom'
import FilmDetail from './pages/FilmDetail';
import TestPayment from './pages/TestPayment';
import VnPayReturn from './pages/VnPayReturn';
import Chat from './pages/Chat';
function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/filmdetail" element={<FilmDetail/>}/>
    <Route path="/testPayment" element={<TestPayment/>}/>
    <Route path="/vnpay_return" element={<VnPayReturn/>}/>
    <Route path="/chat" element={<Chat/>}/>
  </Routes>
</BrowserRouter>
       {/* <Home/> */}
    </div>

    
  );
}

export default App;
