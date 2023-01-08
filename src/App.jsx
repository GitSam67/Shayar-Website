import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Shayari from "./Components/Shayari";
import OpenMic from "./Components/OpenMic";
import Traction from "./Components/Traction";
import Testimonial from "./Components/Testimonial";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";

export default function App() {
  return (
  <>
  <div id="starter" className="bg-no-repeat bg-cover w-full h-auto">
    <Header />
    <Home />
    </div>
    <About />
    <Shayari />
    <OpenMic />
    <Traction />
    <Testimonial />
    <FAQ />
    <Footer /> 
  </>
  )
}

