/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import ProductCard from "../../HomePageCard/ProductCard/ProductCard";

const TrendingNow = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const [displayedProductsCount, setDisplayedProductsCount] = useState(10);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleFavoriteClick = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId) ? prevFavorites.filter((id) => id !== productId) : [...prevFavorites, productId]
    );
  };

  const filteredProducts =
    selectedCategory === "All Items"
      ? products.filter((product, index) => index < displayedProductsCount)
      : products.filter((product) => product.category === selectedCategory).slice(0, displayedProductsCount);

  const handleShowMoreClick = () => {
    const currentDisplayedCount = displayedProductsCount;
    const newDisplayedCount = currentDisplayedCount + 10;
    setDisplayedProductsCount(newDisplayedCount);
    setShowAllProducts(newDisplayedCount >= products.length);
  };

  const handleShowLessClick = () => {
    setDisplayedProductsCount(10); // Display only 4 products
    setShowAllProducts(false);
  };

  return (
    <div className="my-24 lg:my-32 container mx-auto">
      {/* Title of this section */}

      <div className="relative mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
        <div>
          <h2 className="font-primary text-3xl md:text-4xl font-semibold">
            What's trending now<span>! </span>
          </h2>
          <span className="mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
            Discover the most trending products in Swift Mart.
          </span>
        </div>
      </div>

      {/* Product Filter Section */}

      <div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0 lg:space-x-2 ">
          <nav className="relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar" data-nc-id="Nav">
            <ul className="flex sm:space-x-2 gap-1 lg:gap-0">
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                ${
                  selectedCategory === "All Items"
                    ? "bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                    : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                }
                 focus:outline-none`}
                  onClick={() => setSelectedCategory("All Items")}
                >
                  All items
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                 ${
                   selectedCategory === "Women"
                     ? "bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                     : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                 }
                  focus:outline-none`}
                  onClick={() => setSelectedCategory("Women")}
                >
                  Women
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                ${
                  selectedCategory === "Mens"
                    ? "bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                    : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                }
                 focus:outline-none`}
                  onClick={() => setSelectedCategory("Mens")}
                >
                  Mens
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                ${
                  selectedCategory === "Kids"
                    ? "bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                    : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                }
                 focus:outline-none`}
                  onClick={() => setSelectedCategory("Kids")}
                >
                  Kids
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                ${
                  selectedCategory === "Sports"
                    ? "bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                    : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                }
                 focus:outline-none`}
                  onClick={() => setSelectedCategory("Sports")}
                >
                  Sports
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                ${
                  selectedCategory === "Beauty"
                    ? "bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                    : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                }
                 focus:outline-none`}
                  onClick={() => setSelectedCategory("Beauty")}
                >
                  Beauty
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                ${
                  selectedCategory === "Jewelry"
                    ? "bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                    : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                }
                 focus:outline-none`}
                  onClick={() => setSelectedCategory("Jewelry")}
                >
                  Jewelry
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                ${
                  selectedCategory === "Electronics"
                    ? "bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                    : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                }
                 focus:outline-none`}
                  onClick={() => setSelectedCategory("Electronics")}
                >
                  Electronics
                </button>
              </li>
            </ul>
          </nav>
          <span className="block flex-shrink-0">
            <button
              className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium pl-4 py-2.5 sm:pl-6 disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-800 dark:text-slate-50 hover:bg-slate-800 text-slate-50 shadow-xl w-full !pr-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
              // onClick={handleSubmit(onSubmit)}
            >
              <FaFilter className="w-6 h-6" />
              <span className="block truncate ml-2.5">Filter</span>
              <span className="absolute top-1/2 -translate-y-1/2 right-5">
                <FiChevronDown className="w-6 h-6"></FiChevronDown>
              </span>
            </button>
          </span>
        </div>
      </div>

      {/* Products Section */}

      <div className="grid gap-3 md:gap-4 lg:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            product={product}
            handleFavoriteClick={handleFavoriteClick}
            favorites={favorites}
          />
        ))}
      </div>

      {/* Show more/less button Section */}
      <div className="flex mt-16 justify-center items-center">
        <button
          className={`relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-50 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0
  ${filteredProducts.length >= 4 ? "block" : "hidden"}`}
          onClick={showAllProducts ? handleShowLessClick : handleShowMoreClick}
        >
          {showAllProducts ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Show less
            </>
          ) : (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Show me more
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TrendingNow;
