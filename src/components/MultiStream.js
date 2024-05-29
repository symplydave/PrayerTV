import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideData } from "../assets/data/data";

import { FaPlay } from "react-icons/fa";

function MultiStream() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-slide">
      <Slider {...settings}>
        {slideData.map((item) => (
          <div className="box multi" key={item.id}>
            <div className="card">
              <img src={item.img} alt="" />
              <div className="play">
                <FaPlay />
              </div>
              <div className="overlay">
                {/* <h3>{item.title}</h3> */}
                <p>{item.info}</p>
                <p className="hash">{item.hash}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultiStream;
