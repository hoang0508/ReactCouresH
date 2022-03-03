import React, { useState } from "react";
import "./App.scss";
import Game from "./components/tictactoe/Game";
import Tooltip from "./components/Tooltip/Tooltip";
import { ErrorBoundary } from "react-error-boundary";
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
// import Modal from "../src/components/Modal/Modal";
// import DropdownPortal from "./components/DropdownPortal/DropdownPortal";
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
  // const { show, setShow, nodeRef } = useClickOutSide();
  // Modal
  // const [open, setOpen] = useState(false);
  // const hanldeClickShow = (e) => {
  //   e.preventDefault();
  //   setOpen(true);
  // };
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
      {/* <button
        onClick={() => setShow(!show)}
        className="inline-block p-3 m-3 text-white bg-green-400 rounded-lg"
      >
        Show menu
      </button>
      <SidebarMenu show={show} ref={nodeRef} /> */}
      {/* <div>
        <Modal open={open} handleClose={() => setOpen(false)}></Modal>
      </div>
      <button
        onClick={(e) => hanldeClickShow(e)}
        className="p-4 text-white bg-blue-500 rounded-lg cursor-pointer"
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, velit
        explicabo quia deserunt similique, aliquid tempore dicta quaerat natus
        fuga eius dignissimos nulla ea id odit esse facere numquam voluptate!
      </div>
      <div className="p-5 overflow-hidden">
        <DropdownPortal></DropdownPortal>
      </div> */}
      {/* <div className="inline-block p-16 m-20">
        <Tooltip text="hover me">Lorem ipsum dolor sit amet</Tooltip>
      </div> */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Game />
      </ErrorBoundary>
    </>
  );
}
// Props: Properties
// Render link list

export default App;
