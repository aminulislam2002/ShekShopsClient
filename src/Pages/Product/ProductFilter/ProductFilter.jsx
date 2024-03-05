import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const ProductFilter = () => {
  // State to store selected sizes
  const [selectedSizes, setSelectedSizes] = useState([]);
  // State to store selected colors
  const [selectedColors, setSelectedColors] = useState([]);
  // State to store selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);
  // State to store selected price ranges
  const [selectedPrices, setSelectedPrices] = useState([]);

  const handleCheckboxChange = (value, type) => {
    switch (type) {
      case "size":
        handleFilterChange(value, selectedSizes, setSelectedSizes);
        break;
      case "color":
        handleFilterChange(value, selectedColors, setSelectedColors);
        break;
      case "category":
        handleFilterChange(value, selectedCategories, setSelectedCategories);
        break;
      case "price":
        handleFilterChange(value, selectedPrices, setSelectedPrices);
        break;
      default:
        break;
    }
  };

  const handleFilterChange = (value, selectedValues, setSelectedValues) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  console.log(selectedSizes);

  return (
    <div>
      {" "}
      <div>
        <div className="opacity-100">
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700 my-8"></div>
          <div className="flex lg:space-x-4">
            <div className="hidden lg:flex flex-1 space-x-4">
              {/* ... Other components */}

              {/* Price Range dropdown */}

              <div className="flex items-center justify-center ps-5 pe-12 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-900 focus:outline-none">
                <details className="dropdown">
                  <summary className="m-1 cursor-pointer text-lg font-primary">Prices</summary>
                  <div className="p-2 shadow menu dropdown-content z-[112] bg-base-100 w-52">
                    <div className="form-control">
                      {/* Map through price ranges and render checkbox for each range */}
                      {["0 - 10", "10 - 50", "50 - 100"].map((priceRange) => (
                        <label key={priceRange} className="cursor-pointer flex justify-start items-center gap-5 mb-2">
                          <input
                            type="checkbox"
                            checked={selectedPrices.includes(priceRange)}
                            className="checkbox"
                            onChange={() => handleCheckboxChange(priceRange, "price")}
                          />
                          <span className="text-lg font-primary">{priceRange}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </details>
              </div>

              {/* Categories dropdown */}

              <div className="flex items-center justify-center ps-5 pe-12 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-900 focus:outline-none">
                <details className="dropdown">
                  <summary className="m-1 cursor-pointer text-lg font-primary">Categories</summary>
                  <div className="p-2 shadow menu dropdown-content z-[112] bg-base-100 w-52">
                    <div className="form-control">
                      {/* Map through categories and render checkbox for each category */}
                      {["New Arrivals", "Sale", "Backpacks"].map((category) => (
                        <label key={category} className="cursor-pointer flex justify-start items-center gap-5 mb-2">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            className="checkbox"
                            onChange={() => handleCheckboxChange(category, "category")}
                          />
                          <span className="text-lg font-primary">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </details>
              </div>

              {/* Colors dropdown */}

              <div className="flex items-center justify-center ps-5 pe-12 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-900 focus:outline-none">
                <details className="dropdown">
                  <summary className="m-1 cursor-pointer text-lg font-primary">Colors</summary>
                  <div className="p-2 shadow menu dropdown-content z-[112] bg-base-100 w-52">
                    <div className="form-control">
                      {/* Map through colors and render checkbox for each color */}
                      {["White", "Blue", "Black"].map((color) => (
                        <label key={color} className="cursor-pointer flex justify-start items-center gap-5 mb-2">
                          <input
                            type="checkbox"
                            checked={selectedColors.includes(color)}
                            className="checkbox"
                            onChange={() => handleCheckboxChange(color, "color")}
                          />
                          <span className="text-lg font-primary">{color}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </details>
              </div>

              {/* Sizes dropdown */}

              <div className="flex items-center justify-center ps-5 pe-12 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-900 focus:outline-none">
                <details className="dropdown">
                  <summary className="m-1 cursor-pointer text-lg font-primary">Sizes</summary>
                  <div className="p-2 shadow menu dropdown-content z-[112] bg-base-100 w-52">
                    <div className="form-control">
                      {/* Map through sizes and render checkbox for each size */}
                      {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
                        <label key={size} className="cursor-pointer flex justify-start items-center gap-5 mb-2">
                          <input
                            type="checkbox"
                            checked={selectedSizes.includes(size)}
                            className="checkbox"
                            onChange={() => handleCheckboxChange(size, "size")}
                          />
                          <span className="text-lg font-primary">{size}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div className="flex overflow-x-auto lg:hidden space-x-4">
              <div className="flex-shrink-0">
                <div className="flex flex-shrink-0 items-center justify-center px-4 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-900 focus:outline-none cursor-pointer select-none">
                  <BiChevronDown className="w-4 h-4" />
                  <span className="ml-2">Products filters (3)</span>
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center ml-3 cursor-pointer">
                    <BiChevronDown className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
