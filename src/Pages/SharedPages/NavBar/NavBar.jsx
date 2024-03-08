import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { LuUser2, LuSearch } from "react-icons/lu";

import swift_mart_logo from "../../../assets/Logo/Logo Black Bg.png";

const NavBar = () => {
  const navItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Shop",
      to: "/shop",
    },
    {
      label: "About us",
      to: "/about-us",
    },
    {
      label: "Contact us",
      to: "/contact-us",
    },
    {
      label: "Admin Dashboard",
      to: "/dashboard/admin",
    },
  ];

  return (
    <div className="sticky top-0 w-full z-[1000]">
      <div className="relative z-10 bg-green-700 text-slate-50 dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 h-20">
            <div className="lg:hidden col-span-2 flex lg:justify-start items-center">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <MdMenu className="w-6 h-6"></MdMenu>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    {navItems.map((item, index) => (
                      <Link key={index} to={item.to}>
                        {item?.label}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3 col-span-8 order-1 lg:order-1 flex justify-center lg:justify-start items-center">
              <Link to="/" className="flex justify-start items-center gap-2 text-xl lg:text-3xl font-bold text-slate-800">
                <img src={swift_mart_logo} className="h-8 lg:h-12 w-8 lg:w-12 rounded-full" alt="" />{" "}
                <span className="text-slate-50">ShekShops</span>
              </Link>
            </div>

            <div className="lg:col-span-6 order-2 hidden lg:flex justify-center items-center mx-4">
              <ul className="flex items-center">
                {navItems.map((item, index) => (
                  <li key={index} className="menu-item flex-shrink-0">
                    <div className="h-20 flex-shrink-0 flex items-center">
                      <Link
                        to={item.to}
                        className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-50 dark:text-slate-50 dark:hover:text-slate-800 dark:hover:bg-slate-50 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100  uppercase"
                      >
                        {item.label}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 col-span-2 order-3 flex-1 flex items-center justify-end dark:text-slate-50">
              <button className="hidden lg:flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full dark:text-slate-50 hover:bg-slate-800 dark:hover:text-slate-800 dark:hover:bg-slate-50 focus:outline-none">
                <LuSearch className="w-6 h-5" />
              </button>

              <div className="AvatarDropdown ">
                <Link to="Authentication/Register">
                  <div className="relative">
                    <button
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full dark:text-slate-50 hover:bg-slate-800 dark:hover:text-slate-800 dark:hover:bg-slate-50 focus:outline-none flex items-center justify-center"
                      type="button"
                    >
                      <LuUser2 className="w-6 h-6" />
                    </button>
                  </div>
                </Link>
              </div>
              <div className="relative">
                <button
                  className="
                  w-10 h-10 sm:w-12 sm:h-12 rounded-full dark:text-slate-50 hover:bg-slate-800 dark:hover:text-slate-800 dark:hover:bg-slate-50 focus:outline-none flex items-center justify-center"
                  type="button"
                >
                  <div className="w-3.5 h-3.5 flex items-center justify-center bg-primary-500 absolute top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">
                    <span className="mt-[1px] bg-blue-500 p-1 rounded-full">10</span>
                  </div>
                  <Link to="/cart">
                    <IoCartOutline className="w-6 h-6" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
