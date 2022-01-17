import React from "react";

const Cell = (props) => {
  return (
    <>
      <div className={`game-cell ${props.classname}`} onClick={props.onClick}>
        {props.value}
      </div>
    </>
  );
};

export default Cell;
