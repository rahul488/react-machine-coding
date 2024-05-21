import React, { useState } from "react";
import Modal from "./Modal";

function Mc4() {
    const [modal,setModal] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}
      >
        <button
          style={{
            width: "140px",
            outline: "none",
            border: "1px solid #eee",
            padding: "0.5rem 0.5rem",
            cursor: "pointer",
          }}
          onClick={() => setModal(true)}
        >
          Open Modal
        </button>
      </div>
      <Modal title={"Dummy Modal"} onClose={() => setModal(false)} open={modal}/>
    </div>
  );
}

export default Mc4;
