import React from "react";

const HeaderMain = () => {
  return (
    <div className="p-4 shadow-md bg-white flex items-center justify-center">
      <div className="flex items-cemter gap-x-3">
        <img
          src="https://images.unsplash.com/photo-1617823990669-103329fa9a73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-sm font-medium">
          Welcome back! <strong>Huy Hoàng</strong>
        </span>
      </div>
    </div>
  );
};

export default HeaderMain;
