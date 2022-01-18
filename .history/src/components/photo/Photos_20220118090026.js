import React, { useEffect } from "react";

const Photos = () => {
  // useEffect(callback, dependencies)
  // useEffect(function callback() {
  //   // side-effects

  // }, [])
  useEffect(() => {
    // side-effect
    document.title = "Welcome to useEffect";
  }, []);
  return (
    <>
      <div>Photos</div>
    </>
  );
};

export default Photos;
