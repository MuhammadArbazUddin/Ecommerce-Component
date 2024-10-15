// CurrencyModal.js
import React, { useEffect, useRef } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import gsap from "gsap";

function CurrencyModal({
  isCurrencyModalOpen,
  closeCurrencyModal,
  setSelectedCurrency,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isCurrencyModalOpen) {
      const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          closeCurrencyModal();
        }
      };
      window.addEventListener("mousedown", handleOutsideClick);
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power1.out" }
      );
      return () => {
        window.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [isCurrencyModalOpen]);

  return (
    <Modal
      isOpen={isCurrencyModalOpen}
      onRequestClose={closeCurrencyModal}
      contentLabel="Currency Modal"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <div
        ref={modalRef}
        className="bg-white p-10 rounded-xl w-96 shadow-2xl transform transition-transform duration-300 ease-in-out relative"
      >
        <button
          onClick={closeCurrencyModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-300"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-[#2B7A3D]">
          Select Currency
        </h2>
        <ul className="space-y-4">
          {[
            "USD - United States Dollar",
            "EUR - Euro",
            "JPY - Japanese Yen",
          ].map((currency) => (
            <li
              key={currency}
              className="cursor-pointer font-bold bg-green-800 text-white hover:bg-transparent hover:text-green-800 transition duration-300 p-3 rounded text-center border-2 font-bold border-[#2B7A3D]"
              onClick={() => setSelectedCurrency(currency.split(" ")[0])}
            >
              {currency}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}

export default CurrencyModal;
