import { Link } from "react-router-dom";

import { FaFacebook, FaTwitterSquare, FaTelegram, FaYoutubeSquare } from "react-icons/fa";

import logo from "../../../assets/Logo/Logo Black Bg.png";

const Footer = () => {
  return (
    <div className="relative py-20 lg:py-28 mx-5 lg:mx-10 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            {/* Logo */}
            <Link
              to="/"
              className="flex justify-start items-center gap-2 text-xl lg:text-2xl font-bold text-slate-800 dark:text-white font-primary"
            >
              <img src={logo} className="rounded-full w-10 h-10" alt="SwiftMart Logo" />
              <span>SwiftMart</span>
            </Link>
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <div
              className="nc-SocialsList1 flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start"
              data-nc-id="SocialsList1"
            >
              <Link
                to=""
                target="_blank"
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
              >
                <div className="flex-shrink-0 w-5">
                  <FaFacebook className="w-5 h-5 text-blue-500"></FaFacebook>
                </div>
                <span className="hidden lg:block text-sm">Facebook</span>
              </Link>
              <Link
                to=""
                target="_blank"
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
              >
                <div className="flex-shrink-0 w-5">
                  <FaYoutubeSquare className="w-5 h-5 text-red-500 rounded-full"></FaYoutubeSquare>
                </div>
                <span className="hidden lg:block text-sm">YouTube</span>
              </Link>
              <Link
                to=""
                target="_blank"
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
              >
                <div className="flex-shrink-0 w-5">
                  <FaTelegram className="w-5 h-5 text-sky-500"></FaTelegram>
                </div>
                <span className="hidden lg:block text-sm">Telegram</span>
              </Link>
              <Link
                to=""
                target="_blank"
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
              >
                <div className="flex-shrink-0 w-5">
                  <FaTwitterSquare className="w-5 h-5 text-blue-400 rounded-full"></FaTwitterSquare>
                </div>
                <span className="hidden lg:block text-sm">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200 text-lg font-primary">Getting started</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Release Notes
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Upgrade Guide
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Browser Support
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Dark Mode
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200 text-lg font-primary">Explore</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Prototyping
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Design systems
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Security
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200 text-lg font-primary">Resources</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Best practices
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Developers
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Learn design
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200 text-lg font-primary">Community</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Discussion Forums
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                Contributing
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                target="_blank"
              >
                API Reference
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
