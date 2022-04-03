import React from "react";
import Accordion from "./components/advanced-react/react-composition/Accordion";
import Editable from "./components/advanced-react/react-composition/Editable";

const App = () => {
  return (
    <>
      <Accordion header="Can I change my plan later">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        obcaecati esse assumenda quos vero est natus doloribus, eligendi
        necessitatibus ipsum illum exercitationem ex animi cumque similique ab
        neque at molestiae?
      </Accordion>
      <Editable></Editable>
    </>
  );
};

export default App;
