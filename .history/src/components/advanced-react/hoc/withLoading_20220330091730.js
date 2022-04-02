import { useState } from "react";
function withLoading(Component) {
  return (props) => {
    const [data, setData] = useState([]);
    if (!data || data.length === 0) return null;
    return <Component {...props}></Component>;
  };
}
export default withLoading;
