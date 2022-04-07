import React, { useState } from "react";
import Switch from "./components/switch/Switch";

function useTogle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  function getToggleProps(props) {
    return {
      onclick: toggle,
      ...props,
    };
  }
  return {
    on,
    toggle,
    // Props collection
    // toggleProps: {
    //   onClick: toggle,
    // },
  };
}
// Props collection - Kentc Dodds - create of Remix
// Props getter
const App = () => {
  const { on, toggleProps } = useTogle();
  // console.log("🚀 ~ file: App.js ~ line 19 ~ App ~ p", toggleProps);
  return (
    <>
      <Switch on={on} {...toggleProps} />
      <hr />
      <button
        aria-label="custom-button"
        {...toggleProps}
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
