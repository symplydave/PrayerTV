import React from "react";
import { newsData } from "../assets/data/data";

const NewsFeed = () => {
  return (
    <div className="news">
      <h3 className="title" >News Feed</h3>
      <div className="container">
        {newsData.map((item) => (
          <div className="card">
            <img src={item.img} alt="" />
            <div className="text">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <p className="small">{item.time}</p>
              <a href="">View Page</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
