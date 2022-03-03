import React from "react";
import "./App.scss";

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
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
      >
        Show menu
      </button>
      <SidebarMenu show={show} ref={nodeRef} /> */}
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
        <div className="w-full max-w-[350px] mx-auto bg-white p-10 rounded-lg"></div>
      </div>
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
