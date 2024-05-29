import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideData } from "../assets/data/data";

import { FaPlay } from 'react-icons/fa';

const HomeStreamSlide = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-slide">
      <Slider {...settings}>
        {slideData.map((item) => (
          <div className="box" key={item.id}>
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
        ))}
      </Slider>
    </div>
  );
};

export default HomeStreamSlide;
