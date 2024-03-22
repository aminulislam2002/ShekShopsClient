import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";

const WelcomeDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <div className="flex flex-col gap-2 pb-3 md:pb-4 lg:pb-5 md:flex-row md:items-center print:hidden">
        <div className="grow">
          <h5 className="text-base text-slate-800 dark:text-slate-50">Ecommerce</h5>
        </div>
        <ul className="flex items-center gap-2 text-sm font-normal shrink-0">
          <li className="relative before:content-['\ea54'] before:font-remix ltr:before:-right-1 rtl:before:-left-1  before:absolute before:text-[18px] before:-top-[3px] ltr:pr-4 rtl:pl-4 before:text-slate-400 dark:text-slate-700">
            Ecommerce
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default WelcomeDashboard;
