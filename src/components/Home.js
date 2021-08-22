import React from "react";
import Hero from "./Hero";
import ProductListing from "../containers/ProductListing";
import { SliderData } from "../data/SliderData";

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <h2 className="title">SHOP</h2>
      <ProductListing />
    </>
  );
};

export default Home;
