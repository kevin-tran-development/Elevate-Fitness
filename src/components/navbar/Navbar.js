import React, { useState, useEffect } from "react";
import { MobileNavList } from "./MobileNavList";
import { NavList } from "./NavList";
import "./Navbar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [window.scrollY]);

  return (
    <>
      <nav
        className={`flex items-center justify-between px-12 h-36 transition ease duration-[0.3s] top-0 fixed w-full z-[50] ${
          navbar ? "bg-[#000]" : "bg-transparent"
        }`}
      >
        {/* Desktop Menu */}
        <NavList onHandleClick={handleClick} />
        {/* Mobile Menu */}
        <MobileNavList
          stateClick={click}
          onHandleClick={handleClick}
          onCloseMobileMenu={closeMobileMenu}
        />
      </nav>
    </>
  );
};
