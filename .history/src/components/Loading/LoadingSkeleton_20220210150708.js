import React from "react";

const LoadingSkeleton = (props) => {
  return (
    <div
      className="skeleton"
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
