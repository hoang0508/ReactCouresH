import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogPageDetails = () => {
  const { slug } = useParams();
  // console.log(useNavigate());
  const navigate = useNavigate();
  console.log(
    "🚀 ~ file: BlogPageDetails.js ~ line 5 ~ BlogPageDetails ~ slug",
    slug
  );

  return (
    <>
      <div>Blog Page Details</div>
      <button
        onClick={() => navigate("/blog")}
        className="p-3 rounded-sm text-white bg-blue-500"
      >
        Navigate Blog
      </button>
    </>
  );
};

export default BlogPageDetails;
