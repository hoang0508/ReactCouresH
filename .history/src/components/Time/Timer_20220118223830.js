import React, { useEffect, useState } from "react";

const Timer = () => {
  const [message, setMessage] = useState("Hoang");
  useEffect(() => {
    setInterval(() => {
      console.log(message);
    }, 2000);
  });
  return (
    <>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </>
  );
};

export default Timer;
