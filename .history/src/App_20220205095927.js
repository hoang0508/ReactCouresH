import React, { useState } from "react";
import "./App.scss";
import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
// import HackerNews from "./components/news/HackerNews";

// JSX: Javascript XML
// ES6
// Babel
/**
 * element = <div id="root">Hello world</div>
 * elementType: 'div', 'p', 'span'
 * props: className , id , src , alt
 *
 */
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };
function App() {
  // const [show, setShow] = useState(false);
  return (
    <>
      {/* <ThemeProvider theme={theme}></ThemeProvider> */}
      {/* <h1>Hello</h1> */}
      {/* <Button>Primary</Button>
      <Button secondary>Secodary</Button> */}
      {/* <GlobalStyle /> */}
      {/* <Card2 secondary={true}></Card2> */}
      {/* <Card2 /> */}
      {/* <CardList>
        <CardTailwind primary={true} fontSize="text-[20px]" />
      </CardList> */}
      {/* <Photos /> */}
      {/* <Photos2 /> */}
      {/* <Counter /> */}
      {/* <div className="p-5">
        <Dropdown />
      </div> */}
      {/* <Blog /> */}
      {/* <button onClick={() => setShow(!show)}>Toggle Button</button>
      {show && <HackerNews />} */}
      <HackerNewsWithHook />
    </>
  );
}
// Props: Properties
// Render link list

export default App;
