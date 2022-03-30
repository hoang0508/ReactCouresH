import React from "react";
import { useSearchParams } from "react-router-dom";
const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(
    "🚀 ~ file: BlogPage.js ~ line 5 ~ BlogPage ~ searchParams",
    searchParams.get("search")
  );
  return <div>Blog Page</div>;
};

export default BlogPage;
