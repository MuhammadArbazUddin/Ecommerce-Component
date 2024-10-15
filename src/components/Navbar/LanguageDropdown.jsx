// LanguageDropdown.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactCountryFlag } from "react-country-flag";
import { FaCaretDown } from "react-icons/fa";

function LanguageDropdown({
  isDropdownOpen,
  setIsDropdownOpen,
  language,
  setLanguage,
}) {
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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

  const selectLanguage = (lang) => {
    setLanguage(lang);
    toggleDropdown();
  };

  return (
    <div
      className="flex items-center gap-2 text-[#2B7A3D] text-xl cursor-pointer relative border rounded border-green-800 px-3 py-1"
      onClick={toggleDropdown}
    >
      <ReactCountryFlag
        countryCode={
          language === "English" ? "US" : language === "Spanish" ? "ES" : "FR"
        }
        svg
        style={{ width: "1.5em", height: "1.5em" }}
        title={language}
      />
      <span className="text-green-800 transition duration-300">{language}</span>
      <FaCaretDown className="ml-1 text-[#2B7A3D] hover:text-[#1F5530] transition duration-300" />
      {isDropdownOpen && (
        <ul
          ref={dropdownRef}
          className="absolute text-base top-full left-0 mt-2 w-40 bg-[#f9f9f9] shadow-lg rounded py-2 z-40 border border-[#d3d3d3]"
        >
          {["English", "Spanish", "French"].map((lang) => (
            <li
              key={lang}
              className="cursor-pointer px-4 py-1 rounded m-2 bg-green-800 border-2 border-green-800 text-white font-semibold hover:bg-transparent hover:border-2 hover:border-green-800 hover:text-green-800 transition duration-300"
              onClick={() => selectLanguage(lang)}
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageDropdown;
