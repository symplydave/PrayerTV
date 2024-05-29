import React from "react";
import { slideData } from "../assets/data/data";

import { FaPlay, FaBookmark } from "react-icons/fa";

const Stream = () => {
  return (
    <div className="stream">
      <div className="container">
        {slideData.map((item) => (
          <div className="card grid" key={item.id}>
            <img src={item.img} alt="" />
            <div className="play">
              <FaPlay />
            </div>
            <div className="overlay">
              <div className="icons">
                <p className="live">LIVE</p>
                <FaBookmark />
              </div>
              {/* <h3>{item.title}</h3> */}
              <div className="text">
                <p>{item.info}</p>
                <p className="hash">{item.hash}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stream;
