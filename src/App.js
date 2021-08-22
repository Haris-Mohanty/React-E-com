import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { FooterContainer } from "./containers/Footer";
import "./App.css";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetail";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
        </Switch>
        <FooterContainer />
      </Router>
    </>
  );
}

export default App;
