import React from "react";
import ModalBase from "./components/Modal/ModalBase";
// import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <div>
      {/* <Modal open={true} handleClose={() => {}} /> */}
      <ModalBase>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        possimus hic neque consectetur perspiciatis corporis itaque laboriosam
        laudantium enim nobis! Cumque voluptatem expedita sapiente maiores, sint
        neque adipisci fugit magnam.
      </ModalBase>
    </div>
  );
};

export default App;