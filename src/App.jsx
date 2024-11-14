import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import UnderMaintenance from "./components/UnderMaintenance";
import PageError from "./components/PageError";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Project from "./components/Project";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<UnderMaintenance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
