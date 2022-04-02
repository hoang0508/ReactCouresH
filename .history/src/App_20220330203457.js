import React from "react";
import Title from "./components/advanced-react/render-props/Title";
// import FetchingData from "./components/advanced-react/hoc/FetchingData";

// HOC = Hight order component pattern

const App = () => {
  return (
    <>
      {/* <FetchingData></FetchingData> */}
      <Title
        render={() => {
          return <h1>Hello from render props</h1>;
        }}
      ></Title>
    </>
  );
};

export default App;
