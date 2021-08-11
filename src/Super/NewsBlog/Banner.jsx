import React from "react";
import "./NewsBlog.css";

const Banner = () => {
  return (
    <>
      <div className="berita">
        <img src={News} alt="" />
        <div className="container">
          <p>Education | 2 April 2021</p>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <hr />

          <h4 className="text-center">POPULAR</h4>
        </div>
      </div>
    </>
  );
};
