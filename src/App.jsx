import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/styles.css'
import './styles/Home.css'
import Particle from './components/Particle'

import Home from './pages/Home'

import Footer from './components/Footer'



function App() {

  return (
   
      <BrowserRouter>
      <Particle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
      </BrowserRouter>
  )
}

export default App
