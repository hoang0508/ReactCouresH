import React from "react";
import { calculateWinner } from "../../helpers";
import Cell from "./Cell";

const Board = (props) => {
  /// Array(9).fill() => [undefined]

  // const cells = [null, null, null, "X", "X", "X", null, null, null];
  // console.log(calculateWinner(cells));
  // console.log(props);
  return (
    <>
      <div className="game-board">
        {props.cells.map((item, index) => (
          <>
            <Cell
              key={index}
              value={item}
              onClick={() => props.onClick(index)}
              classname={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
            ></Cell>
          </>
        ))}
      </div>
    </>
  );
};

export default Board;
