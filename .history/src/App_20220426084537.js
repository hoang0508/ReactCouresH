import React, { useState } from "react";
import Count from "./components/advanced-react/performance/Count";

const App = () => {
  const [filter, setFilter] = useState("");
  const calculate = () => {
    setFilter("");
  };
  return (
    <div>
      <input
        className="p-3 border border-gray-200"
        type="text"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count calculate={calculate} />
    </div>
  );
};

export default App;
