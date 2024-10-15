import React, { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import gsap from "gsap";
import logo from "../../assets/Aman-03.png";
import { ScrollTrigger } from "gsap/all";
import {
  FaGlobe,
  FaDollarSign,
  FaShoppingBag,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

// Set the root element for the modal
Modal.setAppElement("#root");

function Navbar({ className }) {
  const [after, setAfter] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const dropdownRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".fix-header", { background: "transparent" });

    // Show the header when scrolling past 100px
    ScrollTrigger.create({
      trigger: ".fix-header",
      start: "top+=10 top",
      onEnter: () => {
        gsap.to(".fix-header", {
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power1.out",
          // borderBottom: "2px solid black",
        });
        setAfter(true);
      },
      onLeaveBack: () => {
        gsap.to(".fix-header", {
          backgroundColor: "transparent",
          boxShadow: "none",
          duration: 0.3,
          ease: "power1.out",
          // borderBottom: "none",`
        });
        setAfter(false);
      },
    });

    let lastScrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only apply the functionality after scrolling past 100vh
      if (currentScrollY > viewportHeight) {
        if (currentScrollY > lastScrollY) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollDirection === "down") {
      gsap.to(".fix-header", {
        top: "-120px",
        duration: 0.3,
        ease: "power1.out",
      });
    } else if (scrollDirection === "up") {
      gsap.to(".fix-header", {
        top: "0",
        duration: 0.3,
        ease: "power1.out",
      });
    }
  }, [scrollDirection]);

  useEffect(() => {
    if (isDropdownOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" }
      );
    } else if (dropdownRef.current) {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power1.out",
        onComplete: () => {
          setIsDropdownOpen(false);
        },
      });
    }
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power1.out",
        onComplete: () => {
          setIsDropdownOpen(false);
        },
      });
    } else {
      setIsDropdownOpen(true);
    }
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    toggleDropdown();
  };

  const openCurrencyModal = () => {
    setIsCurrencyModalOpen(true);
  };

  const closeCurrencyModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power1.out",
      onComplete: () => {
        setIsCurrencyModalOpen(false);
      },
    });
  };

  useEffect(() => {
    if (isCurrencyModalOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power1.out" }
      );
    }
  }, [isCurrencyModalOpen]);

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    closeCurrencyModal();
  };

  return (
    <div
      className={`${className} fix-header flex justify-between items-center px-5 md:px-16 lg:px-20 py-4 fixed top-0 left-0 z-50 w-full transition-all duration-500`}
    >
      {/* Left Section: Navigation */}
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-8 items-center text-[#2B7A3D] uppercase font-semibold">
          <li className="hover:text-[#1F5530] pb-1 transition duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#1F5530] pb-1 transition duration-300">
            <a href="#shop">Shop</a>
          </li>
          <li className="hover:text-[#1F5530] pb-1 transition duration-300">
            <a href="#news">News</a>
          </li>
          <li className="hover:text-[#1F5530] pb-1 transition duration-300">
            <a href="#page">Page</a>
          </li>
        </ul>
      </div>

      {/* Middle Section: Logo */}
      <div className="flex justify-center absolute top-[26px] left-1/2 transform -translate-x-1/2">
        <img
          src={logo}
          alt="Logo"
          className={`${
            after ? "md:w-[120px]" : "md:w-[150px]"
          } w-16 h-auto transition-all ease-in-out duration-500`}
        />
      </div>

      {/* Right Section: Icons, Dropdown, and Signup */}
      <div className="flex items-center gap-6">
        {/* Language Dropdown */}
        <div
          className="flex items-center gap-2 text-[#2B7A3D] text-xl cursor-pointer relative"
          onClick={toggleDropdown}
        >
          <FaGlobe className="hover:text-[#1F5530] transition duration-300" />
          <span className="hover:text-[#1F5530] transition duration-300">
            {language}
          </span>
          {isDropdownOpen && (
            <ul
              ref={dropdownRef}
              className="absolute top-full left-0 mt-2 w-40 bg-[#f9f9f9] shadow-lg rounded-lg py-2 z-40 border border-[#d3d3d3]"
            >
              <li
                className={`cursor-pointer px-4 py-2 ${
                  language === "English" ? "bg-[#e0e0e0] font-semibold" : ""
                } hover:bg-[#8CC63E] hover:text-white transition duration-300`}
                onClick={() => selectLanguage("English")}
              >
                English
              </li>
              <li
                className={`cursor-pointer px-4 py-2 ${
                  language === "Spanish" ? "bg-[#e0e0e0] font-semibold" : ""
                } hover:bg-[#8CC63E] hover:text-white transition duration-300`}
                onClick={() => selectLanguage("Spanish")}
              >
                Spanish
              </li>
              <li
                className={`cursor-pointer px-4 py-2 ${
                  language === "French" ? "bg-[#e0e0e0] font-semibold" : ""
                } hover:bg-[#8CC63E] hover:text-white transition duration-300`}
                onClick={() => selectLanguage("French")}
              >
                French
              </li>
            </ul>
          )}
        </div>
        {/* Currency Icon and Selected Currency */}
        <div
          className="flex items-center gap-1 text-[#2B7A3D] text-xl cursor-pointer"
          onClick={openCurrencyModal}
        >
          <FaDollarSign className="hover:text-[#1F5530] transition duration-300" />
          <span className="hover:text-[#1F5530] transition duration-300">
            {selectedCurrency}
          </span>
        </div>
        {/* Signup Button */}
        <button className="bg-[#2B7A3D] text-white rounded-full px-6 py-2 text-lg md:text-xl hover:bg-[#1F5530] transition duration-300">
          Sign Up
        </button>
      </div>

      {/* Currency Modal */}
      <Modal
        isOpen={isCurrencyModalOpen}
        onRequestClose={closeCurrencyModal}
        contentLabel="Currency Modal"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div
          ref={modalRef}
          className="bg-white p-10 rounded-xl w-96 shadow-2xl transform transition-transform duration-300 ease-in-out"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-[#2B7A3D]">
            Select Currency
          </h2>
          <ul className="space-y-4">
            <li
              className="cursor-pointer hover:bg-[#8CC63E] hover:text-white transition duration-300 p-3 rounded-lg text-center border border-[#2B7A3D]"
              onClick={() => selectCurrency("USD")}
            >
              USD - United States Dollar
            </li>
            <li
              className="cursor-pointer hover:bg-[#8CC63E] hover:text-white transition duration-300 p-3 rounded-lg text-center border border-[#2B7A3D]"
              onClick={() => selectCurrency("EUR")}
            >
              EUR - Euro
            </li>
            <li
              className="cursor-pointer hover:bg-[#8CC63E] hover:text-white transition duration-300 p-3 rounded-lg text-center border border-[#2B7A3D]"
              onClick={() => selectCurrency("JPY")}
            >
              JPY - Japanese Yen
            </li>
          </ul>
          <button
            onClick={closeCurrencyModal}
            className="mt-6 w-full bg-[#2B7A3D] text-white rounded-full px-6 py-3 font-semibold text-lg hover:bg-[#1F5530] transition duration-300"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
