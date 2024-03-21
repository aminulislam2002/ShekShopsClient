import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [myCartProducts, setMyCartProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchMyCartProducts = async () => {
      try {
        if (user && user.email) {
          const response = await fetch(`https://server.shekshops.com/cartProducts?email=${user.email}`);
          if (response.ok) {
            const data = await response.json();
            setMyCartProducts(data);
          } else {
            console.error("Error fetching cart products");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMyCartProducts();
  }, [user]);

  const handleCheckboxChange = (productId) => {
    const selectedIndex = selectedProducts.indexOf(productId);
    if (selectedIndex === -1) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      const updatedSelectedProducts = [...selectedProducts];
      updatedSelectedProducts.splice(selectedIndex, 1);
      setSelectedProducts(updatedSelectedProducts);
    }
  };

  const handleDeleteProduct = async (productId) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const response = await fetch(`https://server.shekshops.com/deleteProductFromCart/${productId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // Update the products state without the deleted product
          const filterProducts = (prevProducts) => prevProducts.filter((product) => product._id !== productId);
          setMyCartProducts(filterProducts);

          // Show success alert
          Swal.fire({
            title: "Success!",
            text: "Product deleted successfully.",
            icon: "success",
          });
        } else {
          console.error("Error deleting product");

          // Show error alert
          Swal.fire({
            title: "Error!",
            text: "Error deleting product. Please try again later.",
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
    }
  };

  const selectedProductsDetails = myCartProducts.filter((product) => selectedProducts.includes(product._id));

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProducts = myCartProducts.map((product) => {
      if (product._id === productId) {
        return {
          ...product,
          quantity: newQuantity,
        };
      }
      return product;
    });
    setMyCartProducts(updatedProducts);
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedQuantity = myCartProducts.find((product) => product._id === productId).quantity + 1;
    handleQuantityChange(productId, updatedQuantity);
  };

  const handleDecreaseQuantity = (productId) => {
    const currentQuantity = myCartProducts.find((product) => product._id === productId).quantity;
    if (currentQuantity > 1) {
      const updatedQuantity = currentQuantity - 1;
      setSelectedQuantity(updatedQuantity);
      handleQuantityChange(productId, updatedQuantity);
    }
  };

  const getSliceLength = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 400) {
      return 28; // Adjust the length for small screens
    } else if (windowWidth <= 768) {
      return 55; // Adjust the length for medium screens
    } else {
      return 70; // Default length for large screens
    }
  };

  const getCartSliceLength = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 400) {
      return 42; // Adjust the length for small screens
    } else if (windowWidth <= 768) {
      return 55; // Adjust the length for medium screens
    } else {
      return 30; // Default length for large screens
    }
  };

  return (
    <div className="lg:w-[1200px] mx-auto py-2 md:py-3 lg:py-5 px-2.5 md:px-7 lg:px-0">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-primary mb-2 md:mb-3 lg:mb-5 text-center lg:text-start">
        My Cart
      </h1>

      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8 mb-5 lg:mb-0 lg:me-5 rounded-md border">
          {myCartProducts.map((product) => (
            <div key={product?._id} className="rounded-lg p-2.5 lg:p-4 flex items-center mb-4">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(product._id)}
                checked={selectedProducts.includes(product._id)}
                className="mr-4"
              />
              <div className="flex-shrink-0 w-20 lg:w-24">
                <img src={product?.imageUrl} alt={product?.name} className="w-full h-auto rounded-md" />
              </div>
              <div className="flex-grow ml-2 lg:ml-3">
                <Link
                  className="text-base lg:text-lg font-primary font-semibold dark:text-slate-50 transition-colors mb-1 hover:underline hover:text-blue-500"
                  to={`/product-details/${product?.id}`}
                >
                  {product?.name?.length >= getSliceLength()
                    ? product?.name.slice(0, getSliceLength()) + "..."
                    : product?.name}
                </Link>

                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex text-gray-600 text-sm md:text-base">
                      <span className="mr-2">
                        {product?.color !== "N/A" ? (
                          <>
                            <span className="font-semibold text-sm md:text-base">Color:</span> <span>{product?.color}</span>
                          </>
                        ) : (
                          <></>
                        )}
                      </span>
                      <span className="mr-2">
                        {product?.size !== "N/A" ? (
                          <>
                            <span className="font-semibold text-sm md:text-base">Size:</span> <span>{product?.size}</span>
                          </>
                        ) : (
                          <></>
                        )}
                      </span>
                    </div>
                    <div className="font-semibold text-sm md:text-base">
                      Price:{" "}
                      <span className="text-sm md:text-base text-amber-600 font-primary">৳{product?.originalPrice}</span>
                    </div>
                    <div className="font-semibold text-sm md:text-base">
                      Sub-Total:{" "}
                      <span className="text-sm md:text-base text-purple-600 font-primary">
                        ৳{product?.originalPrice * product?.quantity}
                      </span>
                    </div>
                  </div>

                  <div>
                    {/* Quantity update buttons */}
                    <div className="w-full flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 rounded-full">
                      <div className="flex items-center justify-between space-x-5 w-full">
                        <div className="flex items-center justify-between w-[80px]">
                          <button
                            className="w-5 md:w-7 h-5 md:h-7 rounded-full flex items-center justify-center border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-900 focus:outline-none hover:border-slate-700 dark:hover:border-slate-400 disabled:hover:border-slate-400 dark:disabled:hover:border-slate-500 disabled:opacity-50 disabled:cursor-default"
                            type="button"
                            onClick={() => handleDecreaseQuantity(product._id)}
                            disabled={selectedQuantity === "1"}
                          >
                            <FaMinus className="w-2 md:w-3 h-2 md:h-3 font-normal"></FaMinus>
                          </button>
                          <span className="select-none block flex-1 text-center text-sm md:text-base leading-none">
                            {product?.quantity}
                          </span>
                          <button
                            className="w-5 md:w-7 h-5 md:h-7 rounded-full flex items-center justify-center border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-900 focus:outline-none hover:border-slate-700 dark:hover:border-slate-400 disabled:hover:border-slate-400 dark:disabled:hover:border-slate-500 disabled:opacity-50 disabled:cursor-default"
                            type="button"
                            onClick={() => handleIncreaseQuantity(product._id)}
                          >
                            <FaPlus className="w-2 md:w-3 h-2 md:h-3 font-normal"></FaPlus>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Delete button */}
                    <div className="flex justify-center items-center">
                      <button onClick={() => handleDeleteProduct(product._id)} className="text-red-600 mt-2">
                        <RiDeleteBin6Line className="w-4 md:w-6 h-6 md:h-8"></RiDeleteBin6Line>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-12 lg:col-span-4 mb-5 lg:mb-0 lg:ms-5 rounded-md border">
          <div className="border-b">
            <h3 className="text-lg font-semibold font-primary px-3 py-5 lg:p-5">Order summary</h3>
          </div>
          <div className="first:pt-0 last:pb-0">
            {selectedProducts.length > 0 ? (
              <div>
                <ul className="p-3">
                  {myCartProducts
                    .filter((product) => selectedProducts.includes(product._id))
                    .map((product) => (
                      <li key={product?._id} className="mb-2 font-primary">
                        <span className="font-semibold text-sm md:text-base">
                          {product?.name?.length >= getCartSliceLength()
                            ? product?.name.slice(0, getCartSliceLength()) + "..."
                            : product?.name}
                        </span>{" "}
                        -{" "}
                        <span className="text-purple-600 font-bold text-sm md:text-base">
                          ৳{product?.originalPrice * product?.quantity}
                        </span>
                      </li>
                    ))}
                </ul>
                <div className="p-3 border-t font-bold text-lg flex justify-between items-center font-primary">
                  <span className="me-1">Total Price:</span>
                  <span className="text-blue-500">
                    ৳
                    {myCartProducts
                      .filter((product) => selectedProducts.includes(product?._id))
                      .reduce((total, product) => total + product?.originalPrice * product?.quantity, 0)}
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className="px-3 mb-2 lg:mb-0">
              <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 uppercase">
                <Link to="/product-checkout" state={{ data: selectedProductsDetails }}>
                  PROCEED TO CHECKOUT
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
