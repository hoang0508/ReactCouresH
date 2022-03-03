import React from "react";
import Portal from "./components/PortalAdvance/Portal";
// import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <div>
      {/* <Modal open={true} handleClose={() => {}} /> */}
      <Portal visible={false} />
    </div>
  );
};

export default App;
