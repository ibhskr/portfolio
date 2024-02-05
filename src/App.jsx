import React from "react";
import Navbar from "./components/navbar";
import Home from "./Home";
import Footer from "./components/Footer";
import UnderMaintenance from "./components/UnderMaintenance";
import Errorpage from "./components/Errorpage";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<UnderMaintenance />}/>
        <Route path="/blog" element={<UnderMaintenance />}/>
        <Route path="/about" element={<UnderMaintenance />}/>
        <Route path="/contact" element={<UnderMaintenance />}/>
        <Route path="*" element ={<Errorpage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
