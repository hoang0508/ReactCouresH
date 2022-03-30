import React from "react";
import { useParams } from "react-router-dom";
const BlogPageDetails = () => {
  const { slug } = useParams();
  console.log(
    "🚀 ~ file: BlogPageDetails.js ~ line 5 ~ BlogPageDetails ~ slug",
    slug
  );

  return <div>Blog Page Details</div>;
};

export default BlogPageDetails;
