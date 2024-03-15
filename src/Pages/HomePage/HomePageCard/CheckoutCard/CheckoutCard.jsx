/* eslint-disable react/no-unescaped-entities */
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaTruckArrowRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CheckoutCard = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const productData = location?.state?.data;

  const [customerData, setCustomerData] = useState({
    name: "",
    mobileNumber: "",
    district: "",
    address: "",
    comment: "",
    addressType: "Home",
    deliveryArea: "Inside of Dhaka",
    paymentSystem: "Cash On Delivery",
    deliveryCharge: 60.0,
  });

  const [disableConfirmButton, setDisableConfirmButton] = useState(true);

  useEffect(() => {
    // Check if any required field is empty
    const isAnyFieldEmptyExceptComment = Object.entries(customerData).some(([key, value]) => {
      return key !== "comment" && (value === "" || value === null);
    });
    setDisableConfirmButton(isAnyFieldEmptyExceptComment);
  }, [customerData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate mobileNumber field
    if (name === "mobileNumber") {
      // Ensure the value is a non-negative integer
      if (!/^\d*$/.test(value) || parseInt(value) < 0) {
        // Display an error message or handle it based on your UI/UX requirements
        console.error("Invalid input for mobile number");
        return;
      }

      // Check if the entered mobile number is within the allowed length
      if (value.length <= 11) {
        // Update the state
        setCustomerData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      } else {
        // Display a message or handle it based on your UI/UX requirements
        alert("Number must be 11 digit");
      }
    } else {
      // For other fields, update the state as usual
      setCustomerData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleDeliveryAreaChange = (value) => {
    let deliveryCharge = 0;

    // Update deliveryArea based on the selected value
    setCustomerData((prevData) => ({
      ...prevData,
      deliveryArea: value,
    }));

    // Set delivery charge based on the selected delivery area
    if (value === "Inside of Dhaka") {
      deliveryCharge = 60.0;
    } else if (value === "Outside of Dhaka") {
      deliveryCharge = 120.0;
    }

    // Update delivery charge in customerData with 2 decimal places
    setCustomerData((prevData) => ({
      ...prevData,
      deliveryCharge: parseFloat(deliveryCharge.toFixed(2)),
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
    fetch("https://server.shekshops.com/postOrder", {
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
      <div className="mb-16 px-5 md:px-10 lg:px-0">
        <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">Checkout</h2>
        <div className="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-400">
          <Link className="hover:underline" to="/">
            Homepage
          </Link>
          <span className="text-xs mx-1 sm:mx-1.5">/</span>
          <Link className="hover:underline" to={`/product-details/${productData?.productInfo?.id}`}>
            Product Details
          </Link>
          <span className="text-xs mx-1 sm:mx-1.5">/</span>
          <span className="underline">Checkout</span>
        </div>
      </div>

      <div className="grid grid-cols-12 px-5 md:px-10 lg:px-0">
        <div className="col-span-12 lg:col-span-7 order-1 border border-slate-200 mt-5 md:mt-7 lg:mt-0 lg:me-10 rounded-xl overflow-hidden">
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
                    <label className="font-medium text-slate-900 dark:text-slate-200 text-sm">নাম</label>
                    <input
                      name="name"
                      value={customerData.name}
                      onChange={handleChange}
                      className="block w-full border border-slate-200 mb-2 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-2"
                      type="text"
                      placeholder="আপনার নাম লিখুন"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-slate-900 dark:text-slate-200 text-sm">নাম্বার</label>
                    <input
                      name="mobileNumber"
                      value={customerData.mobileNumber}
                      onChange={handleChange}
                      className="block w-full border border-slate-200 mb-2 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-2"
                      type="number"
                      placeholder="আপনার মোবাইল নাম্বার লিখুন"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                  <div>
                    <label className="font-medium text-slate-900 dark:text-slate-200 text-sm">জেলা</label>
                    <input
                      name="district"
                      value={customerData.district}
                      onChange={handleChange}
                      className="block w-full border border-slate-200 mb-2 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-2"
                      type="text"
                      placeholder="আপনার জেলা লিখুন"
                    />
                  </div>
                  <div className="">
                    <label className="font-medium text-slate-900 dark:text-slate-200 text-sm">ঠিকানা</label>
                    <input
                      name="address"
                      value={customerData.address}
                      onChange={handleChange}
                      className="block w-full border border-slate-200 mb-2 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-2"
                      type="text"
                      placeholder="আপনার পূর্ণাঙ্গ ঠিকানা লিখুন"
                    />
                  </div>
                </div>

                <div className="">
                  <label className="font-medium text-slate-900 dark:text-slate-200 text-sm">মন্তব্য</label>
                  <input
                    name="comment"
                    value={customerData.comment}
                    onChange={handleChange}
                    className="block w-full border border-slate-200 mb-2 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-2"
                    type="textarea"
                    placeholder="আপনার কোনো মন্তব্য থাকলে লিখুন
                    "
                  />
                </div>

                <div>
                  <label className="font-medium text-slate-900 dark:text-slate-200 text-sm">Delivery area</label>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
                    <div className="flex items-center text-sm sm ">
                      <input
                        className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                        type="radio"
                        value="60.00"
                        name="deliveryArea"
                        checked={customerData.deliveryArea === "Inside of Dhaka"}
                        onChange={() => handleDeliveryAreaChange("Inside of Dhaka")}
                      />
                      <label className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                        <span className="text-sm font-medium">
                          Inside of Dhaka <span className="font-light">($60)</span>
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center text-sm sm ">
                      <input
                        className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                        type="radio"
                        value="120.00"
                        name="deliveryArea"
                        checked={customerData.deliveryArea === "Outside of Dhaka"}
                        onChange={() => handleDeliveryAreaChange("Outside of Dhaka")}
                      />
                      <label className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                        <span className="text-sm font-medium">
                          Outside of Dhaka <span className="font-light">($120)</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-medium text-slate-900 dark:text-slate-200 text-sm">Payment system</label>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div className="flex items-center text-sm sm ">
                      <input
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
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 order-2 border border-slate-200 mb-5 md:mb-7 lg:mb-0 lg:ms-10 rounded-xl overflow-hidden">
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
                  <span className="text-gray-700">Color: {productData?.productInfo?.color}</span>
                </div>
                <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                <div className="flex items-center space-x-1.5">
                  <span>Size: {productData?.productInfo?.size}</span>
                </div>
                <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                <div className="flex items-center space-x-1.5">
                  <span>Quantity: {productData?.productInfo?.quantity}</span>
                </div>
              </div>

              <div className="col-span-12 flex items-center text-xl font-medium font-primary mb-3">
                <span className="text-orange-500 font-semibold !leading-none">
                  ${productData?.productInfo?.originalPrice}
                </span>
              </div>

              <div className="flex justify-end items-center">
                <button className="text-base text-blue-600 font-semibold">Remove</button>
              </div>
            </div>
          </div>

          {/* Pricing count part */}
          <div className="py-7 px-3 border-b">
            <div className="flex justify-between items-center mb-4">
              <span className="text-purple-600 text-base font-bold">Sub-Total:</span>
              <span className="text-lg font-bold text-purple-600">${productData?.productInfo?.originalPrice}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-blue-600 text-base font-bold">{customerData?.deliveryArea}:</span>
              <span className="text-lg font-bold text-blue-600">${customerData?.deliveryCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-600 text-base font-bold">Total:</span>
              <span className="text-lg font-bold text-green-600">
                $
                {parseFloat(productData?.productInfo?.originalPrice * productData?.productInfo?.quantity) +
                  parseFloat(customerData?.deliveryCharge)}
              </span>
            </div>
          </div>

          <div className="py-7 px-3">
            <div className="flex flex-col sm:flex-row pt-6 gap-3">
              <button
                onClick={handleSaveAndConfirmOrder}
                disabled={disableConfirmButton}
                className={`relative h-auto w-full inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ${
                  disableConfirmButton
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-700 text-slate-50 hover:bg-slate-100 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-50 dark:hover:text-slate-800 shadow-xl"
                } flex-1 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0`}
              >
                Confirm Order
              </button>

              <Link
                to={`/product-details/${productData?.productInfo?.id}`}
                className="relative h-auto w-full inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-red-700 text-slate-50 hover:bg-slate-100 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-50 dark:hover:text-slate-800 shadow-xl flex-1 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
              >
                Cancel Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
