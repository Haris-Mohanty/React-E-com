import React from "react";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import Navbar from "./components/Navbar/Navbar";
import { FooterContainer } from "./containers/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero slides={SliderData} />

      <h1>Products</h1>
      <FooterContainer />
    </>
  );
}

export default App;
