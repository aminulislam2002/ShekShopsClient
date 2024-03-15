import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ViewAllOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the API endpoint
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://server.shekshops.com/orders");
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          console.error("Error fetching orders");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    try {
      const response = await fetch(`https://server.shekshops.com/deleteOrder/${orderId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Update the orders state without the deleted order
        setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));

        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Order deleted successfully.",
          icon: "success",
        });
      } else {
        console.error("Error deleting order");

        // Show error alert
        Swal.fire({
          title: "Error!",
          text: "Error deleting order. Please try again later.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);

      // Show error alert
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold font-primary text-slate-800 dark:text-slate-50 text-center mb-6">
        View all orders
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {orders.map((orderInfo) => (
          <div key={orderInfo?._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={orderInfo?.productData?.imageUrl}
              alt={orderInfo?.productData?.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-primary font-semibold mb-4">{orderInfo?.productData?.name}</h2>
              <div className="mb-4">
                <p className="text-slate-800 dark:text-slate-50">{`Color: ${orderInfo?.productData?.color}`}</p>
                <p className="text-slate-800 dark:text-slate-50">{`Size: ${orderInfo?.productData?.size}`}</p>
                <p className="text-slate-800 dark:text-slate-50">{`Quantity: ${orderInfo?.productData?.quantity}`}</p>
                <p className="text-slate-800 dark:text-slate-50">{`Original Price: ${orderInfo?.productData?.originalPrice}`}</p>
                <p className="text-slate-800 dark:text-slate-50">{`Delivery Charge: ${orderInfo?.customerData?.deliveryCharge}`}</p>
                <p className="text-slate-800 dark:text-slate-50">{`Total: ${
                  parseFloat(orderInfo?.productData?.originalPrice * orderInfo?.productData?.quantity) +
                  parseFloat(orderInfo?.customerData?.deliveryCharge)
                }`}</p>
              </div>
              <div>
                <p className="text-slate-800 dark:text-slate-50">{`Customer Name: ${orderInfo?.customerData?.name}`}</p>
                <p className="text-slate-800 dark:text-slate-50">
                  {`Mobile: `}
                  <a href={`tel:${orderInfo?.customerData?.mobileNumber}`} className="text-blue-500">
                    {orderInfo?.customerData?.mobileNumber}
                  </a>
                </p>
                <p className="text-slate-800 dark:text-slate-50">{`Delivery Area: ${orderInfo?.customerData?.deliveryArea}`}</p>
                <p className="text-slate-800 dark:text-slate-50">{`Address: ${orderInfo?.customerData?.address}, ${orderInfo?.customerData?.district}`}</p>
                <p className="text-slate-800 dark:text-slate-50">{`Comment: ${orderInfo?.customerData?.comment}`}</p>
              </div>
              <div className="mt-6 flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Confirm</button>
                <button
                  onClick={() => {
                    // Show confirmation alert before deletion
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        handleDeleteOrder(orderInfo?._id);
                      }
                    });
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-md">Cancel</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllOrder;
