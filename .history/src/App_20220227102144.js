import React, { useState } from "react";
import "./App.scss";
import Modal from "../src/components/Modal/Modal";
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
  const [open, setOpen] = useState(false);
  const hanldeClickShow = (e) => {
    e.preventDefault();
    setOpen(true);
  };
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
      <div>
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
    </>
  );
}
// Props: Properties
// Render link list

export default App;
