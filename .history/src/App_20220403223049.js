import React, { useState } from "react";
import Switch from "./components/switch/Switch";

function useTogle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return { on, toggle };
}

const App = () => {
  const { on, toggle } = useTogle();
  return (
    <>
      <Switch on={on} onClick={toggle} />
      <hr />
      <button aria-label="custom-button">{on ? "on" : "off"}</button>
    </>
  );
};

export default App;
