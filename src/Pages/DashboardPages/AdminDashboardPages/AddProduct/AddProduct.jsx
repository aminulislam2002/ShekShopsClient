import { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddInput = () => {
    if (inputValue.trim() !== "") {
      setImages([...images, inputValue]);
      setInputValue("");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    const productInfo = {
      name: data.name || "",
      category: data.category || "",
      sizes: data.sizes || [],
      colors: data.colors || [],
      originalPrice: data.originalPrice || "",
      offerPrice: data.offerPrice || "",
      ratings: data.ratings || "",
      reviews: data.reviews || "",
      images: data.images || "",
      description: data.description || "",
      productType: data.productType || "",
    };

    console.log(productInfo);
  };

  //   const registerOptions = {
  //     name: { required: "Name is required" },
  //     category: { required: "Category is required" },
  //     sizes: { required: "Size is required" },
  //     colors: { required: "Colors are required" },
  //     originalPrice: { required: "Original Price is required" },
  //     offerPrice: { required: "Offer Price is required" },
  //     ratings: { required: "Rating is required" },
  //     reviews: { required: "Reviews are required" },
  //     images: { required: "Images are required" },
  //     description: { required: "Description is required" },
  //     productType: { required: "Product Type is required" },
  //   };

  return (
    <div className=" my-8 p-8 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">ADD A PRODUCT</h1>
      </div>

      <form onSubmit={handleSubmit(handleRegistration)} className="">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            {...register("name")}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input
            id="description"
            name="description"
            type="textarea"
            rows={5}
            {...register("description")}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
            Images
          </label>
          <input
            id="images"
            name="images"
            type="text"
            {...register("images", registerOptions.images)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />

          <button onClick={handleAddInput}>Add</button>
          
        </div> */}

        <div className="flex justify-center items-center gap-10">
          <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              {...register("category")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Product Category</option>
              <option value="bag">Bag</option>
              <option value="woman">Woman</option>
              <option value="mens">Mens</option>
              <option value="kitchen">Kitchen</option>
              <option value="gadget">Gadget</option>
              <option value="travel">Travel</option>
              <option value="home improvement">Home Improvement</option>
            </select>
          </div>

          <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productType">
              Product Type
            </label>
            <select
              id="productType"
              name="productType"
              {...register("productType")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Product Type</option>
              <option value="new arrivals">New Arrivals</option>
              <option value="most popular">Most Popular</option>
              <option value="best selling">Best Selling</option>
            </select>
          </div>
        </div>

        {/* Add similar sections for other fields */}

        {/* Sizes checkbox */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sizes">
            Size
          </label>
          {/* Use checkboxes for multiple selections */}
          <div className="flex gap-2">
            <div>
              <input id="size-xs" name="sizes" type="checkbox" value="xs" {...register("sizes")} className="mr-1" />
              <label htmlFor="size-xs">Xs</label>
            </div>

            <div>
              <input id="size-s" name="sizes" type="checkbox" value="s" {...register("sizes")} className="ml-4 mr-1" />
              <label htmlFor="size-s">S</label>
            </div>

            <div>
              <input id="size-m" name="sizes" type="checkbox" value="m" {...register("sizes")} className="mr-1 ml-4" />
              <label htmlFor="size-m">M</label>
            </div>

            <div>
              <input id="size-l" name="sizes" type="checkbox" value="l" {...register("sizes")} className="ml-4 mr-1" />
              <label htmlFor="size-l">L</label>
            </div>

            <div>
              <input id="size-xl" name="sizes" type="checkbox" value="xl" {...register("sizes")} className="mr-1 ml-4" />
              <label htmlFor="size-xl">Xl</label>
            </div>

            <div>
              <input id="size-2xl" name="sizes" type="checkbox" value="2xl" {...register("sizes")} className="ml-4 mr-1" />
              <label htmlFor="size-2xl">2xl</label>
            </div>

            <div>
              <input id="size-3xl" name="sizes" type="checkbox" value="3xl" {...register("sizes")} className="ml-4 mr-1" />
              <label htmlFor="size-3xl">3xl</label>
            </div>
          </div>
        </div>

        {/* Colors checkbox */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="colors">
            Colors
          </label>
          {/* Use checkboxes for multiple selections */}
          <div className="flex gap-2">
            <div>
              <input id="color-black" name="colors" type="checkbox" value="black" {...register("colors")} className="mr-2" />
              <label htmlFor="color-black">Black</label>
            </div>

            <div>
              <input
                id="color-gray"
                name="colors"
                type="checkbox"
                value="gray"
                {...register("colors")}
                className="ml-4 mr-2"
              />
              <label htmlFor="color-gray">Gray</label>
            </div>

            <div>
              <input id="color-white" name="colors" type="checkbox" value="white" {...register("colors")} className="mr-2" />
              <label htmlFor="color-white">White</label>
            </div>

            <div>
              <input id="color-red" name="colors" type="checkbox" value="red" {...register("colors")} className="mr-2" />
              <label htmlFor="color-red">Red</label>
            </div>

            <div>
              <input
                id="color-green"
                name="colors"
                type="checkbox"
                value="green"
                {...register("colors")}
                className="ml-4 mr-2"
              />
              <label htmlFor="color-green">Green</label>
            </div>

            <div>
              <input id="color-blue" name="colors" type="checkbox" value="blue" {...register("colors")} className="mr-2" />
              <label htmlFor="color-blue">Blue</label>
            </div>

            <div>
              <input
                id="color-yellow"
                name="colors"
                type="checkbox"
                value="yellow"
                {...register("colors")}
                className="ml-4 mr-2"
              />
              <label htmlFor="color-yellow">Yellow</label>
            </div>

            <div>
              <input id="color-pink" name="colors" type="checkbox" value="pink" {...register("colors")} className="mr-2" />
              <label htmlFor="color-pink">Pink</label>
            </div>

            <div>
              <input
                id="color-orange"
                name="colors"
                type="checkbox"
                value="orange"
                {...register("colors")}
                className="ml-4 mr-2"
              />
              <label htmlFor="color-orange">Orange</label>
            </div>

            <div>
              <input
                id="color-purple"
                name="colors"
                type="checkbox"
                value="purple"
                {...register("colors")}
                className="mr-2"
              />
              <label htmlFor="color-purple">Purple</label>
            </div>

            {/* Add more colors as needed */}
          </div>
        </div>

        {/* Original price input field */}
        <div className="flex justify-center items-center gap-10">
          <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="originalPrice">
              Original Price
            </label>
            <input
              id="originalPrice"
              name="originalPrice"
              type="number"
              {...register("originalPrice")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Offer price input field */}
          <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="offerPrice">
              Offer Price
            </label>
            <input
              id="offerPrice"
              name="offerPrice"
              type="number"
              {...register("offerPrice")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Ratings input field */}
          <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ratings">
              Ratings
            </label>
            <input
              id="ratings"
              name="ratings"
              type="number"
              {...register("ratings")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Reviews input field */}
          <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reviews">
              Reviews
            </label>
            <input
              id="reviews"
              name="reviews"
              type="number"
              {...register("reviews")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Add similar sections for other fields */}

        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
