import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom'
import FilmDetail from './pages/FilmDetail';
function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/filmdetail" element={<FilmDetail/>}/>
  </Routes>
</BrowserRouter>
       {/* <Home/> */}
    </div>

    
  );
}

export default App;
