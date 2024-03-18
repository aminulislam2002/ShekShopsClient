import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ConfirmOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://server.shekshops.com/orders");
        if (response.ok) {
          const data = await response.json();
          // Filter orders with orderStatus as "confirm"
          const confirmOrders = data.filter((order) => order.orderStatus === "Confirm");
          setOrders(confirmOrders);
        } else {
          console.error("Error fetching orders");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchOrders();
  }, []);

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

  const handleReceived = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Have customer received the product in good condition?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Received it",
      cancelButtonText: "Not yet",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        updateOrderStatus(id, "Received");
      }
    });
  };

  const updateOrderStatus = (id, status) => {
    setIsLoading(true);
    axios
      .put(`https://server.shekshops.com/orderStatus/${id}`, { status })
      .then((response) => {
        if (response.status === 200) {
          const filterOrders = (prevOrders) => prevOrders.filter((order) => order.orderStatus !== "Confirm");
          setOrders(filterOrders);
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
    <div className="container mx-auto">
      <h1 className="bg-green-700 text-3xl font-semibold font-primary text-slate-50 text-center py-5">
        View Confirm Orders
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-start">#</th>
              <th className="text-start">Image</th>
              <th className="text-start">Product Information</th>
              <th className="text-start">Customer Information</th>
              <th className="text-start">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((orderInfo, index) => (
              <tr key={orderInfo?._id} className={index % 2 === 0 ? "bg-blue-100" : "bg-green-200"}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/product-details/${orderInfo?.productData?.id}`}>
                    <img
                      src={orderInfo?.productData?.imageUrl}
                      alt={orderInfo?.productData?.name}
                      className="w-24 h-auto object-cover"
                    />
                  </Link>
                </td>
                <td>
                  <div className="p-4">
                    <h2 className="text-lg font-primary font-semibold mb-2">
                      <Link to={`/product-details/${orderInfo?.productData?.id}`}>
                        {orderInfo?.productData?.name.slice(0, 50)}...
                      </Link>
                    </h2>
                    <p className="text-slate-800">{`Color: ${orderInfo?.productData?.color}`}</p>
                    <p className="text-slate-800">{`Size: ${orderInfo?.productData?.size}`}</p>
                    <p className="text-slate-800">{`Quantity: ${orderInfo?.productData?.quantity}`}</p>
                    <p className="text-slate-800">{`Original Price: ${orderInfo?.productData?.originalPrice}`}</p>
                    <p className="text-slate-800">{`Delivery Charge: ${orderInfo?.customerData?.deliveryCharge}`}</p>
                    <p className="text-slate-800">{`Total: ${
                      parseFloat(orderInfo?.productData?.originalPrice * orderInfo?.productData?.quantity) +
                      parseFloat(orderInfo?.customerData?.deliveryCharge)
                    }`}</p>
                  </div>
                </td>

                <td>
                  <div className="p-4">
                    <p>{`Data: ${orderInfo?.date} / ${orderInfo?.time}`}</p>
                    <p className="text-slate-800">{`Name: ${orderInfo?.customerData?.name}`}</p>
                    <p className="text-slate-800">
                      Email:{" "}
                      <a href={`mailto:${orderInfo?.customerData?.email}`} className="text-blue-500 hover:underline">
                        {orderInfo?.customerData?.email}
                      </a>
                    </p>
                    <p className="text-slate-800">
                      Mobile:{" "}
                      <a href={`tel:${orderInfo?.customerData?.mobileNumber}`} className="text-blue-500 hover:underline">
                        {orderInfo?.customerData?.mobileNumber}
                      </a>
                    </p>
                    <p className="text-slate-800">{`Delivery Area: ${orderInfo?.customerData?.deliveryArea}`}</p>
                    <p className="text-slate-800">{`Address: ${orderInfo?.customerData?.address}, ${orderInfo?.customerData?.district}`}</p>
                    <p className="text-slate-800">{`Comment: ${orderInfo?.customerData?.comment}`}</p>
                  </div>
                </td>

                <td className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => handleReceived(orderInfo?._id)}
                      disabled={isLoading}
                      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    >
                      Received
                    </button>

                    <button
                      onClick={() => handleCancel(orderInfo?._id)}
                      disabled={isLoading}
                      className="bg-slate-500 hover:bg-slate-700 text-white px-4 py-2 rounded-md"
                    >
                      Cancel
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

export default ConfirmOrders;
