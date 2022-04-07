import React, { useState } from "react";
import Switch from "./components/switch/Switch";

function useTogle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return {
    on,
    toggle,
    toggleProps: {
      onClick: toggle,
    },
  };
}

const App = () => {
  const { on, toggleProps } = useTogle();
  console.log("🚀 ~ file: App.js ~ line 19 ~ App ~ p", toggleProps);
  return (
    <>
      <Switch on={on} />
      <hr />
      <button
        aria-label="custom-button"
        // onClick={() => {
        //   console.log("onButton");
        //   toggle();
        // }}
      >
        {on ? "on" : "off"}
      </button>
    </>
  );
};

export default App;
