import React, { useState } from "react";
import ModalBase from "./components/Modal/ModalBase";
// import Modal from "./components/Modal/Modal";

const App = () => {
  const [openModalBase, setModalBase] = useState(false);
  return (
    <div>
      {/* <Modal open={true} handleClose={() => {}} /> */}
      <button className="p-3 text-white bg-blue-400 rounded-lg">
        Open modal base
      </button>
      <ModalBase visiable={openModalBase} onClose={() => setModalBase(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        possimus hic neque consectetur perspiciatis corporis itaque laboriosam
        laudantium enim nobis! Cumque voluptatem expedita sapiente maiores, sint
        neque adipisci fugit magnam.
      </ModalBase>
    </div>
  );
};

export default App;
