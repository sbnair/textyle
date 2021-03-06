import { useState, useEffect } from "react";
import ReactModal from "react-modal";

const Modal = ({ children, open, title, onClose, style }) => {
  return (
    <ReactModal
      isOpen={open}
      contentLabel={title}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: "29",
        },

        content: {
          backgroundColor: "rgb(17, 24, 39)",
          borderRadius: "0.25rem",
          borderColor: "rgb(75, 85, 99)",
          color: "rgb(249, 250, 251)",
          top: "50%",
          left: "50%",
          right: "0",
          bottom: "0",
          transform: "translate(-50%, -50%)",
          zIndex: "30",
          padding: "1rem",
          height: 'max-content',
          width: "max-content",
          ...style,
        },
      }}
    >
      <div>
        <h1>
          <strong>{title}</strong>
        </h1>
        <div className="text-xs">{children}</div>
      </div>
    </ReactModal>
  );
};

export default Modal;
