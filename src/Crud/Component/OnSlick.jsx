import React, { Component } from "react";
import Slider from "react-slick";

function Sample(props) {
  const { className, style, onClick } = props;

  return <div className={className} style={{ ...style, display: "none", background: "red" }} onClick={onClick}></div>;
}
export default class OnSlick extends Component {
  render() {
    var settings = {
      //   dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <Sample />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://c4.wallpaperflare.com/wallpaper/4/102/413/minimalism-black-dark-space-wallpaper-preview.jpg" alt="" />
          </div>
          <div>
            <img src="https://c4.wallpaperflare.com/wallpaper/119/763/640/space-black-background-wallpaper-preview.jpg" alt="" />
          </div>
          <div>
            <img src="https://c4.wallpaperflare.com/wallpaper/505/863/758/minimalism-space-astronaut-wallpaper-preview.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
