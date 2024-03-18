/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ProductCard from "../../HomePageCard/ProductCard/ProductCard";

const HundredTakaItems = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const [displayedProductsCount, setDisplayedProductsCount] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://server.shekshops.com/products");
        if (response.ok) {
          const data = await response.json();
          // Filter products with original price 100 or less
          const filterProducts = data.filter((item) => parseFloat(item.originalPrice - item.offerPrice) <= 100);
          console.log("Filter Products", filterProducts);
          setProducts(filterProducts);
        } else {
          console.error("Error fetching products");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFavoriteClick = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId) ? prevFavorites.filter((id) => id !== productId) : [...prevFavorites, productId]
    );
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products.filter((product, index) => index < displayedProductsCount)
      : products
          .filter((product) => product?.category.toLowerCase() === selectedCategory.toLowerCase())
          .slice(0, displayedProductsCount);

  const handleShowMoreClick = () => {
    const currentDisplayedCount = displayedProductsCount;
    const newDisplayedCount = currentDisplayedCount + 10;
    setDisplayedProductsCount(newDisplayedCount);
    setShowAllProducts(newDisplayedCount >= products.length);
  };

  const handleShowLessClick = () => {
    setDisplayedProductsCount(10); // Display only 10 products
    setShowAllProducts(false);
  };

  return (
    <div className="lg:w-[1200px] lg:mx-auto px-2.5 md:px-5 lg:px-0 my-10 md:my-14 lg:my-16">
      {/* Title of this section */}

      <div className="relative mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
        <div className="px-5 md:px-10 lg:px-0">
          <h2 className="font-primary text-3xl md:text-4xl font-semibold">
            Hundred Taka Items<span>! </span>
          </h2>
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
                  selectedCategory === "all"
                    ? "bg-green-700 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                    : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                }
                 focus:outline-none`}
                  onClick={() => setSelectedCategory("all")}
                >
                  All items
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                 ${
                   selectedCategory === "bag"
                     ? "bg-green-700 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                     : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                 }
                  focus:outline-none`}
                  onClick={() => setSelectedCategory("bag")}
                >
                  Bag
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                 ${
                   selectedCategory === "women"
                     ? "bg-green-700 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                     : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                 }
                  focus:outline-none`}
                  onClick={() => setSelectedCategory("women")}
                >
                  Women
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                ${
                  selectedCategory === "mens"
                    ? "bg-green-700 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                    : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                }
                 focus:outline-none`}
                  onClick={() => setSelectedCategory("mens")}
                >
                  Mens
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                ${
                  selectedCategory === "kitchen"
                    ? "bg-green-700 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                    : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                }
                 focus:outline-none`}
                  onClick={() => setSelectedCategory("kitchen")}
                >
                  Kitchen
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                ${
                  selectedCategory === "travel"
                    ? "bg-green-700 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                    : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                }
                 focus:outline-none`}
                  onClick={() => setSelectedCategory("travel")}
                >
                  Travel
                </button>
              </li>
              <li>
                <button
                  className={`block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full
                ${
                  selectedCategory === "gadget"
                    ? "bg-green-700 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
                    : "text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
                }
                 focus:outline-none`}
                  onClick={() => setSelectedCategory("gadget")}
                >
                  Gadget
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Products Section */}

      <div className="grid gap-2 md:gap-3 lg:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            product={product}
            handleFavoriteClick={handleFavoriteClick}
            favorites={favorites}
          />
        ))}
      </div>

      {/* Show more/less button Section */}
      <div className="flex mt-16 justify-center items-center">
        <button
          className={`relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-green-700 text-slate-50 hover:bg-slate-200 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-800 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0
  ${filteredProducts.length >= 4 ? "block" : "hidden"}`}
          onClick={showAllProducts ? handleShowLessClick : handleShowMoreClick}
        >
          {showAllProducts ? <>Show Less</> : <>Show Me More</>}
        </button>
      </div>
    </div>
  );
};

export default HundredTakaItems;
