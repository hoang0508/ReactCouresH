import React from "react";
import useHover from "../../hooks/useHover";
import useLinkNewTab from "../../hooks/useLinkNewTab";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero
        animi magnam explicabo nulla doloribus quis fuga repudiandae quo
        deleniti rem, quod necessitatibus veniam saepe fugiat dolorum
        dignissimos? Quaerat, commodi.
        <a
          href="https://google.com"
          className={`underline ${hovered ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
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
