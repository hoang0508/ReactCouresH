import React, { useEffect, useRef } from "react";

const Blog = () => {
  const contentRef = useRef(null);
  useEffect(() => {
    const links = contentRef.current.querySelectorAll("a");
    links.map((item) => item.setAttribute("target", "_blank"));
  }, []);
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero
        animi magnam explicabo nulla doloribus quis fuga repudiandae quo
        deleniti rem, quod necessitatibus veniam saepe fugiat dolorum
        dignissimos? Quaerat, commodi.
        <a href="https://google.com" className="underline">
          Google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero
        animi magnam explicabo nulla doloribus quis fuga repudiandae quo
        deleniti rem, quod necessitatibus veniam saepe fugiat dolorum
        dignissimos? Quaerat, commodi.
        <a href="https://google.com" className="underline">
          Google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero
        animi magnam explicabo nulla doloribus quis fuga repudiandae quo
        deleniti rem, quod necessitatibus veniam saepe fugiat dolorum
        dignissimos? Quaerat, commodi.
        <a href="https://google.com" className="underline">
          Google.com
        </a>
        ?
      </p>
    </div>
  );
};

export default Blog;
