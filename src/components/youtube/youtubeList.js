import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./youtubeItem";

const youtubeList = (props) => {
  return (
    <div>
      <div className="youtube-list">
        {props.children}
        {YoutubeData &&
          YoutubeData.length > 0 &&
          YoutubeData.map((item, index) => (
            <>
              <YoutubeItem
                key={item.id}
                image={item.image}
                avatar={item.avatar || item.image}
                title={item.title}
                author={item.author}
                className={index === 1 ? "abc" : ""}
              />
            </>
          ))}
      </div>
    </div>
  );
};

export default youtubeList;
