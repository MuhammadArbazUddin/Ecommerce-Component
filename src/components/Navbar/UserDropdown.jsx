// UserDropdown.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";

function UserDropdown({ isUserDropdownOpen, setIsUserDropdownOpen }) {
  const userDropdownRef = useRef(null);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prev) => !prev);
  };

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

  return (
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
          {["Login", "Register as a User", "Register as a Donor"].map(
            (option) => (
              <li
                key={option}
                className="cursor-pointer font-bold text-white px-4 py-2 border-2 bg-green-800 hover:bg-transparent hover:border-2 hover:border-green-800 hover:text-green-800 m-2 rounded transition duration-300"
                onClick={() => console.log(`${option} clicked`)}
              >
                {option}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}

export default UserDropdown;
