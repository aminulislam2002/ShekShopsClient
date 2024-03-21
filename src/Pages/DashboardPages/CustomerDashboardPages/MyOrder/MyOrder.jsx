import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        if (user && user.email) {
          const response = await fetch(`https://server.shekshops.com/order?email=${user.email}`);
          if (response.ok) {
            const data = await response.json();
            const orders = data.filter((order) => order?.orderStatus === "Confirm" || order?.orderStatus === "Pending");
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

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        updateOrderStatus(id, "Cancel");
      }
    });
  };

  const updateOrderStatus = (id, status) => {
    setIsLoading(true);
    axios
      .put(`https://server.shekshops.com/orderStatus/${id}`, { status })
      .then((response) => {
        if (response.status === 200) {
          // Filter out the updated order from the orders state
          const updatedOrders = myOrders.filter((order) => order._id !== id);
          setMyOrders(updatedOrders);
          // Handle success response
          Swal.fire("Updated!", "Order status has been updated.", "success");
        }
        // Update UI accordingly, you may fetch orders again to update the list
      })
      .catch((error) => {
        console.log(error);
        // Handle error
        Swal.fire("Error!", "Failed to update order status.", "error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container mx-auto bg-slate-200">
      <h1 className="text-2xl py-2 ps-2 font-semibold font-primary">Order Details</h1>
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
                  <span
                    className={`text-${
                      order?.orderStatus === "Pending" ? "red-600" : order?.orderStatus === "Confirm" ? "blue-600" : "black"
                    } italic text-base font-bold me-1`}
                  >
                    {order?.orderStatus}
                  </span>
                </div>
                <div>
                  <span className="text-purple-600 text-base font-bold me-1">Total:</span>
                  <span className="text-lg font-bold text-purple-600">
                    <span className="text-2xl">৳</span>
                    {order?.total}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-3 grid grid-cols-12 lg:gap-10">
              <div className="mb-5 lg:mb-0 col-span-12 md:border border-slate-400 rounded-md">
                {order?.products?.map((product) => (
                  <div key={product._id} className="md:flex md:justify-start md:items-start">
                    {console.log("product", product.imageUrl)}
                    <div className="flex justify-center items-center">
                      <img
                        src={product?.imageUrl}
                        alt={product?.name}
                        className="w-[100px] h-[100px] object-cover rounded-l-md"
                      />
                    </div>

                    <div className="p-3">
                      <h3 className="text-lg font-semibold mb-1">{product?.name.slice(0, 50)}...</h3>

                      <div className="flex text-slate-600 dark:text-slate-300 mb-4">
                        <div className="flex items-center space-x-1.5">
                          <span className="text-gray-700">Color: {product?.color}</span>
                        </div>
                        <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                        <div className="flex items-center space-x-1.5">
                          <span>Size: {product?.size}</span>
                        </div>
                        <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                        <div className="flex items-center space-x-1.5">
                          <span>Quantity: {product?.quantity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                  <span className="text-purple-600 text-base font-bold">Sub-Total:</span>
                  <span className="text-lg font-bold text-purple-600">
                    <span className="text-2xl">৳</span>
                    {order?.subTotal}
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
                    {order?.total}
                  </span>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <button
                    onClick={() => handleCancel(order?._id)}
                    disabled={isLoading || order?.orderStatus === "Cancel"}
                    className={`${
                      order?.orderStatus === "Cancel"
                        ? "bg-slate-500 text-slate-50 dark:text-slate-50 px-2 md:px-2 lg:px-4 py-2 w-1/2 rounded-md text-sm"
                        : "bg-red-500 hover:bg-red-700 text-slate-50 dark:text-slate-50 px-2 md:px-2 lg:px-4 py-2 w-1/2 rounded-md text-sm"
                    }
        `}
                  >
                    Cancel Order
                  </button>
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

export default MyOrder;
