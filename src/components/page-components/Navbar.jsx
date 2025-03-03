import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../../assets/fonts/dmsans.css";
import navData from "../../data/NavData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b bg-black shadow-md transition-all duration-100">
      <div className="container mx-auto flex items-center justify-between md:p-3">
        <NavLink to="/" className="text-xl font-bold">
          <img
            src="https://res.cloudinary.com/dzpkbej9y/image/upload/v1739981304/Dhruva_iulxia.png"
            alt="Dhurva Logo"
            className="w-20 md:w-[100px]"
          />
        </NavLink>

        <ul className="hidden md:flex flex-grow justify-center space-x-8">
          {navData.map((item, index) => (
            <li key={index} className="relative group">
              {item.name === "Cultural Fest" ? (
                <>
                  <button
                    className="dm-sans hover:scale-105 md:text-sm lg:text-lg border-b-2 border-transparent transition-all duration-300 hover:border-orange-400 text-white flex items-center"
                    onClick={toggleDropdown}
                  >
                    {item.name} <ChevronDown className="ml-2" />
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-40 bg-gray-800 text-white shadow-lg rounded-md space-y-2 p-2 hidden group-hover:block">
                      <li>
                        <NavLink
                          to="/culturalFest/onstage"
                          className="block p-2 hover:text-orange-400"
                        >
                          Onstage
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/culturalFest/offstage"
                          className="block p-2 hover:text-orange-400"
                        >
                          Offstage
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.route}
                  className="dm-sans hover:scale-105 md:text-sm lg:text-lg border-b-2 border-transparent transition-all duration-300 hover:border-orange-400 text-white"
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            <Menu className="w-12 h-12 text-white" />
          </Button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-75 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-white text-xl font-semibold">Menu</h2>
          <Button variant="ghost" onClick={toggleMenu}>
            <X className="w-7 h-7 text-white" />
          </Button>
        </div>

        <ul className="flex flex-col items-center space-y-6 mt-10">
          {navData.map((item, index) => (
            <li key={index} className="w-full text-center">
              {item.name === "Cultural Fest" ? (
                <>
                  <button
                    className="text-white text-lg hover:text-orange-400 transition-all duration-300 flex items-center justify-center w-full"
                    onClick={toggleDropdown}
                  >
                    {item.name} <ChevronDown className="ml-2" />
                  </button>
                  {isDropdownOpen && (
                    <ul className="bg-sky-300 text-white mt-2 space-y-2 p-2">
                      <li>
                        <NavLink
                          to="/culturalFest/onstage"
                          className="block p-2 dm-sans hover:text-orange-400"
                        >
                          Onstage
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/culturalFest/offstage"
                          className="block p-2 dm-sans hover:text-orange-400"
                        >
                          Offstage
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.route}
                  className="text-white text-lg hover:text-orange-400 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
