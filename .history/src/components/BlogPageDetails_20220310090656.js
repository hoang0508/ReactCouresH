import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogPageDetails = () => {
  const { slug } = useParams();
  console.log(useNavigate());
  console.log(
    "🚀 ~ file: BlogPageDetails.js ~ line 5 ~ BlogPageDetails ~ slug",
    slug
  );

  return <div>Blog Page Details</div>;
};

export default BlogPageDetails;
