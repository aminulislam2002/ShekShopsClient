import { Link, Outlet } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import useAdmin from "../../Hooks/useAdmin";
import useCustomer from "../../Hooks/useCustomer";
import ActiveLink from "../../Components/ActiveLink/ActiveLink";
import useTheme from "../../Hooks/useTheme";

const DashboardLayout = () => {
  const adminOptions = (
    <>
      <ActiveLink
        to="/dashboard/allUsers"
        label="All Users"
        activeClassName="text-slate-800 bg-slate-50"
        className="my-3 py-2 ps-5 rounded bg-gray-500 text-slate-50 hover:text-slate-800 hover:bg-slate-50 text-base lg:text-lg font-semibold font-primary uppercase text-center"
      />
      <ActiveLink
        to="/dashboard/allProducts"
        label="All Products"
        activeClassName="text-slate-800 bg-slate-50"
        className="my-3 py-2 ps-5 rounded bg-teal-500 text-slate-50 hover:text-slate-800 hover:bg-slate-50 text-base lg:text-lg font-semibold font-primary uppercase text-center"
      />
      <ActiveLink
        to="/dashboard/pendingOrders"
        label="Pending Orders"
        activeClassName="text-slate-800 bg-slate-50"
        className="my-3 py-2 ps-5 rounded bg-amber-500 text-slate-50 hover:text-slate-800 hover:bg-slate-50 text-base lg:text-lg font-semibold font-primary uppercase text-center"
      />
      <ActiveLink
        to="/dashboard/confirmOrders"
        label="Confirm Orders"
        activeClassName="text-slate-800 bg-slate-50"
        className="my-3 py-2 ps-5 rounded bg-blue-500 text-slate-50 hover:text-slate-800 hover:bg-slate-50 text-base lg:text-lg font-semibold font-primary uppercase text-center"
      />
      <ActiveLink
        to="/dashboard/cancelOrders"
        label="Cancel Orders"
        activeClassName="text-slate-800 bg-slate-50"
        className="my-3 py-2 ps-5 rounded bg-red-500 text-slate-50 hover:text-slate-800 hover:bg-slate-50 text-base lg:text-lg font-semibold font-primary uppercase text-center"
      />
      <ActiveLink
        to="/dashboard/sellingProducts"
        label="Selling Products"
        activeClassName="text-slate-800 bg-slate-50"
        className="my-3 py-2 ps-5 rounded bg-green-500 text-slate-50 hover:text-slate-800 hover:bg-slate-50 text-base lg:text-lg font-semibold font-primary uppercase text-center"
      />
      <ActiveLink
        to="/dashboard/addProduct"
        label="Add Product"
        activeClassName="text-slate-800 bg-slate-50"
        className="my-3 py-2 ps-5 rounded bg-sky-500 text-slate-50 hover:text-slate-800 hover:bg-slate-50 text-base lg:text-lg font-semibold font-primary uppercase text-center"
      />
    </>
  );

  const customerOptions = (
    <>
      <ActiveLink
        to="/dashboard/myOrder"
        label="Active Order"
        activeClassName="text-slate-800 bg-slate-50"
        className="my-3 py-2 ps-5 rounded bg-blue-500 text-slate-50 hover:text-slate-800 hover:bg-slate-50 text-base lg:text-lg font-semibold font-primary uppercase text-center"
      />
      <ActiveLink
        to="/dashboard/myShopping"
        label="My Shopping"
        activeClassName="text-slate-800 bg-slate-50"
        className="my-3 py-2 ps-5 rounded bg-teal-500 text-slate-50 hover:text-slate-800 hover:bg-slate-50 text-base lg:text-lg font-semibold font-primary uppercase text-center"
      />
      <ActiveLink
        to="/dashboard/myCancellations"
        label="My Cancellations"
        activeClassName="text-slate-800 bg-slate-50"
        className="my-3 py-2 ps-5 rounded bg-red-500 text-slate-50 hover:text-slate-800 hover:bg-slate-50 text-base lg:text-lg font-semibold font-primary uppercase text-center"
      />
    </>
  );

  const [isAdmin] = useAdmin();
  const [isCustomer] = useCustomer();
  const { isDarkMode } = useTheme();

  return (
    <div className={` font-secondary min-h-screen ${isDarkMode && "dark"}`}>
      <div className="hidden lg:block"></div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:flex">
          <div className="w-full lg:w-2/12 bg-neutral-100 dark:bg-neutral-900 overflow-y-auto max-h-[100vh] lg:h-screen">
            <div className="flex justify-start">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <GrMenu className="w-6 h-6" />
                </label>
              </div>

              <div className="w-full py-2">
                <Link to="/dashboard" className="text-center block">
                  <h1 className="text-lg md:text-xl lg:text-3xl text-slate-800 font-bold font-serif tracking-wider uppercase">
                    Shek<span className="text-blue-200">Shops</span>
                  </h1>
                </Link>
              </div>
            </div>
            <div className="flex-none hidden lg:block mt-4">
              <ul className="menu-vertical">
                {isAdmin ? <> {adminOptions} </> : <></>}
                {isCustomer ? <> {customerOptions} </> : <></>}
                <Link to="/">
                  <li className="my-3 py-2 ps-5 rounded bg-black text-slate-50 hover:text-slate-800 hover:bg-slate-50 text-base lg:text-lg font-semibold font-primary uppercase text-center">
                    Back To Home
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="lg:w-10/12">
            <div className="overflow-y-auto max-h-[100vh]">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay overflow-x-auto max-h-[100vh]"></label>
          <ul className="p-4 w-2/3 md:w-1/3 min-h-screen grid grid-cols-1  overflow-y-auto">
            {isAdmin ? <> {adminOptions} </> : <></>}
            {isCustomer ? <> {customerOptions} </> : <></>}
            <Link to="/">
              <li className="my-3 py-2 ps-5 rounded bg-black text-slate-50 hover:text-slate-800 hover:bg-slate-50 text-base lg:text-lg font-semibold font-primary uppercase text-center">
                Back To Home
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div>{/* Footer position [if need] */}</div>
    </div>
  );
};

export default DashboardLayout;
