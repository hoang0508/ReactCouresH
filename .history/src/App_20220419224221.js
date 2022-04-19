import Counter from "./components/advanced-react/state-reduce/Counter";
import useCounter from "./components/advanced-react/state-reduce/useCounter";

const App = () => {
  const useReducer = (state, action) => {
    switch (action.type) {
      case "decrement":
        return {
          count: state.count - 5,
        };

      default:
        return useCounter.reducer(state, action);
    }
  };
  const { count, handleDecrement, handleIncrement } = useCounter(
    { initial: 0 },
    useReducer
  );
  return (
    <>
      <Counter
        count={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </>
  );
};

export default App;
