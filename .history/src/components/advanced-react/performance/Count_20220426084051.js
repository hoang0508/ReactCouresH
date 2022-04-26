import React, { useRef, useState } from "react";
// React.memo(Component)
// => Component sẽ bị re-render khi state của nó thay đổi trong trường hợp này là count;
// => Component sẽ bị re-render khi nó có props truyền vào thay đổi
const Count = React.memo(() => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  return (
    <div>
      <div>{count}</div>
      <div>Render: {renderRef.current++}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
});

export default Count;
