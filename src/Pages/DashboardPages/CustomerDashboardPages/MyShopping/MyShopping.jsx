import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyShopping = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (user && user.email) {
          const response = await fetch(`https://server.shekshops.com/order?email=${user.email}`);
          if (response.ok) {
            const data = await response.json();
            const ordersData = data.filter((order) => order?.orderStatus === "Delivered");
            setOrders(ordersData);
          } else {
            console.error("Error fetching user orders");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="">
      <div className="p-5 bg-white text-slate-800 dark:bg-[#132337] dark:text-slate-50">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="xl:col-span-3 lg:col-span-12 order-2 lg:order-1">
            <h1 className="bg-white text-slate-800 dark:bg-[#132337] dark:text-slate-50 text-base font-semibold font-secondary">
              My Shopping
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md overflow-x-auto">
        <table className="w-full whitespace-nowrap table-auto">
          {/* head */}
          <thead className="bg-slate-100 dark:bg-[#1C2E45] text-slate-800 dark:text-slate-50 text-base">
            <tr>
              <th className="px-4 py-2 text-center">Order ID</th>
              <th className="px-4 py-2 text-center">Order Date</th>
              <th className="px-4 py-2 text-center">Amount</th>
              <th className="px-4 py-2 text-center">Customer Name</th>
              <th className="px-4 py-2 text-center">Customer Number</th>
              <th className="px-4 py-2 text-center">Order Status</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-[#132337] text-slate-800 dark:text-slate-50 text-base">
            {orders.map((order) => (
              <tr key={order?._id} className="border-t border-slate-400">
                <td className="px-4 py-2 text-center text-blue-500 hover:underline">#{order?._id}</td>
                <td className="px-4 py-2 text-center">
                  {order?.date} <br /> {order?.time}
                </td>
                <td className="px-4 py-2 text-center">৳{order?.total}</td>
                <td className="px-4 py-2 text-center">{order?.customerData?.name}</td>
                <td className="px-4 py-2 text-center">{order?.customerData?.mobileNumber}</td>
                <td className="px-4 py-2 text-center">{order?.orderStatus}</td>
                <td className="px-4 py-2 text-center w-1/12">
                  <div className="flex flex-col gap-2">
                    <Link
                      to={`/dashboard/order-overview/${order?._id}`}
                      state={{ order: order }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-1 px-2 rounded"
                    >
                      View Details
                    </Link>
                    <button
                      // onClick={() => handleConfirmed(order?._id)}
                      // disabled={isLoading}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm py-1 px-2 rounded"
                    >
                     Returns
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyShopping;
