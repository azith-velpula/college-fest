import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Highlights from "./pages/Highlights";
import Participate from "./pages/Participate";
import Contact from "./pages/Contact";
import EventSchedule from "./pages/EventSchedule";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#0B0B3B] via-[#1A1A4D] to-[#2D2D6D]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/participate" element={<EventSchedule />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
