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
      <ModalAdvance
        visible={openModal}
        onClose={() => setOpenModal(false)}
        heading="Welcome back"
        bodyClassName="w-full max-w-[400px]"
      >
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
      </ModalAdvance>
    </div>
  );
};

export default App;
