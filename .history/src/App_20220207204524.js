import React, { useState } from "react";
import "./App.scss";
import SidebarMenu from "./components/Ref/SidebarMenu";
// import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
// import Dropdown from "./components/Ref/Dropdown";
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
  const [show, setShow] = useState(false);
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
      {show && <HackerNews />} */}
      {/* <HackerNewsWithHook /> */}
      {/* <Dropdown /> */}
      <button
        onClick={() => setShow(!show)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
      >
        Show menu
      </button>
      <SidebarMenu show={show} />
    </>
  );
}
// Props: Properties
// Render link list

export default App;
