import React from "react";
import Products from "./Products";
import cloth from "./images/cloth.png";
import iphone from "./images/iphone.png";
import shoes from "./images/shoes.png";
import Navbar2 from "./Navbar2";

export default function Home() {
  return (
    <>
    <Navbar2/>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={cloth} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={iphone} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={shoes} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      {/* <div className="container text-center">
        <div className="row">
          <div className="row w-10">
            <img src={iphone} alt="" />
          </div>
          <div className="col">
            <div className="row w-10">
              <img src={iphone} alt="" />
            </div>
            <div className="row w-10">
              <img src={iphone} alt="" />
            </div>
          </div>
        </div>
      </div> */}

      <Products />
    </>
  );
}
