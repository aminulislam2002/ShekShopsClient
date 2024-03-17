import { Link } from "react-router-dom";

import { FaFacebook, FaTwitterSquare, FaTelegram, FaYoutubeSquare } from "react-icons/fa";

import logo from "../../../assets/Logo/Logo Without Bg.png";

const Footer = () => {
  return (
    <div className="bg-green-700 text-slate-50 dark:text-slate-900">
      <div className="lg:w-[1200px] lg:mx-auto pt-5 px-2.5 md:px-5 lg:px-0 py-12 md:py-16 lg:py-20">
        <div className="relative">
          <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10">
            <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
              <div className="col-span-2 md:col-span-1">
                {/* Logo */}
                <Link to="/" className="flex justify-start items-center font-semibold text-xl lg:text-2xl font-primary">
                  <img src={logo} className="rounded-full w-32 h-32" alt="ShekShops Logo" />
                </Link>
                <span>
                  বাংলাদেশের অন্যতম বৃহত্তম শপিং প্লাটফর্ম ShekShops এ আপনাকে স্বাগতম!!!
                </span>
              </div>
            </div>
            <div className="text-sm">
              <h2 className="font-semibold text-xl lg:text-2xl font-primary">Getting Started</h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <Link to="" className="text-base hover:underline" target="_blank">
                    Release Notes
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-base hover:underline" target="_blank">
                    Upgrade Guide
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-base hover:underline" target="_blank">
                    Browser Support
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-base hover:underline" target="_blank">
                    Dark Mode
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <h2 className="font-semibold text-xl lg:text-2xl font-primary">Explore</h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <Link to="" className="text-base hover:underline" target="_blank">
                    Prototyping
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-base hover:underline" target="_blank">
                    Design systems
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-base hover:underline" target="_blank">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-base hover:underline" target="_blank">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <h2 className="font-semibold text-xl lg:text-2xl font-primary">Resources</h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <Link to="" className="text-base hover:underline" target="_blank">
                    Best practices
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-base hover:underline" target="_blank">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-base hover:underline" target="_blank">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-base hover:underline" target="_blank">
                    Learn design
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <h2 className="font-semibold text-xl lg:text-2xl font-primary">Follow Us</h2>
              <div className="mt-5 space-y-4">
                <div className="col-span-2 flex items-center md:col-span-3">
                  <div
                    className="nc-SocialsList1 flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start"
                    data-nc-id="SocialsList1"
                  >
                    <Link to="" target="_blank" className="flex items-center text-2xl leading-none space-x-2 group">
                      <div className="flex-shrink-0 w-5">
                        <FaFacebook className="w-5 h-5 text-blue-500"></FaFacebook>
                      </div>
                      <span className="hidden lg:block text-base">Facebook</span>
                    </Link>
                    <Link to="" target="_blank" className="flex items-center text-2xl leading-none space-x-2 group">
                      <div className="flex-shrink-0 w-5">
                        <FaYoutubeSquare className="w-5 h-5 text-red-500 rounded-full"></FaYoutubeSquare>
                      </div>
                      <span className="hidden lg:block text-base">YouTube</span>
                    </Link>
                    <Link to="" target="_blank" className="flex items-center text-2xl leading-none space-x-2 group">
                      <div className="flex-shrink-0 w-5">
                        <FaTelegram className="w-5 h-5 text-sky-500"></FaTelegram>
                      </div>
                      <span className="hidden lg:block text-base">Telegram</span>
                    </Link>
                    <Link to="" target="_blank" className="flex items-center text-2xl leading-none space-x-2 group">
                      <div className="flex-shrink-0 w-5">
                        <FaTwitterSquare className="w-5 h-5 text-blue-400 rounded-full"></FaTwitterSquare>
                      </div>
                      <span className="hidden lg:block text-base">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
