import React from "react";
import Products from "./Products"

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="card text-bg-dark">
          <img src="..." className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      <Products/>
      </div>
    </>
  );
}