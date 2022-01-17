import "./App.scss";
// import Button from "./components/Button/Button";
// import Card from "./components/Card/Card";
// import Card2 from "./components/Card/Card2";
import CardList from "./components/Card/CardList";
import CardTailwind from "./components/Card/CardTailwind";
// import { GlobalStyle } from "./GlobalStyles";
// import Counter from "./components/Counter/Counter";
// import DoubleCounter from "./components/Counter/DoubleCounter";
// import Game from "./components/tictactoe/Game";
// import Toggle from "./components/Toggle/Toggle";
// import YoutubeList from "./components/youtube/youtubeList";

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
  return (
    <>
      {/* <ThemeProvider theme={theme}></ThemeProvider> */}
      {/* <h1>Hello</h1> */}
      {/* <Button>Primary</Button>
      <Button secondary>Secodary</Button> */}
      {/* <GlobalStyle /> */}
      <CardList>
        {/* <Card2 secondary={true}></Card2> */}
        {/* <Card2 /> */}
        <CardTailwind primary />
      </CardList>
      {/* <h1 className="text-center ml-4 mt-5">Hoang Frontend</h1> */}
    </>
  );
}
// Props: Properties
// Render link list

export default App;
