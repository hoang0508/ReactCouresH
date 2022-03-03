import React, { useState } from "react";
import ModalAdvance from "./components/Modal/ModalAdvance";
import ModalBase from "./components/Modal/ModalBase";
// import Modal from "./components/Modal/Modal";

const App = () => {
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {/* <Modal open={true} handleClose={() => {}} /> */}
      <button
        className="p-3 mr-5 text-white bg-blue-400 rounded-lg"
        onClick={() => setOpenModalBase(true)}
      >
        Open modal base
      </button>
      <button
        className="p-3 text-white bg-blue-400 rounded-lg"
        onClick={() => setOpenModal(true)}
      >
        Open modal
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="p-10 bg-white rounded-lg max-w-[320px] ju">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          possimus hic neque consectetur perspiciatis corporis itaque laboriosam
          laudantium enim nobis! Cumque voluptatem expedita sapiente maiores,
          sint neque adipisci fugit magnam.
        </div>
      </ModalBase>
      <ModalAdvance visible={openModal} onClose={() => setOpenModal(false)}>
        <div className="relative z-10 p-10 bg-white rounded-lg modal-content w-full max-w-[482px]">
          <span className="absolute top-0 right-0 cursor-pointer w-[38px] h-[38px] flex items-center justify-center bg-white rounded-full translate-x-2/4 -translate-y-2/4">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
                fill="#84878B"
              />
            </svg>
          </span>
          <h2 className="mb-5 text-4xl font-medium text-center text-black">
            Welcome Back!
          </h2>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="email" className="text-sm cursor-pointer">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-[#E7ECF3] rounded-lg p-4 leading-normal"
            />
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="password" className="text-sm cursor-pointer">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full bg-[#E7ECF3] rounded-lg p-4 leading-normal"
            />
          </div>
          <button className="w-full p-4 text-base font-semibold cursor-pointer text-white bg-[#316BFF] rounded-lg">
            Sign in
          </button>
        </div>
      </ModalAdvance>
    </div>
  );
};

export default App;
