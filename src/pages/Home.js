import React from "react";
import HomeStreamSlide from "../components/HomeStreamSlide";
import MultiStream from "../components/MultiStream";
import { slideData } from "../assets/data/data";

import { FaPlay } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <HomeStreamSlide />
      <div className="multi-div">
        <h3>Also Streaming:</h3>
        <MultiStream />
        <p>See all streamed videos</p>
      </div>
      <div className="multi-div">
        <h3>Trending</h3>
        <MultiStream />
        <p>See all trending videos</p>
      </div>

      <div className="morefeed">
        <h3>More feed</h3>
        <div className="grid-container" >
          {slideData.map((item) => (
            <div className="card grid" key={item.id}>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
