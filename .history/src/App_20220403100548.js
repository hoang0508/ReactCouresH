import React from "react";
import Accordion from "./components/advanced-react/react-composition/Accordion";
import Editable from "./components/advanced-react/react-composition/Editable";

const App = () => {
  return (
    <>
      <Accordion header="Can I change my plan later"></Accordion>
      <Editable></Editable>
    </>
  );
};

export default App;
