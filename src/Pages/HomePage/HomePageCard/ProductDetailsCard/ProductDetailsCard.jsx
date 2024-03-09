import { useEffect, useState } from "react";
import { FaStar, FaShippingFast } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { TbTruckReturn } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";

// Add this function outside the component to calculate discounted price
const calculateDiscountedPrice = (originalPrice, offerPrice) => {
  if (offerPrice) {
    const price = parseFloat(originalPrice);
    const offer = parseFloat(offerPrice);
    const discountedPrice = price - offer;
    return `${discountedPrice.toFixed(2)}`;
  } else {
    return `${parseFloat(originalPrice).toFixed(2)}`;
  }
};
// Add this function outside the component to calculate discounted percentage
const calculateDiscountedPercentage = (originalPrice, offerPrice) => {
  if (offerPrice) {
    const price = parseFloat(originalPrice);
    const offer = parseFloat(offerPrice);
    const discountedPercentage = 100 - ((price - offer) / price) * 100;
    return `${discountedPercentage.toFixed(2)}%`;
  } else {
    return "";
  }
};

const ProductDetailsCard = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("N/A");
  const [selectedSize, setSelectedSize] = useState("N/A");
  const [product, setProduct] = useState(null);
  const [buyingProductInfo, setBuyingProductInfo] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleSelectedSize = (size) => {
    setSelectedSize(size);
  };

  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Get the product id from the URL
  const { id } = useParams();

  useEffect(() => {
    // Fetch all products
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        // Find the specific product based on the id parameter
        const selectedProduct = data.find((product) => product.id === parseInt(id));
        setProduct(selectedProduct);

        // Set buyingProductInfo when product data is available
        const productInfo = {
          id: id,
          name: selectedProduct?.name,
          imageUrl: selectedProduct?.images[0],
          color: selectedColor,
          size: selectedSize,
          quantity: selectedQuantity,
          originalPrice: calculateDiscountedPrice(selectedProduct?.originalPrice, selectedProduct?.offerPrice),
        };
        setBuyingProductInfo({ productInfo });
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [id, selectedColor, selectedSize, selectedQuantity]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleSelectQuantity = (value) => {
    setSelectedQuantity((prevQuantity) => prevQuantity + value);
  };

  return (
    <div className="mb-10 md:mb-16 lg:mb-20 container mx-auto">
      <div className="grid grid-cols-12 gap-3 md:gap-5 lg:gap-10 px-5 md:px-10 lg:px-0">
        <div className="col-span-12 md:col-span-5 mb-">
          <div className="flex justify-center items-center mb-3 lg:mb-5">
            <img
              src={product?.images[selectedImageIndex]}
              alt={product?.name}
              className="h-[250px] w-full md:h-[250px] lg:h-[450px] "
            />
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-3 mb-3 lg:mb-5">
            {product?.images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`w-full h-[50px] md:h-[50px] lg:h-[80px] cursor-pointer ${
                  index === selectedImageIndex ? "border-b-4 border-red-500" : ""
                }`}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>

          <div className="">
            <div className="mb-5 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md">
              <div className="mb-2">
                <span className="text-red-500 font-semibold">বিদ্র:---</span>
                <p>
                  ছবি এবং বর্ণনার সাথে পণ্যর সম্পূর্ণ মিল থাকা সত্ত্বেও আপনি পণ্য গ্রহণ করতে না চাইলে কুরিয়ার চার্জ ঢাকার
                  মধ্যে ৬০ টাকা এবং ঢাকার বাহিরে হলে ১২০ টাকা ডেলিভারি ম্যানকে প্রদান করে পণ্য সাথে সাথে রিটার্ন করবেন। পরে
                  কোন কমপ্লেইন বা রিটার্ন গ্রহণযোগ্য নয়!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-950 dark:text-slate-50 font-primary mb-5">
              {product.name}
            </h2>

            {/* Display original price with discounted price */}
            <div className="flex items-center text-xl md:text-2xl lg:text-3xl font-medium font-primary mb-5">
              <span className="text-orange-500 font-semibold !leading-none">
                ${calculateDiscountedPrice(product?.originalPrice, product?.offerPrice)}
              </span>
            </div>

            {/* Display discounted percentage if available */}
            <div className="h-[20px] flex items-center mb-5">
              {product?.offerPrice && (
                <div>
                  <div className="flex items-center text-sm md:text-lg font-medium">
                    <span className="text-gray-400 line-through !leading-none">${product?.price}</span>
                    <span className="text-green-500 mx-1">
                      -{calculateDiscountedPercentage(product?.originalPrice, product?.offerPrice)}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Display rating and number of reviews of the price */}
            <div className="flex justify-start items-center gap-1 mb-5">
              <FaStar className="w-4 h-4 text-amber-400"></FaStar>
              <FaStar className="w-4 h-4 text-amber-400"></FaStar>
              <FaStar className="w-4 h-4 text-amber-400"></FaStar>
              <FaStar className="w-4 h-4 text-amber-400"></FaStar>
              <FaStar className="w-4 h-4 text-amber-400"></FaStar>
              <span className="text-sm ml-1 text-slate-500 dark:text-slate-50">
                {product?.ratings} ({product.reviews} reviews)
              </span>
            </div>

            {/* Sizes part */}
            <div className="mb-5">
              {product?.sizes && product?.sizes.length > 0 ? (
                <>
                  <div className="">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-sm font-semibold">Size:</span>
                      <span className="text-sm font-bold">{selectedSize}</span>
                    </div>

                    <div className="col-span-10">
                      <div className="grid grid-cols-5 lg:grid-cols-8 mb-3">
                        {product?.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSelectedSize(size)}
                            className={`${
                              size === selectedSize
                                ? "border-2 border-red-500 w-16 h-8"
                                : "w-16 h-8 rounded-lg border border-slate-300 bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-widest text-sm text-slate-900"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            {/* Color Part */}
            <div className="mb-5">
              {product?.colors && product?.colors.length > 0 ? (
                <>
                  <div className="">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-sm font-semibold">Color:</span>
                      <span className="text-sm font-bold">{selectedColor}</span>
                    </div>

                    <div className="col-span-10">
                      <div className="grid grid-cols-5 lg:grid-cols-8 mb-3">
                        {product?.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => handleSelectedColor(color)}
                            className={`shadow-lg w-16 h-8 rounded-full ${
                              color === selectedColor ? "border-2 border-red-500" : ""
                            }`}
                            style={{ backgroundColor: `${color.toLowerCase()}` }}
                            title={color}
                          ></button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            {/* Buy now button */}
            <div className="mb-5">
              <div className="flex space-x-3.5">
                <div className="flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 px-2 py-3 sm:p-3.5 rounded-full">
                  <div className="nc-NcInputNumber flex items-center justify-between space-x-5 w-full">
                    <div className="nc-NcInputNumber__content flex items-center justify-between w-[104px] sm:w-28">
                      <button
                        className="w-8 h-8 rounded-full flex items-center justify-center border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-900 focus:outline-none hover:border-slate-700 dark:hover:border-slate-400 disabled:hover:border-slate-400 dark:disabled:hover:border-slate-500 disabled:opacity-50 disabled:cursor-default"
                        type="button"
                        onClick={() => handleSelectQuantity(-1)}
                        disabled={selectedQuantity === 1}
                      >
                        <FaMinus></FaMinus>
                      </button>
                      <span className="select-none block flex-1 text-center leading-none">{selectedQuantity}</span>
                      <button
                        className="w-8 h-8 rounded-full flex items-center justify-center border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-900 focus:outline-none hover:border-slate-700 dark:hover:border-slate-400 disabled:hover:border-slate-400 dark:disabled:hover:border-slate-500 disabled:opacity-50 disabled:cursor-default"
                        type="button"
                        onClick={() => handleSelectQuantity(1)}
                      >
                        <FaPlus></FaPlus>
                      </button>
                    </div>
                  </div>
                </div>

                <Link
                  to="/product-checkout"
                  state={{ data: buyingProductInfo }}
                  className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-green-700 text-slate-50 hover:bg-slate-100 hover:text-slate-800 dark:bg-slate-800  dark:text-slate-50 dark:hover:text-slate-800 shadow-xl flex-1 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                >
                  <IoBagCheckOutline className="w-6 h-6"></IoBagCheckOutline>
                  <span className="ml-3">Buy Now</span>
                </Link>
              </div>

              {/* Contact Information */}
              <div className="my-5">
                <div className="">
                  <p className="text-base font-semibold text-slate-800 dark:text-slate-50">
                    যেকোনো প্রয়োজনে Whatsapp: +880 1704-268005
                  </p>
                </div>
              </div>
            </div>

            {/* Offer card */}
            <div>
              <div className="hidden xl:block">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                  <div className="flex flex-col p-5 rounded-2xl bg-red-50 dark:bg-opacity-90">
                    <div>
                      <FaShippingFast className="w-6 h-6"></FaShippingFast>
                    </div>
                    <div className="mt-2.5">
                      <p className="font-semibold text-slate-900">Free shipping</p>
                      <p className="text-slate-500 mt-0.5 text-sm">On orders over $50.00</p>
                    </div>
                  </div>
                  <div className="flex flex-col p-5 rounded-2xl bg-sky-50 dark:bg-opacity-90">
                    <div>
                      <TbTruckReturn className="w-6 h-6"></TbTruckReturn>
                    </div>
                    <div className="mt-2.5">
                      <p className="font-semibold text-slate-900">Very easy to return</p>
                      <p className="text-slate-500 mt-0.5 text-sm">Just phone number.</p>
                    </div>
                  </div>
                  <div className="flex flex-col p-5 rounded-2xl bg-green-50 dark:bg-opacity-90">
                    <div>
                      <TbWorld className="w-6 h-6"></TbWorld>
                    </div>
                    <div className="mt-2.5">
                      <p className="font-semibold text-slate-900">Nationwide Delivery</p>
                      <p className="text-slate-500 mt-0.5 text-sm">Fast delivery nationwide.</p>
                    </div>
                  </div>
                  <div className="flex flex-col p-5 rounded-2xl bg-amber-50 dark:bg-opacity-90">
                    <div>
                      <HiOutlineCurrencyBangladeshi className="w-6 h-6"></HiOutlineCurrencyBangladeshi>
                    </div>
                    <div className="mt-2.5">
                      <p className="font-semibold text-slate-900">Refunds policy</p>
                      <p className="text-slate-500 mt-0.5 text-sm">60 days return for any reason</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
