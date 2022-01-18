import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  const [info, setInfo] = useState({
    firstName: "Nguyen",
    lastName: "Hoang",
  });
  // useFect về count
  // useEffect(() => {
  //   // console.log(`count: ${count}`);
  //   // setCount(count + 1);
  // }, [count]);
  useEffect(() => {
    console.log("from input");
  }, [info.lastName]);
  return (
    <>
      {/* <div>Increment {count}</div> */}
      <div className="p-5 flex gap-x-4 items-center">
        <input
          type="text"
          name="lastName"
          value={info.lastName}
          onChange={(e) =>
            setInfo({
              ...info,
              lastName: e.target.value,
            })
          }
        />
        <span className="text-lg font-bold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="inline-block p-3 bg-green-400 text-white"
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default Counter;
