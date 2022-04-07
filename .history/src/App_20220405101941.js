import React, { useState } from "react";
import Switch from "./components/switch/Switch";

function useTogle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  // Props getter
  function getToggleProps({ onClick, ...rest }) {
    return {
      onClick: () => {
        onClick && onClick();
        toggle();
      },
      ...rest,
    };
  }
  return {
    on,
    toggle,
    getToggleProps,
    // Props collection
    // toggleProps: {
    //   onClick: toggle,
    // },
  };
}
// Props collection - Kentc Dodds - create of Remix
// Props getter
const App = () => {
  const { on, toggleProps, getToggleProps } = useTogle();
  console.log(
    "🚀 ~ file: App.js ~ line 27 ~ App ~ getToggleProps",
    getToggleProps
  );
  // console.log("🚀 ~ file: App.js ~ line 19 ~ App ~ p", toggleProps);
  return (
    <>
      {/* <Switch on={on} {...toggleProps} /> */}
      <Switch {...getToggleProps({ on })} />
      <hr />
      <button
        onCl
        aria-label="custom-button"
        {...getToggleProps({
          onClick: () => console.info("onButtonToggle"),
        })}
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
