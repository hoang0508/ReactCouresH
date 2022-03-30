import React from "react";
import { useSearchParams } from "react-router-dom";
const BlogPage = () => {
  console.log(useSearchParams());
  return <div>Blog Page</div>;
};

export default BlogPage;
