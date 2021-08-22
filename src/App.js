import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import Navbar from "./components/Navbar/Navbar";
import { FooterContainer } from "./containers/Footer";
import "./App.css";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <switch>
          <Route path="/" />
          <Route path="/products" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
        </switch> */}
      </Router>

      <Hero slides={SliderData} />

      <h2 className="title">SHOP</h2>
      <ProductListing />
      <FooterContainer />
    </>
  );
}

export default App;
