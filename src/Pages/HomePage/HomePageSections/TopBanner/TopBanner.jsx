/* eslint-disable react/prop-types */
import { LuSearch } from "react-icons/lu";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./KeenSlider.css";

import image1 from "../../../../assets/Banner/1.png";
import image2 from "../../../../assets/Banner/2.png";
import image3 from "../../../../assets/Banner/3.png";
import image4 from "../../../../assets/Banner/4.png";
import image5 from "../../../../assets/Banner/5.png";
import image6 from "../../../../assets/Banner/hero-right-3-removebg-preview.png";

const TopBanner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {/* Slider 1 */}
          {/* <!-- Add your updated styles based on the suggestions provided --> */}
          <div className="keen-slider__slide number-slide1 relative overflow-hidden bg-gradient-to-r from-primary to-secondary">
            <div className="lg:px-12 py-10 md:py-12 md:px-6 text-white">
              <div className="grid grid-cols-12 relative items-center">
                <div className="col-span-12 md:col-span-7 lg:col-span-6 lg:py-16 text-black relative z-30">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-medium font-primary mb-3 md:mb-5 lg:mb-6">
                    Hot Deals Await You 🔥
                  </h4>
                  <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-primary mb-5 md:mb-8 lg:mb-10">
                    Explore Exclusive Collection for Everyone
                  </h1>
                  <button className="bg-black text-white text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold font-primary px-6 md:px-10 lg:px-14 py-3 md:py-4 lg:py-6 rounded-full flex items-center gap-2 hover:bg-opacity-80 transition">
                    Explore Now
                    <span className="text-xl">
                      <LuSearch />
                    </span>
                  </button>
                </div>
                <div className="col-span-12 md:col-span-5 lg:col-span-6">
                  <div className="absolute right-0 top-0 lg:relative">
                    <img src={image6} className="w-full h-full object-cover rounded-md" alt="Banner Image 1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider 2 */}
          <div className="keen-slider__slide number-slide2">
            <div className="relative overflow-hidden ">
              <div className="lg:px-[70px] py-10 px-5 md:py-12 md:px-6">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-10 md:col-span-10 lg:col-span-6 lg:py-[150px] z-20">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-medium font-primary text-[#334144] mb-5 md:mb-8 lg:mb-10">
                      Trendy Styles for All Seasons 🔥
                    </h4>
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-primary text-slate-900 mb-5 md:mb-8 lg:mb-10">
                      Discover the Latest Fashion Trends
                    </h1>
                    <button className="bg-black text-white text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold font-primary px-5 md:px-8 lg:px-12 py-2 md:py-3 lg:py-5 rounded-full flex justify-center items-center gap-2">
                      Explore Now
                      <span>
                        <LuSearch />
                      </span>
                    </button>
                  </div>
                  <div className="col-span-6">
                    <div className="absolute right-0 top-0 lg:relative flex justify-center items-center">
                      <img src={image2} className="w-[300px] h-[300px] lg:w-full lg:h-[650px] " alt="Banner Image 2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider 3 */}
          <div className="keen-slider__slide number-slide3">
            <div className="relative overflow-hidden ">
              <div className="lg:px-[70px] py-10 px-5 md:py-12 md:px-6">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-10 md:col-span-10 lg:col-span-6 lg:py-[150px] z-20">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-medium font-primary text-[#334144] mb-5 md:mb-8 lg:mb-10">
                      Exclusive Deals on Tech Gadgets 🔥
                    </h4>
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-primary text-slate-900 mb-5 md:mb-8 lg:mb-10">
                      Embrace the Latest Technology
                    </h1>
                    <button className="bg-black text-white text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold font-primary px-5 md:px-8 lg:px-12 py-2 md:py-3 lg:py-5 rounded-full flex justify-center items-center gap-2">
                      Explore Now
                      <span>
                        <LuSearch />
                      </span>
                    </button>
                  </div>
                  <div className="col-span-6">
                    <div className="absolute right-0 top-0 lg:relative flex justify-center items-center">
                      <img src={image3} className="w-[300px] h-[300px] lg:w-full lg:h-[650px] " alt="Banner Image 3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider 4 */}
          <div className="keen-slider__slide number-slide4">
            <div className="relative overflow-hidden ">
              <div className="lg:px-[70px] py-10 px-5 md:py-12 md:px-6">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-10 md:col-span-10 lg:col-span-6 lg:py-[150px] z-20">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-medium font-primary text-[#334144] mb-5 md:mb-8 lg:mb-10">
                      Home Decor Delights 🔥
                    </h4>
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-primary text-slate-900 mb-5 md:mb-8 lg:mb-10">
                      Elevate Your Living Space
                    </h1>
                    <button className="bg-black text-white text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold font-primary px-5 md:px-8 lg:px-12 py-2 md:py-3 lg:py-5 rounded-full flex justify-center items-center gap-2">
                      Explore Now
                      <span>
                        <LuSearch />
                      </span>
                    </button>
                  </div>
                  <div className="col-span-6">
                    <div className="absolute right-0 top-0 lg:relative flex justify-center items-center">
                      <img src={image4} className="w-[300px] h-[300px] lg:w-full lg:h-[650px] " alt="Banner Image 4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider 5 */}
          <div className="keen-slider__slide number-slide5">
            <div className="relative overflow-hidden ">
              <div className="lg:px-[70px] py-10 px-5 md:py-12 md:px-6">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-10 md:col-span-10 lg:col-span-6 lg:py-[150px] z-20">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-medium font-primary text-[#334144] mb-5 md:mb-8 lg:mb-10">
                      Fitness Essentials for a Healthy Lifestyle 🔥
                    </h4>
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-primary text-slate-900 mb-5 md:mb-8 lg:mb-10">
                      Achieve Your Fitness Goals
                    </h1>
                    <button className="bg-black text-white text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold font-primary px-5 md:px-8 lg:px-12 py-2 md:py-3 lg:py-5 rounded-full flex justify-center items-center gap-2">
                      Explore Now
                      <span>
                        <LuSearch />
                      </span>
                    </button>
                  </div>
                  <div className="col-span-6">
                    <div className="absolute right-0 top-0 lg:relative flex justify-center items-center">
                      <img src={image5} className="w-[300px] h-[300px] lg:w-full lg:h-[650px] " alt="Banner Image 5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
