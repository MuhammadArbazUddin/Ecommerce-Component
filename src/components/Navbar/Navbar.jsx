import React, { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import gsap from "gsap";
import logo from "../../assets/Aman-03.png";
import { ScrollTrigger } from "gsap/all";
import { FaDollarSign, FaTimes } from "react-icons/fa";
import { ReactCountryFlag } from "react-country-flag";
import { FaCaretDown } from "react-icons/fa";
import userIcon from "../../assets/userIcon.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
// Set the root element for the modal
Modal.setAppElement("#root");

function Navbar({ className }) {
  const [after, setAfter] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const modalRef = useRef(null);
  const userDropdownRef = useRef(null);

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
        });
        setAfter(true);
      },
      onLeaveBack: () => {
        gsap.to(".fix-header", {
          backgroundColor: "transparent",
          boxShadow: "none",
          duration: 0.3,
          ease: "power1.out",
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

  useEffect(() => {
    if (isUserDropdownOpen) {
      gsap.fromTo(
        userDropdownRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" }
      );
    } else if (userDropdownRef.current) {
      gsap.to(userDropdownRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power1.out",
        onComplete: () => {
          setIsUserDropdownOpen(false);
        },
      });
    }
  }, [isUserDropdownOpen]);

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

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prev) => !prev);
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

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    closeCurrencyModal();
  };

  return (
    <div
      className={`${className} fix-header flex justify-between items-center px-5 md:px-16 lg:px-20 py-4 fixed top-0 left-0 z-50 w-full transition-all duration-500`}
    >
      {/* Left Section: Navigation */}
      <div
        className={`${
          after ? "" : "mt-[40px] border-b border-[#2B7A3D] pb-4"
        } w-[45%] transition-all ease-in-out duration-500 hidden md:flex justify-start gap-8 items-center`}
      >
        <ul className="hidden md:flex gap-8 items-center text-[#2B7A3D] uppercase font-semibold">
          <li className="hover:text-[#1F5530] font-extrabold hover:scale-110 pb-1 transition duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#1F5530] font-extrabold hover:scale-110 pb-1 transition duration-300">
            <a href="#shop">Shop</a>
          </li>
          <li className="hover:text-[#1F5530] font-extrabold hover:scale-110 pb-1 transition duration-300">
            <a href="#news">News</a>
          </li>
          <li className="hover:text-[#1F5530] font-extrabold hover:scale-110 pb-1 transition duration-300">
            <a href="#page">Page</a>
          </li>
        </ul>
      </div>
      {/* Middle Section: Logo */}
      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2">
        <img
          src={logo}
          alt="Logo"
          className={`${
            after ? "md:w-[150px] mt-[60px]" : "md:w-[120px] mt-[80px]"
          } w-16 h-auto transition-all ease-in-out duration-500`}
        />
      </div>

      {/* Right Section: Icons, Dropdown, and User Icon */}
      <div
        className={`${
          after ? "" : "mt-[26px] border-b border-[#2B7A3D] pb-4"
        } w-[45%] transition-all ease-in-out duration-500 flex flex-row items-center justify-end gap-x-4`}
      >
        {/* Language Dropdown */}
        <div
          className="flex items-center gap-2 text-[#2B7A3D] text-xl cursor-pointer relative border rounded border-green-800 px-3 py-1"
          onClick={toggleDropdown}
        >
          <ReactCountryFlag
            countryCode={
              language === "English"
                ? "US"
                : language === "Spanish"
                ? "ES"
                : "FR"
            }
            svg
            style={{
              width: "1.5em",
              height: "1.5em",
            }}
            title={language}
          />
          <span className="text-green-800 transition duration-300">
            {language}
          </span>
          <FaCaretDown className="ml-1 text-[#2B7A3D] hover:text-[#1F5530] transition duration-300" />
          {isDropdownOpen && (
            <ul
              ref={dropdownRef}
              className="absolute text-base top-full left-0 mt-2 w-40 bg-[#f9f9f9]  shadow-lg rounded py-2 z-40 border border-[#d3d3d3]"
            >
              <li
                className="cursor-pointer px-4 py-1 rounded m-2 bg-green-800 border-2 border-green-800 text-white font-semibold hover:bg-transparent hover:border-2 hover:border-green-800 hover:text-green-800 transition duration-300"
                onClick={() => selectLanguage("English")}
              >
                English
              </li>

              <li
                className="cursor-pointer px-4 py-1 rounded m-2 bg-green-800 border-2 border-green-800 text-white font-semibold hover:bg-transparent hover:border-2 hover:border-green-800 hover:text-green-800 transition duration-300"
                onClick={() => selectLanguage("Spanish")}
              >
                Spanish
              </li>

              <li
                className="cursor-pointer px-4 py-1 rounded m-2 bg-green-800 border-2 border-green-800 text-white font-semibold hover:bg-transparent hover:border-2 hover:border-green-800 hover:text-green-800 transition duration-300"
                onClick={() => selectLanguage("French")}
              >
                French
              </li>
            </ul>
          )}
        </div>
        {/* Currency Icon and Selected Currency */}
        <div
          className="flex items-center gap-1 text-[#2B7A3D] text-xl cursor-pointer relative border rounded border-green-800 px-2 py-1"
          onClick={openCurrencyModal}
        >
          <FaDollarSign className="text-[#2B7A3D] hover:text-[#1F5530] transition duration-300" />
          <span className="text-green-800 transition duration-300 mr-1">
            {selectedCurrency}
          </span>
        </div>
        {/* User Icon */}
        <div
          className="flex items-center border border-green-800 rounded-full p-1 gap-1 text-green-800 text-xl cursor-pointer relative"
          onClick={toggleUserDropdown}
        >
          <FaCircleUser size={35} />
          <RxHamburgerMenu size={30} />
          {isUserDropdownOpen && (
            <ul
              ref={userDropdownRef}
              className="absolute top-full text-sm right-0 mt-2 w-48 bg-[#f9f9f9] shadow-lg rounded py-2 z-40 border border-none"
            >
              <li
                className="cursor-pointer font-bold text-white  px-4 py-2 border-2 bg-green-8000 bg-green-800 hover:bg-transparent hover:border-2 border-green-800  hover:text-green-800 m-2 rounded transition duration-300"
                onClick={() => console.log("Login clicked")}
              >
                Login
              </li>
              <li
                className="cursor-pointer font-bold text-white  px-4 py-2 border-2 bg-green-8000 bg-green-800 hover:bg-transparent hover:border-2 border-green-800  hover:text-green-800 m-2 rounded transition duration-300"
                onClick={() => console.log("Register as a Seller clicked")}
              >
                Register as a User
              </li>
              <li
                className="cursor-pointer font-bold text-white  px-4 py-2 border-2 bg-green-8000 bg-green-800 hover:bg-transparent hover:border-2 border-green-800  hover:text-green-800 m-2 rounded transition duration-300"
                onClick={() => console.log("Register as a Donor clicked")}
              >
                Register as a Donor
              </li>
            </ul>
          )}
        </div>
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
            <li
              className="cursor-pointer font-bold bg-green-800 text-white hover:bg-transparent hover:text-green-800  transition duration-300 p-3 rounded text-center border-2  font-bold border-[#2B7A3D]"
              onClick={() => selectCurrency("USD")}
            >
              USD - United States Dollar
            </li>
            <li
              className="cursor-pointer font-bold bg-green-800 text-white hover:bg-transparent hover:text-green-800  transition duration-300 p-3 rounded text-center border-2  font-bold border-[#2B7A3D]"
              onClick={() => selectCurrency("EUR")}
            >
              EUR - Euro
            </li>
            <li
              className="cursor-pointer font-bold bg-green-800 text-white hover:bg-transparent hover:text-green-800  transition duration-300 p-3 rounded text-center border-2  font-bold border-[#2B7A3D]"
              onClick={() => selectCurrency("JPY")}
            >
              JPY - Japanese Yen
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
