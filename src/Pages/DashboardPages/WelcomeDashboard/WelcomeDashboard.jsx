import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import image_one from "../../../assets/Section/dashboard_welcome_page.png";
import { FaProductHunt } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { TbTruckDelivery } from "react-icons/tb";
import { TbCubePlus } from "react-icons/tb";

const WelcomeDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <div className="flex  md:flex-row md:items-center print:hidden gap-2 pb-3 md:pb-4 lg:pb-5">
        <div className="grow">
          <h5 className="text-base text-slate-800 dark:text-slate-50">Ecommerce</h5>
        </div>
        <ul className="flex items-center gap-2 text-sm font-normal shrink-0">
          <li className="relative before:content-['\ea54'] before:font-remix ltr:before:-right-1 rtl:before:-left-1  before:absolute before:text-[18px] before:-top-[3px] ltr:pr-4 rtl:pl-4 before:text-slate-400 dark:text-slate-700">
            Dashboard
          </li>
        </ul>
      </div>

      {/* User Welcome */}
      <div>
        <div className="relative bg-[#132337] p-5 mb-5 rounded-md">
          <div className="grid items-center grid-cols-12">
            <div className="col-span-12 lg:col-span-8 2xl:col-span-7">
              <h5 className="mb-3 font-normal tracking-wide text-slate-200">Welcome {user?.displayName} 🎉</h5>
              <p className="mb-5 text-slate-400">
                An ecommerce dashboard has just that purpose. It provides your ecommerce team with a clear overview of key
                financial and website KPIs at any time.
              </p>
              <button
                type="button"
                className="text-slate-50 btn bg-blue-500 hover:bg-blue-600 border-blue-500 hover:text-slate-50 hover:border-blue-600 focus:text-slate-50 focus:bg-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-500/20 active:text-slate-50 active:bg-blue-600 active:border-blue-600 active:ring active:ring-blue-500/20 dark:ring-blue-400/20"
              >
                Take a Product
              </button>
            </div>
            <div className="hidden col-span-12 2xl:col-span-3 lg:col-span-2 lg:col-start-11 2xl:col-start-10 lg:block">
              <img src={image_one} alt="" className="h-40 ltr:2xl:ml-auto rtl:2xl:mr-auto" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 lg:col-span-3 2xl:col-span-2 bg-white dark:bg-[#132337] rounded-md">
            <div className="text-center p-5">
              <div className="flex items-center justify-center mx-auto rounded-full size-14 bg-[#1A365D] text-[#1A365D] dark:bg-[#1A365D]">
                <FaProductHunt className="w-6 h-6 text-blue-600 rounded-full"></FaProductHunt>
              </div>
              <h5 className="mt-4 mb-2 dark:text-slate-50 text-lg md:text-xl lg:text-2xl font-secondary font-semibold">
                236
              </h5>
              <p className="text-slate-400 dark:text-zink-200">Total Products</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 2xl:col-span-2 bg-white dark:bg-[#132337] rounded-md">
            <div className="text-center p-5">
              <div className="flex items-center justify-center mx-auto rounded-full size-14 bg-[#312D5E] text-[#312D5E] dark:bg-[#312D5E]">
                <TbCubePlus className="w-6 h-6 text-pink-600 rounded-full"></TbCubePlus>
              </div>
              <h5 className="mt-4 mb-2 dark:text-slate-50 text-lg md:text-xl lg:text-2xl font-secondary font-semibold">
                20
              </h5>
              <p className="text-slate-400 dark:text-zink-200">Total Orders</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 2xl:col-span-2 bg-white dark:bg-[#132337] rounded-md">
            <div className="text-center p-5">
              <div className="flex items-center justify-center mx-auto rounded-full size-14 bg-[#163A46] text-[#163A46] dark:bg-[#163A46]">
                <TbTruckDelivery className="w-6 h-6 text-green-600 rounded-full"></TbTruckDelivery>
              </div>
              <h5 className="mt-4 mb-2 dark:text-slate-50 text-lg md:text-xl lg:text-2xl font-secondary font-semibold">
                236
              </h5>
              <p className="text-slate-400 dark:text-zink-200">Delivered</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 2xl:col-span-2 bg-white dark:bg-[#132337] rounded-md">
            <div className="text-center p-5">
              <div className="flex items-center justify-center mx-auto rounded-full size-14 bg-[#3F2939] text-[#3F2939] dark:bg-[#3F2939]">
                <FcCancel className="w-6 h-6 text-red-600 rounded-full"></FcCancel>
              </div>
              <h5 className="mt-4 mb-2 dark:text-slate-50 text-lg md:text-xl lg:text-2xl font-secondary font-semibold">
                236
              </h5>
              <p className="text-slate-400 dark:text-zink-200">Cancelled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDashboard;
