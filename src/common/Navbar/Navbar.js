import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/wedding-photographer.png";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import avater from "../../assets/avater.png";
import { AuthContext } from "../../context/AuthProvider";
const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "About Me", to: "/about" },
    { name: "Blog", to: "/blog" },
  ];
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut();
  };
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
                className="inline-flex text-white p-2 transition-all duration-200
            rounded-md lg:hidden   cursor-pointer text-[45px]"
              />
            ) : (
              <VscChromeClose
                onClick={toggleMenu}
                className="inline-flex text-white p-2 transition-all duration-200
                rounded-md lg:hidden   cursor-pointer text-[45px]"
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
              {user ? (
                <>
                  <NavLink to={"/reviews"}>
                    <li className="text-base list-none font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                      My Reviews
                    </li>
                  </NavLink>
                  <NavLink to={"/addservices"}>
                    <li className="text-base list-none font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                      Add Services
                    </li>
                  </NavLink>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="hidden lg:flex lg:items-center">
              {user?.uid ? (
                <>
                  <div className="flex items-center gap-2">
                    <img
                      className="rounded-full w-10"
                      src={user.photoURL ? user.photoURL : avater}
                      alt=""
                    />
                    <h4 className="text-white">{user.displayName}</h4>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/register"
                    title=""
                    className=" ml-8 inline-flex justify-center text-base font-semibold text-white transition-all duration-200 border border-transparent hover:text-blue-700 focus:text-blue-700"
                    role="button"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
                    role="button"
                  >
                    LogIn
                  </NavLink>
                </>
              )}
            </div>
          </nav>

          {/* mobile menu */}

          {toggle && (
            <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden absolute right-5 w-[200px] z-[5]">
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
                {user?.uid ? (
                  <>
                    <div className="flex flex-col  items-center ">
                      <img
                        className="rounded-full w-8"
                        src={user.photoURL ? user.photoURL : avater}
                        alt=""
                      />
                      <h4 className="text-black">{user.displayName}</h4>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={handleSignOut}
                        className="items-center justify-center  px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md flex hover:bg-blue-700 focus:bg-blue-700 "
                      >
                        Log out
                      </button>
                    </div>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
