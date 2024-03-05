import { useState, useEffect } from "react";

const OrderProduct = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://media-master-hub-server.vercel.app/order");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-bold mb-8">Order History</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border p-4 rounded-md transition duration-300 ease-in-out transform hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">{order.productData.name}</h2>
            <img
              className="w-full h-32 object-cover mb-4 rounded-md"
              src={order.productData.imageUrl}
              alt={order.productData.name}
            />
            <div className="flex justify-between text-gray-600">
              <div>
                <p>Color: {order.productData.color}</p>
                <p>Size: {order.productData.size}</p>
                <p>Quantity: {order.productData.quantity}</p>
              </div>
              <div>
                <p>Price: {order.productData.price}</p>
              </div>
            </div>
            <hr className="my-4 border-t" />
            <div className="text-sm text-gray-500">
              <h3 className="font-semibold mb-2">Customer Information</h3>
              <p>Name: {order.customerData.name}</p>
              <p>Mobile Number: {order.customerData.mobileNumber}</p>
              <p>City: {order.customerData.city}</p>
              <p>Address: {order.customerData.address}</p>
              <p>Address Type: {order.customerData.addressType}</p>
              <p>Delivery Area: {order.customerData.deliveryArea}</p>
              <p>Payment System: {order.customerData.paymentSystem}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderProduct;
