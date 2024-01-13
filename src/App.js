import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Themes from './components/Themes';
import Home from './Pages/home/Home';
import About from './Pages/about/About'
import Portfolio from './Pages/portfolio/Portfolio'
import Contact from './Pages/contact/Contact'
import {useState, useEffect} from 'react'
import PulseLoader from "react-spinners/PulseLoader";
import Spinner from './components/Spinner';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])

  return (
    <div className='App'>
      {
        loading?
        <Spinner />
      :
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
      }
    </div>
  );
}

export default App;