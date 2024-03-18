import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider/AuthProvider";

const MyShopping = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        if (user && user.email) {
          const response = await fetch(`https://server.shekshops.com/order?email=${user.email}`);
          if (response.ok) {
            const data = await response.json();
            const orders = data.filter((order) => order?.orderStatus === "Received");
            setMyOrders(orders);
          } else {
            console.error("Error fetching user orders");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMyOrders();
  }, [user]);

  return (
    <div className="container mx-auto bg-slate-100">
      <h1 className="text-2xl py-2 ps-2 font-semibold font-primary">My Shopping</h1>
      <div>
        <div className="mb-4">
          {myOrders.map((order) => (
            <div key={order?._id}></div>
          ))}
        </div>
      </div>

      <div className="">
        {myOrders.map((order) => (
          <div key={order?._id}>
            <div className="bg-white p-3">
              <div className="md:flex justify-between items-center mb-2">
                <div>
                  <p>
                    Order <span>#{order?._id}</span>
                  </p>
                  <p>
                    Placed on {order?.date} {order?.time}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="text-slate-600 text-base font-bold me-1">Qty:</span>
                    <span>{order?.productData?.quantity}</span>
                  </p>
                </div>
                <div>
                  <span className="text-purple-600 text-base font-bold me-1">Total:</span>
                  <span className="text-lg font-bold text-purple-600">
                    <span className="text-2xl">৳</span>
                    {order?.productData?.originalPrice * order?.productData?.quantity + order?.customerData?.deliveryCharge}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-3 grid grid-cols-12 lg:gap-10">
              <div className="mb-5 lg:mb-0 col-span-12 md:border border-slate-400 rounded-md">
                <div className="md:flex md:justify-start md:items-start">
                  <div className="flex justify-center items-center">
                    <img
                      src={order?.productData?.imageUrl}
                      alt={order?.productData?.name}
                      className="w-[100px] h-[100px] object-cover rounded-l-md"
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="text-lg font-semibold mb-1">{order?.productData?.name.slice(0, 50)}...</h3>

                    <div className="flex text-slate-600 dark:text-slate-300 mb-4">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-gray-700">Color: {order?.productData?.color}</span>
                      </div>
                      <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                      <div className="flex items-center space-x-1.5">
                        <span>Size: {order?.productData?.size}</span>
                      </div>
                      <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                      <div className="flex items-center space-x-1.5">
                        <span>Quantity: {order?.productData?.quantity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-5 lg:mb-0 col-span-12 lg:col-span-6 p-3 border border-slate-400 rounded-md">
                <div className="mb-2">
                  <span className="text-slate-800 text-base font-bold">Shipping Address</span>
                </div>

                <div className="mb-2">
                  <span className="text-purple-600 text-lg font-semibold font-primary">{order?.customerData.name}</span>
                </div>

                <div className="mb-2">
                  <span className="bg-blue-800 px-2 py-1 rounded-full text-center text-lg font-semibold font-primary text-slate-50">
                    Home
                  </span>
                  <span className="ms-1">
                    {order?.customerData.district}, {order?.customerData.address}
                  </span>
                </div>

                <div className="mb-2">
                  <span>Number:</span>
                  <span className="ms-1">{order?.customerData.mobileNumber}</span>
                </div>
                <div className="mb-2">
                  <span>Email:</span>
                  <span className="ms-1">{order?.customerData.email}</span>
                </div>
              </div>

              <div className="mb-5 lg:mb-0 col-span-12 lg:col-span-6 p-3 border border-slate-400 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-800 text-base font-bold">Order Summary</span>
                  <span className="text-blue-500 text-base font-medium">{order?.orderStatus}</span>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-600 text-base font-bold">Product Price:</span>
                  <span className="text-lg font-bold text-purple-600">
                    <span className="text-2xl">৳</span>
                    {order?.productData?.originalPrice}
                  </span>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-600 text-base font-bold">Delivery Charge:</span>
                  <span className="text-lg font-bold text-purple-600">
                    <span className="text-2xl">৳</span>
                    {order?.customerData.deliveryCharge}
                  </span>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-600 text-base font-bold">Total:</span>
                  <span className="text-lg font-bold text-purple-600">
                    <span className="text-2xl">৳</span>
                    {order?.productData?.originalPrice * order?.productData?.quantity + order?.customerData?.deliveryCharge}
                  </span>
                </div>

                <div className="flex justify-center items-center mb-2">
                  <button className="text-fuchsia-500 text-sm dark:text-slate-50 px-4 py-2 w-1/2 rounded-md">
                    Download Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyShopping;
