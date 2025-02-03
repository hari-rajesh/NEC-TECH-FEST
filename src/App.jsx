import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Particle from './components/Particle'

import Home from './pages/Home'
import './index.css';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';
import Event from './components/events/Event';
import EventPage from './components/events/EventPage';
import Accommodation from './pages/Accommodation';
import Contact from './pages/Contact';

function App() {

  return (
   
      <BrowserRouter>
      {/* <Particle /> */}
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/associations/department/:department" element={<Event />} />
          <Route path="/events/:eventType" element={<Event />} />
          <Route path="/:id" element={<EventPage />} />
          <Route path="/associations/event/:id" element={<EventPage />} />
          <Route path="/events/accommodations" element={<Accommodation/>} />
          <Route path="/events/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
