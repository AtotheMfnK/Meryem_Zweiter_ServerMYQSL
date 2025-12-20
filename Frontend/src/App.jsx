
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./layout/Navbar";
import Card from './components/card.jsx'
import Home from './core/Home.jsx'
import About from "./core/About";
import Kontakt from "./core/Kontakt";

function App() {


  return (
    <>
      <BrowserRouter>
 <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Kontakt />} />
          <Route path="card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App


