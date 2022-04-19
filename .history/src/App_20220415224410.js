import Counter from "./components/advanced-react/state-reduce/Counter";
import useCounter from "./components/advanced-react/state-reduce/useCounter";

const App = () => {
  const { count, handleDecrement, handleIncrement } = useCounter();
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
