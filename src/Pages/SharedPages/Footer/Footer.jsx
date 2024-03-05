import { Link } from "react-router-dom";

import { FaFacebook, FaTwitterSquare, FaTelegram, FaYoutubeSquare } from "react-icons/fa";

import logo from "../../../assets/Logo/Logo Black Bg.png";

const Footer = () => {
  return (
    <div className="bg-[#00cc99] text-slate-900 dark:text-slate-900">
      <div className="relative pb-20 pt-5 px-5 md:px-10 lg:px-0 lg:py-28 container mx-auto">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10">
          <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 md:col-span-1">
              {/* Logo */}
              <Link
                to="/"
                className="flex justify-start items-center gap-2 text-xl lg:text-2xl font-bold font-primary"
              >
                <img src={logo} className="rounded-full w-10 h-10" alt="ShekShops Logo" />
                <span>ShekShops</span>
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
                  className="flex items-center text-2xl leading-none space-x-2 group"
                >
                  <div className="flex-shrink-0 w-5">
                    <FaFacebook className="w-5 h-5 text-blue-500"></FaFacebook>
                  </div>
                  <span className="hidden lg:block text-base">Facebook</span>
                </Link>
                <Link
                  to=""
                  target="_blank"
                  className="flex items-center text-2xl leading-none space-x-2 group"
                >
                  <div className="flex-shrink-0 w-5">
                    <FaYoutubeSquare className="w-5 h-5 text-red-500 rounded-full"></FaYoutubeSquare>
                  </div>
                  <span className="hidden lg:block text-base">YouTube</span>
                </Link>
                <Link
                  to=""
                  target="_blank"
                  className="flex items-center text-2xl leading-none space-x-2 group"
                >
                  <div className="flex-shrink-0 w-5">
                    <FaTelegram className="w-5 h-5 text-sky-500"></FaTelegram>
                  </div>
                  <span className="hidden lg:block text-base">Telegram</span>
                </Link>
                <Link
                  to=""
                  target="_blank"
                  className="flex items-center text-2xl leading-none space-x-2 group"
                >
                  <div className="flex-shrink-0 w-5">
                    <FaTwitterSquare className="w-5 h-5 text-blue-400 rounded-full"></FaTwitterSquare>
                  </div>
                  <span className="hidden lg:block text-base">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-lg lg:text-xl font-primary">Getting started</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Release Notes
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Upgrade Guide
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Browser Support
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Dark Mode
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-lg lg:text-xl font-primary">Explore</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Prototyping
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Design systems
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-lg lg:text-xl font-primary">Resources</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Best practices
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Developers
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Learn design
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-lg lg:text-xl font-primary">Community</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Discussion Forums
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  Contributing
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-base hover:underline"
                  target="_blank"
                >
                  API Reference
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
