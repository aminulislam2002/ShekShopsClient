import image1 from "../../../../assets/HowItWorks/1.png";
import image2 from "../../../../assets/HowItWorks/2.png";
import image3 from "../../../../assets/HowItWorks/3.png";
import image4 from "../../../../assets/HowItWorks/4.png";

const HowItWorks = () => {
  return (
    <div className="py-24 lg:py-32 container mx-auto border-t border-b border-slate-200 dark:border-slate-700">
      <div className="nc-SectionHowItWork">
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center max-w-xs mx-auto">
            {/* Step 1 Image */}
            <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
              <img src={image1} className="w-36 h-36" alt="" />
            </div>

            {/* Step 1 Content */}
            <div className="text-center mt-auto space-y-5">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100">
                Step 1
              </span>
              <h3 className="text-base font-semibold">Filter &amp; Discover</h3>
              <span className="block text-slate-600 dark:text-slate-50 text-sm leading-6">
                Smart filtering and suggestions make it easy to find
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center max-w-xs mx-auto">
            {/* Step 2 Image */}
            <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
              <img src={image2} className="w-36 h-36" alt="" />
            </div>

            {/* Step 2 Content */}
            <div className="text-center mt-auto space-y-5">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-indigo-800 bg-indigo-100">
                Step 2
              </span>
              <h3 className="text-base font-semibold">Add to bag</h3>
              <span className="block text-slate-600 dark:text-slate-50 text-sm leading-6">
                Easily select the correct items and add them to the cart
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center max-w-xs mx-auto">
            {/* Step 3 Image */}
            <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
              <img src={image3} className="w-36 h-36" alt="" />
            </div>

            {/* Step 3 Content */}
            <div className="text-center mt-auto space-y-5">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100">
                Step 3
              </span>
              <h3 className="text-base font-semibold">Fast shipping</h3>
              <span className="block text-slate-600 dark:text-slate-50 text-sm leading-6">
                The carrier will confirm and ship quickly to you
              </span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col items-center max-w-xs mx-auto">
            {/* Step 4 Image */}
            <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
              <img src={image4} className="w-36 h-36" alt="" />
            </div>

            {/* Step 4 Content */}
            <div className="text-center mt-auto space-y-5">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-purple-800 bg-purple-100">
                Step 4
              </span>
              <h3 className="text-base font-semibold">Enjoy the product</h3>
              <span className="block text-slate-600 dark:text-slate-50 text-sm leading-6">
                Have fun and enjoy your 5-star quality products
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
