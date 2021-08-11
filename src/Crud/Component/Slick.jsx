import React, { Component } from "react";
import Slider from "react-slick";
import "../Style/CrHeader.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div>
        <Slider {...settings} className="text-center">
          <div className="slide">
            <iframe
              width="200"
              height="130"
              padding="40"
              src="https://www.youtube.com/embed/LkR-9Z1sle8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="slide">
            <iframe
              width="200"
              height="130"
              src="https://www.youtube.com/embed/1HDnwrxXCZk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Slider>
      </div>
    );
  }
}
