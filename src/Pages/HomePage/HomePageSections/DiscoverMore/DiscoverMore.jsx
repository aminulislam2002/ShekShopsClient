import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import image1 from "../../../../assets/DiscoverMore/HUDY.png";
import image2 from "../../../../assets/DiscoverMore/GIFT-BOX.png";
import image3 from "../../../../assets/DiscoverMore/PERFUM.png";
import image4 from "../../../../assets/DiscoverMore/GIFT-CARD.png";

const data = [
  {
    id: 1,
    linkTo: "/link1",
    image: image1,
    category: "Explore new arrivals",
    title: "Shop top brands now!",
    buttonText: "Show me all",
    bgColor: "bg-green-50",
  },
  {
    id: 2,
    linkTo: "/link2",
    image: image2,
    category: "Digital gift cards",
    title: "Give the gift of choice",
    buttonText: "Show me all",
    bgColor: "bg-red-50",
  },
  {
    id: 3,
    linkTo: "/link3",
    image: image3,
    category: "Sell collection",
    title: "Up to 80% off retail",
    buttonText: "Show me all",
    bgColor: "bg-yellow-50",
  },
  {
    id: 4,
    linkTo: "/link4",
    image: image4,
    category: "Voucher Special",
    title: "Get discounts with vouchers",
    buttonText: "Show me all",
    bgColor: "bg-blue-50",
  },
];

const DiscoverMore = () => {
  const [swiper, setSwiper] = useState(null);
  const [isBackButtonActive, setIsBackButtonActive] = useState(false);

  const handleBack = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleForward = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const activateBackButton = () => {
    setIsBackButtonActive(true);
  };

  const activateForwardButton = () => {
    setIsBackButtonActive(false);
  };

  return (
    <div className="my-24 lg:my-32 mx-5 lg:mx-10">
      {/* Title of this section */}

      <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
        <div>
          <h2 className="font-primary text-3xl md:text-4xl font-semibold">
            Discover more<span>! </span>
            <span className="text-neutral-500 dark:text-neutral-400">Good things are waiting for you</span>
          </h2>
        </div>
        <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
          <div className="nc-NextPrev relative flex items-center text-slate-500 dark:text-slate-50">
            <button
              onClick={handleBack}
              onMouseEnter={activateBackButton}
              onFocus={activateBackButton}
              className={`w-10 h-10 mr-2 rounded-full flex items-center justify-center ${
                isBackButtonActive ? "border-2 border-slate-200 dark:border-slate-600" : ""
              }`}
            >
              <IoIosArrowRoundBack className="w-5 h-5"></IoIosArrowRoundBack>
            </button>
            <button
              onClick={handleForward}
              onMouseEnter={activateForwardButton}
              onFocus={activateForwardButton}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                !isBackButtonActive ? "border-2 border-slate-200 dark:border-slate-600" : ""
              }`}
            >
              <IoIosArrowRoundForward className="w-5 h-5"></IoIosArrowRoundForward>
            </button>
          </div>
        </div>
      </div>

      {/* Slider of this section */}

      <div>
        <Swiper
          // slidesPerView={3}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          pagination={
            {
              // clickable: true,
            }
          }
          onSwiper={setSwiper}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={item.linkTo}>
                <div className={`w-[420px] max-w-sm p-6 rounded-2xl group ${item.bgColor}`}>
                  <div className="relative overflow-hidden">
                    <div className="flex justify-center items-center">
                      <div className="w-1/2">
                        <div className="text-start">
                          <span className="mb-2 text-sm text-slate-700">{item.category}</span>
                          <h2 className="text-xl md:text-2xl text-slate-900 font-semibold">{item.title}</h2>
                        </div>
                        <div className="mt-8 ms-1">
                          <button className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-50 hover:bg-gray-100 dark:hover:bg-slate-800 nc-shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                            {item.buttonText}
                          </button>
                        </div>
                      </div>

                      <div className="w-1/2">
                        <img src={item.image} className="w-[183px] h-[178px]" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscoverMore;
