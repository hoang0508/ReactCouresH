import React from "react";

const SidebarMenu = (props) => {
  return (
    <div
      className={`w-[300px] bg-gray-300 shadow-md fixed top-0 left-0 bottom-0 z-10 ${
        props.show ? "" : "-translate-x-full"
      }`}
    ></div>
  );
};

export default SidebarMenu;
