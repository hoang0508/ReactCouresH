import React from "react";
import Accordion from "./components/advanced-react/react-composition/Accordion";

const App = () => {
  return (
    <>
      <div className="p-10 w-full max-w[600px] mx-auto ">
        <Accordion header="Can I change my plan later">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          obcaecati esse assumenda quos vero est natus doloribus, eligendi
          necessitatibus ipsum illum exercitationem ex animi cumque similique ab
          neque at molestiae?
        </Accordion>
        <Accordion header="Can I become Frontend Developer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          obcaecati esse assumenda quos vero est natus doloribus, eligendi
          necessitatibus ipsum illum exercitationem ex animi cumque similique ab
          neque at molestiae?
        </Accordion>
      </div>
    </>
  );
};

export default App;
