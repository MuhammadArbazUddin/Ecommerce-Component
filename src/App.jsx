import React from "react";
import Accordion from "./components/Accordion/Accordion";
import HaveAnyQuestion from "./components/HaveAnyQuestion/HaveAnyQuestion";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import ProductShowCase from "./components/ProductShowcase/ProductShowcase";
import Testimonials from "./components/Testimonial/Testimonial";
import ProductCategory from "./components/ProductCategories/ProductCategories";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductCategory />
      <ProductCarousel />
      <ProductShowCase />
      <Accordion />
      <HaveAnyQuestion />
      <Testimonials />
    </>
  );
};

export default App;
