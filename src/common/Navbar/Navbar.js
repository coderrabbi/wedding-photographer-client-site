import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Blog", to: "/blog" },
  ];
  const [toggle, setToggle] = useState(true);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <header className="pb-6 bg-white lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <NavLink title="" className="flex">
                <img
                  className="w-auto h-8 lg:h-10"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                  alt=""
                />
              </NavLink>
            </div>

            {!toggle ? (
              <VscMenu
                onClick={toggleMenu}
                className="inline-flex p-2 text-black transition-all duration-200
            rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100 cursor-pointer text-[45px]"
              />
            ) : (
              <VscChromeClose
                onClick={toggleMenu}
                className="inline-flex p-2 text-black transition-all duration-200
            rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100 cursor-pointer text-[45px]"
              />
            )}

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              {navLinks.map((item, index) => (
                <NavLink key={index}>
                  <li className="text-base list-none font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                    {item.name}
                  </li>
                </NavLink>
              ))}
            </div>
            <NavLink
              to="/login"
              className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              LogIn
            </NavLink>
          </nav>

          {toggle && (
            <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
              <div className="flow-root">
                <div className="flex flex-col px-6 -my-2 space-y-1">
                  {navLinks.map((item, index) => (
                    <NavLink key={index}>
                      <li
                        className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        to={item.to}
                      ></li>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="px-6 mt-6">
                <NavLink
                  href="#"
                  title=""
                  className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
                  role="button"
                >
                  {" "}
                  LogIn{" "}
                </NavLink>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
