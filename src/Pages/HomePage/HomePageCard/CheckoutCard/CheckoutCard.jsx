/* eslint-disable react/no-unescaped-entities */
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaTruckArrowRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const CheckoutCard = () => {
  const location = useLocation();
  const productData = location?.state?.data;

  const [customerData, setCustomerData] = useState({
    name: "",
    mobileNumber: "",
    city: "",
    address: "",
    addressType: "Home",
    deliveryArea: "Dhaka",
    paymentSystem: "Cash On Delivery",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressTypeChange = (value) => {
    setCustomerData((prevData) => ({
      ...prevData,
      addressType: value,
    }));
  };

  const handleDeliveryAreaChange = (value) => {
    setCustomerData((prevData) => ({
      ...prevData,
      deliveryArea: value,
    }));
  };

  const handlePaymentSystemChange = (value) => {
    setCustomerData((prevData) => ({
      ...prevData,
      paymentSystem: value,
    }));
  };

  const handleSaveAndConfirmOrder = () => {
    const orderInfo = {
      productData: productData?.productInfo,
      customerData: customerData,
    };

    // Assuming you have the fetch API available in your environment
    fetch("https://media-master-hub-server.vercel.app/postOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to save order.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the server response

        // Success message with SweetAlert
        Swal.fire({
          icon: "success",
          title: "Order Saved!",
          text: "Your order has been successfully saved.",
        });
      })
      .catch((error) => {
        console.error("Error saving order:", error);

        // Error message with SweetAlert
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to save order. Please try again.",
        });
      });
  };

  return (
    <div className="mb-24 lg:mb-32 container mx-auto">
      <div className="mb-16">
        <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">Checkout</h2>
        <div className="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-400">
          <Link className="hover:underline" to="/">
            Homepage
          </Link>
          <span className="text-xs mx-1 sm:mx-1.5">/</span>
          <Link className="hover:underline" to="">
            Product Details
          </Link>
          <span className="text-xs mx-1 sm:mx-1.5">/</span>
          <span className="underline">Checkout</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-7 border border-slate-200">
          <div className="scroll-mt-24">
            <div className=" dark:border-slate-700 rounded-xl ">
              <div className="p-6 flex flex-col sm:flex-row items-start">
                <span className="hidden sm:block">
                  <FaTruckArrowRight className="w-5 h-5"></FaTruckArrowRight>
                </span>
                <div className="sm:ml-8">
                  <h3 className=" text-slate-700 dark:text-slate-300 flex ">
                    <span className="uppercase">SHIPPING ADDRESS</span>
                    <IoCheckmarkDoneSharp className="w-5 h-5 ms-2"></IoCheckmarkDoneSharp>
                  </h3>
                  <div className="font-semibold mt-1 text-sm"></div>
                </div>
                <button className="py-2 px-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 mt-5 sm:mt-0 sm:ml-auto text-sm font-medium rounded-lg">
                  Change
                </button>
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6 block">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                  <div>
                    <label className="font-medium text-slate-900 dark:text-slate-200 text-sm" data-nc-id="Label">
                      Name
                    </label>
                    <input
                      name="name"
                      value={customerData.name}
                      onChange={handleChange}
                      className="block w-full border border-slate-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-slate-900 dark:text-slate-200 text-sm" data-nc-id="Label">
                      Mobile Number
                    </label>
                    <input
                      name="mobileNumber"
                      value={customerData.mobileNumber}
                      onChange={handleChange}
                      className="block w-full border border-slate-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                  <div>
                    <label className="font-medium text-slate-900 dark:text-slate-200 text-sm" data-nc-id="Label">
                      City
                    </label>
                    <input
                      name="city"
                      value={customerData.city}
                      onChange={handleChange}
                      className="block w-full border border-slate-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="">
                    <label className="font-medium text-slate-900 dark:text-slate-200 text-sm" data-nc-id="Label">
                      Address
                    </label>
                    <input
                      name="address"
                      value={customerData.address}
                      onChange={handleChange}
                      className="block w-full border border-slate-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-medium text-slate-900 dark:text-slate-200 text-sm" data-nc-id="Label">
                    Address type
                  </label>
                  <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div className="flex items-center text-sm sm ">
                      <input
                        id="Address-type-home"
                        className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                        type="radio"
                        value="Home"
                        name="addressType"
                        checked={customerData.addressType === "Home"}
                        onChange={() => handleAddressTypeChange("Home")}
                      />
                      <label className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                        <span className="text-sm font-medium">
                          Home <span className="font-light">(All Day Delivery)</span>
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center text-sm sm ">
                      <input
                        id="Address-type-home"
                        className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                        type="radio"
                        value="Office"
                        name="addressType"
                        checked={customerData.addressType === "Office"}
                        onChange={() => handleAddressTypeChange("Office")}
                      />
                      <label className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                        <span className="text-sm font-medium">
                          Office <span className="font-light">(Delivery 9 AM - 5 PM)</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-medium text-slate-900 dark:text-slate-200 text-sm" data-nc-id="Label">
                    Delivery area
                  </label>
                  <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div className="flex items-center text-sm sm ">
                      <input
                        id="Address-type-home"
                        className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                        type="radio"
                        value="Dhaka"
                        name="deliveryArea"
                        checked={customerData.deliveryArea === "Dhaka"}
                        onChange={() => handleDeliveryAreaChange("Dhaka")}
                      />
                      <label className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                        <span className="text-sm font-medium">
                          Dhaka <span className="font-light">($50)</span>
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center text-sm sm ">
                      <input
                        id="Address-type-home"
                        className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                        type="radio"
                        value="Outside of Dhaka"
                        name="deliveryArea"
                        checked={customerData.deliveryArea === "Outside of Dhaka"}
                        onChange={() => handleDeliveryAreaChange("Outside of Dhaka")}
                      />
                      <label className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                        <span className="text-sm font-medium">
                          Outside of Dhaka <span className="font-light">($100)</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-medium text-slate-900 dark:text-slate-200 text-sm" data-nc-id="Label">
                    Payment system
                  </label>
                  <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div className="flex items-center text-sm sm ">
                      <input
                        id="Address-type-home"
                        className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                        type="radio"
                        value="Cash On Delivery"
                        name="paymentSystem"
                        checked={customerData.paymentSystem === "Cash On Delivery"}
                        onChange={() => handlePaymentSystemChange("Cash On Delivery")}
                      />
                      <label className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                        <span className="text-sm font-medium">Cash on delivery</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row pt-6">
                  <button
                    onClick={handleSaveAndConfirmOrder}
                    className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                  >
                    Save and Confirm Order
                  </button>
                  <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm font-medium py-3 px-4 sm:py-3.5 sm:px-6 text-slate-700 dark:bg-slate-900 dark:text-slate-300 bg-gray-100 dark:hover:bg-slate-800 mt-3 sm:mt-0 sm:ml-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5 border border-slate-200 rounded-xl overflow-hidden">
          <div className="border-b">
            <h3 className="text-lg font-semibold p-6">Order summary</h3>
          </div>

          <div className="flex py-7 first:pt-0 last:pb-0 px-3 border-b">
            <div className="h-36 w-24 sm:w-28 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100 relative">
              <img
                src={productData?.productInfo?.imageUrl}
                alt={productData?.productInfo?.name}
                className="w-full h-full object-cover"
              />
              <a className="absolute inset-0" href="/product-detail"></a>
            </div>

            <div className="ml-3 sm:ml-6 flex flex-1 flex-col">
              <h3 className="text-base font-semibold font-primary mb-3">
                <p className="text-primary-6000">{productData?.productInfo?.name}</p>
              </h3>

              <div className="flex text-sm text-slate-600 dark:text-slate-300 mb-3">
                <div className="flex items-center space-x-1.5">
                  <span className="text-gray-700">{productData?.productInfo?.color}</span>
                </div>
                <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                <div className="flex items-center space-x-1.5">
                  <span>{productData?.productInfo?.size}</span>
                </div>
              </div>

              <div className="col-span-12 flex items-center text-xl font-medium font-primary mb-3">
                <span className="text-orange-500 font-semibold !leading-none">{productData?.productInfo?.price}</span>
              </div>

              <div className="flex justify-end items-center">
                <button className="text-base text-blue-600 font-semibold">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
