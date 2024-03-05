/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./TopBanner.css";

import right_image_1 from "../../../../assets/Banner/right-image-1.gif";
import right_image_2 from "../../../../assets/Banner/right-image-2.gif";
import right_image_3 from "../../../../assets/Banner/right-image-3.gif";

import slider_image_1 from "../../../../assets/Banner/slider-image-1.jpg";
import slider_image_2 from "../../../../assets/Banner/slider-image-2.jpg";

const TopBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-5">
        {/* Left side category part */}
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <div className="border p-4">
            <ul className="list-none pl-0">
              <li className="mb-2">
                <Link to="/category" state={{ category: "all" }} className="text-blue-500 hover:underline">
                  All Categories
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/category" state={{ category: "bag" }} className="text-blue-500 hover:underline">
                  Bag Items
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/category" state={{ category: "women" }} className="text-blue-500 hover:underline">
                  Woman Items
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/category" state={{ category: "mens" }} className="text-blue-500 hover:underline">
                  Man Items
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/category" state={{ category: "kitchen" }} className="text-blue-500 hover:underline">
                  Kitchen Items
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/category" state={{ category: "gadget" }} className="text-blue-500 hover:underline">
                  Gadget Items
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/category" state={{ category: "travel" }} className="text-blue-500 hover:underline">
                  Travel Items
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/category" state={{ category: "home-improvement" }} className="text-blue-500 hover:underline">
                  Home Improvement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle - slider part */}
        <div className="col-span-12 md:col-span-8 lg:col-span-8">
          <div>
            <>
              <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                  <div className="keen-slider__slide number-slide1">
                    <img src={slider_image_1} className="w-full h-[300px] md:h-[300px] lg:h-[430px]" alt="Slider image 1" />
                  </div>
                  <div className="keen-slider__slide number-slide2">
                    <img src={slider_image_2} className="w-full h-[300px] md:h-[300px] lg:h-[430px]" alt="Slider image 2" />
                  </div>
                </div>
                {loaded && instanceRef.current && (
                  <>
                    <Arrow
                      left
                      onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
                      disabled={currentSlide === 0}
                    />

                    <Arrow
                      onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                      disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                    />
                  </>
                )}
              </div>
              {loaded && instanceRef.current && (
                <div className="dots">
                  {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx);
                        }}
                        className={"dot" + (currentSlide === idx ? " active" : "")}
                      ></button>
                    );
                  })}
                </div>
              )}
            </>
          </div>
        </div>

        {/* Right side image part */}
        <div className="col-span-12 md:col-span-12 lg:col-span-2">
          <div className="grid grid-cols-12 gap-5">
            <img
              src={right_image_1}
              alt="right_image_1"
              className="col-span-12 md:col-span-4 lg:col-span-12 lg:h-[130px] w-full"
            />
            <img
              src={right_image_2}
              alt="right_image_2"
              className="col-span-12 md:col-span-4 lg:col-span-12 lg:h-[130px] w-full"
            />
            <img
              src={right_image_3}
              alt="right_image_3"
              className="col-span-12 md:col-span-4 lg:col-span-12 lg:h-[130px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}

export default TopBanner;
