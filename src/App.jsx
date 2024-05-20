import React from "react";
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import About from './pages/About'
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"



const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
