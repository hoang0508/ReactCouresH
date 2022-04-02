import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
  console.log(
    "🚀 ~ file: FetchingData.js ~ line 5 ~ FetchingData ~ data",
    data
  );
  return <div>{data}</div>;
};

export default withLoading(FetchingData);
