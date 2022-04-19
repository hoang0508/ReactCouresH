import Counter from "./components/advanced-react/state-reduce/Counter";
import useCounter from "./components/advanced-react/state-reduce/useCounter";

const App = () => {
  const { count } = useCounter();
  return (
    <>
      <Counter count={count}></Counter>
    </>
  );
};

export default App;
