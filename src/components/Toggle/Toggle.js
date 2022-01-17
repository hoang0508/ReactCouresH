import React, { useState } from "react";
import "./ToggleStyles.css";
// // stateless functional component: component nhưng không sử dụng state

// function Toggle() {
//   return (
//     <>
//     <div className="toggle"></div>
//     </>
//   )
// }

// // stateful functional component: component có sử dụng state
// function Toggle2() {
//   const [count, setCount] = useState();
//   return (
//     <>
//     <div className="toggle"></div>
//     </>
//   );
// }

function Toggle() {
  //1. enabling state : useState(initialize value)
  // 2. initialize state : useState(false)
  // 3. reading state:
  // 4. update state:
  // const array = useState(false);
  // console.log(array); // [false, ƒ]
  // Destructuring
  // const [a, b] = [1, 2];
  // console.log(a, b);
  // initializ value: boolean(true, false) , number(1, 2,3 4), string("hoang"), undefine, null, [1, 2,3 ,4], {title: "Frontend developer"}
  const [on, setOn] = useState(false);
  // setOn(true);
  // console.log(on);
  // re-render
  const handleToggle = () => {
    // setOn(callback) -> setOn(prevstate => !prevState)
    setOn((on) => !on);
  };
  return (
    <>
      <div
        className={`toggle ${on ? "active" : ""}`}
        onClick={() => handleToggle()}
      >
        <div className={`spiner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </>
  );
}

export default Toggle;
