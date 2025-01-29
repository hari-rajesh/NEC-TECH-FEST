import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Particle from './components/Particle'

import Home from './pages/Home'
import './index.css';
import Footer from './components/Footer'
import {FloatingNavDemo} from './components/Navbar/Navbar.jsx'
// import {FloatingNav} from './components/floating-navbar.jsx'

function App() {

  return (
   
      <BrowserRouter>
      <Particle />
        <FloatingNavDemo/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
