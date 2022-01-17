import React from "react";

const youtubeItem = (props) => {
  return (
    <>
      <div className={`youtube-item ${props.className}`}>
        <div className="youtube-image">
          <img src={props.image} />
        </div>
        <div className="yotube-footer">
          <img src={props.avatar} className="youtube-avatar" />
          <div className="youtube-info">
            <h3 className="youtube-title">{props.title}</h3>
            <h4 className="youtube-author">{props.author}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default youtubeItem;
