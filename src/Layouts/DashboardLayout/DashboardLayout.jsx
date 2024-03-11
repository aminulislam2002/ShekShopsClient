import { Link, Outlet } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import useAdmin from "../../Hooks/useAdmin";
import useCustomer from "../../Hooks/useCustomer";

const DashboardLayout = () => {
  const adminOptions = (
    <>
      <Link to="/dashboard/viewAllOrder">
        <li className="my-1 py-1 ps-5 rounded text-slate-50 hover:text-slate-800 hover:bg-white text-base lg:text-lg font-semibold font-primary">
          View All Order
        </li>
      </Link>
      <Link to="/dashboard/viewAllCustomer">
        <li className="my-1 py-1 ps-5 rounded text-slate-50 hover:text-slate-800 hover:bg-white text-base lg:text-lg font-semibold font-primary">
          View All Customer
        </li>
      </Link>
      <Link to="/dashboard/viewAllProduct">
        <li className="my-1 py-1 ps-5 rounded text-slate-50 hover:text-slate-800 hover:bg-white text-base lg:text-lg font-semibold font-primary">
          View All Product
        </li>
      </Link>
      <Link to="/dashboard/addProduct">
        <li className="my-1 py-1 ps-5 rounded text-slate-50 hover:text-slate-800 hover:bg-white text-base lg:text-lg font-semibold font-primary">
          Add a Product
        </li>
      </Link>
    </>
  );

  const customerOptions = (
    <>
      <Link to="/dashboard/myProduct">
        <li className="my-1 py-1 ps-5 rounded text-slate-50 hover:text-slate-800 hover:bg-white text-base lg:text-lg font-semibold font-primary">
          MyProduct
        </li>
      </Link>
    </>
  );

  const [isAdmin] = useAdmin();
  const [isCustomer] = useCustomer();
  // const isCustomer = false;
  console.log(isAdmin);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="hidden lg:block"></div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:flex">
          <div className="w-full lg:w-2/12 bg-green-700 overflow-y-auto max-h-[100vh] lg:h-screen">
            <div className="flex justify-start">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <GrMenu className="w-6 h-6" />
                </label>
              </div>

              <div className="w-full py-2">
                <Link to="/">
                  <h1 className="text-center text-lg text-slate-50 font-semibold md:text-xl lg:text-3xl">ShekShops</h1>
                </Link>
              </div>
            </div>
            <div className="flex-none hidden lg:block mt-4">
              <ul className="menu-vertical">
                {isAdmin ? <> {adminOptions} </> : <></>}
                {isCustomer ? <> {customerOptions} </> : <></>}
              </ul>
            </div>
          </div>
          <div className="lg:w-10/12">
            <div className="overflow-y-auto max-h-[95vh]">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay overflow-x-auto max-h-[100vh]"></label>
          <ul className="p-4 w-1/2 min-h-screen bg-green-700 overflow-y-auto">
            {isAdmin ? <> {adminOptions} </> : <></>}
            {isCustomer ? <> {customerOptions} </> : <></>}
          </ul>
        </div>
      </div>
      <div>{/* Footer position [if need] */}</div>
    </div>
  );
};

export default DashboardLayout;
