import React, { useState } from "react";
import Count from "./components/advanced-react/performance/Count";

const App = () => {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <input
        className="p-3 border border-gray-200"
        type="text"
        onChange={(e) => setFilter}
      />
      <Count />
    </div>
  );
};

export default App;
