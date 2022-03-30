import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              ipsam dolor molestiae possimus tempora vero cumque nesciunt illum
              dignissimos enim aliquid soluta iste vitae nemo optio recusandae.
              Aut, nisi voluptatem?
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
