import React, { useState, useCallback, useMemo } from "react";
import Count from "./components/advanced-react/performance/Count";

const App = () => {
  const [filter, setFilter] = useState("");
  // useCallback(() => callback , [dependencies]);
  const calculate = useCallback(() => setFilter(""), [setFilter]);
  // useMemo(() => value, [dependencies])
  const data = useMemo(() => ({ success: false }), []);
  return (
    <div>
      <input
        className="p-3 border border-gray-200"
        type="text"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count calculate={calculate} data={data} />
    </div>
  );
};

export default App;
