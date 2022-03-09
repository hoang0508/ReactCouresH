import React from "react";
import { useAuth } from "./contexts/auth-context";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  console.log(user);
  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-md">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            src="https://images.unsplash.com/photo-1617823990669-103329fa9a73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="object-cover w-10 h-10 rounded-full"
          />
          <span className="text-sm font-medium">
            Welcome back! <strong>{user.fullname}</strong>
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium">Welcome</span>
      )}
      <button className="p-3 ml-auto text-black bg-gray-400">Sign up</button>
    </div>
  );
};

export default HeaderMain;
