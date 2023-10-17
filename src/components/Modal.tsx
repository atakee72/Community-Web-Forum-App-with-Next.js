"use client";

import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className=" inset-0 flex items-center justify-center z-40">
      {isOpen && <div className="fixed inset-0 bg-black opacity-50"></div>}

      <button
        onClick={openModal}
        className="bg-[#ECCC6E] text-[#814256] px-4 py-2 rounded focus:outline-none"
      >
        Kommentieren
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white w-1/2 p-4 rounded shadow-lg">
            <h2 className="text-2xl mb-4">Modal Title</h2>
            <p>This is the modal content.</p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
