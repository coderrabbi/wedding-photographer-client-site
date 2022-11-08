import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/wedding-photographer.png";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "About Me", to: "/about" },
    { name: "Blog", to: "/blog" },
  ];
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div className="m-0 p-0">
      <header className="lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between ">
            <div className="flex-shrink-0">
              <NavLink to="/" className="flex">
                <img
                  className="w-auto h-8 lg:h-16"
                  src={logo}
                  alt="wedding photographer"
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
                <NavLink key={index} to={item.to}>
                  <li className="text-base list-none font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                    {item.name}
                  </li>
                </NavLink>
              ))}
            </div>
            <div className="flex items-center">
              <NavLink
                to="/register"
                title=""
                className=" ml-8 inline-flex justify-center text-base font-semibold text-white transition-all duration-200 border border-transparent hover:text-blue-700 focus:text-blue-700"
                role="button"
              >
                {" "}
                Register{" "}
              </NavLink>
              <NavLink
                to="/login"
                className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                LogIn
              </NavLink>
            </div>
          </nav>

          {/* mobile menu */}

          {toggle && (
            <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden absolute right-5 w-[200px]">
              <div className="flow-root">
                <div className="flex flex-col px-6 -my-2 space-y-1 text-center">
                  {navLinks.map((item, index) => (
                    <NavLink key={index} to={item.to}>
                      <li
                        to={item.to}
                        className="text-base list-none font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                      >
                        {item.name}
                      </li>
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="px-6 mt-6 text-center flex flex-col gap-2">
                <NavLink
                  to="/register"
                  title=""
                  className="inline-flex justify-center text-base font-semibold text-black transition-all duration-200 border border-transparent hover:text-blue-700 focus:text-blue-700"
                  role="button"
                >
                  {" "}
                  Register{" "}
                </NavLink>
                <NavLink
                  to="/login"
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
