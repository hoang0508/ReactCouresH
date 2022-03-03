import React, { useReducer } from "react";
import { useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyle.css";
// intialState = {}
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
// immutable
// [...arr] {...obj}
// deep copy JSON.parse{JSON.stringify(obj)}
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { winer, index } = action.payload;
      if (winer || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }

    case "RESET": {
      // setBoard(Array(9).fill(null));
      // setIsNext(true);
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      return nextState;
    }
    default:
      break;
  }
  return state;
};
const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setIsNext] = useState(true);
  // useReducer
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const action = {type: "CLICK", payload;{}}
  // dispatch({type: "CLICK"})
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  // });
  const winer = calculateWinner(state.board2);
  console.log(winer);

  // click item
  const handleClick = (index) => {
    // const boardCoppy = [...state.board]; // clone mảng gốc
    // if (winer || boardCoppy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winer,
      },
    });
    // boardCoppy[index] = state.xIsNext ? "X" : "O";
    // setState({
    //   ...state,
    //   board: boardCoppy,
    //   xIsNext: !state.xIsNext,
    // });
    // setBoard(boardCoppy);
    // setIsNext((xIsNext) => !xIsNext);
  };
  // Reset game
  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
    // setBoard(Array(9).fill(null));
    // setIsNext(true);
  };
  return (
    <>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="game-winer">{winer ? `Winer is ${winer}` : ""}</div>
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </>
  );
};

export default Game;
