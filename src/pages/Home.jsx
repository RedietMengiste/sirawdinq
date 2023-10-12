import React from "react";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import Header from "../components/Header";
import Slide from "../components/Slide";
import Category from "../components/Category";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ProductCotainer from "../components/product/ProductCotainer";


function Home() {
  return (
    <>
      {/* <div class="preloader-wrap">
        <div class="spinner"></div>
      </div> */}
      <Header />
      <Slide />
      <Category />

      <ProductCotainer/>
      
      <Banner/>
    
     <Footer/>
    </>
  );
}

export default Home;
