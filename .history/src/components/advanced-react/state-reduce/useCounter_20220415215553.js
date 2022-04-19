import { useReducer } from "react";
const counterReducer = (state, action) => {
  switch (action.type) {
    // tănng
    case "increment":
      return {
        count: state.count + 1,
      };
    // giảm
    case "decrement":
      return {
        count: state.count - 1,
      };

    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

export default function useCounter({ initial }, reducer) {
  // useReducer
  const [{ count }, dispatch] = useReducer(reducer, { count: initial });
  // giảm
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  // tăng
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  return {
    count,
    handleIncrement,
    handleDecrement,
  };
}
