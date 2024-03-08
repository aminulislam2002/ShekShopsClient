import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [images, setImages] = useState([]);

  const image_hosting_api_key = import.meta.env.VITE_image_hosting_api_key;
  const image_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_api_key}`;

  const handleImageInputChange = (e, index) => {
    const updatedImages = [...images];
    updatedImages[index] = e.target.files[0];
    setImages(updatedImages);
  };

  const { register, handleSubmit } = useForm();

  const handleRegistration = async (data) => {
    try {
      const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append("image", file);
        const response = await fetch(image_hosting_url, {
          method: "POST",
          body: formData,
        });
        const responseData = await response.json();
        return responseData.data.url;
      };

      const uploadedImageUrls = await Promise.all(images.map(uploadImage));

      const productInfo = {
        name: data.name || "",
        category: data.category || "",
        sizes: data.sizes || [],
        colors: data.colors || [],
        images: uploadedImageUrls || [],
        originalPrice: data.originalPrice || "",
        offerPrice: data.offerPrice || "",
        ratings: data.ratings || "",
        reviews: data.reviews || "",
        description: data.description || "",
        productType: data.productType || "",
      };

      // Product added to database
      const response = await fetch("https://shek-shops-server.vercel.app/postProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productInfo),
      });
      if (response.ok) {
        // Product successfully added
        console.log("Product added successfully");
        Swal.fire({
          icon: "success",
          title: "Product Added!",
          text: "Your product has been successfully added.",
        });
      } else {
        // Handle error case
        console.error("Error adding product");
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Something went wrong while adding the product.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="py-5 px-5 bg-gradient-to-b from-yellow-300 via-pink-300 to-blue-300 text-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">ADD A PRODUCT</h1>
        <div className="h-1 bg-white mt-2 w-20 mx-auto"></div>
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
              <option value="women">Women</option>
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
          <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-12">
            <div>
              <input id="size-xs" name="sizes" type="checkbox" value="xs" {...register("sizes")} className="mr-1" />
              <label htmlFor="size-xs">Xs</label>
            </div>

            <div>
              <input id="size-s" name="sizes" type="checkbox" value="s" {...register("sizes")} className="lg:ml-4 mr-1" />
              <label htmlFor="size-s">S</label>
            </div>

            <div>
              <input id="size-m" name="sizes" type="checkbox" value="m" {...register("sizes")} className="lg:ml-4 mr-1" />
              <label htmlFor="size-m">M</label>
            </div>

            <div>
              <input id="size-l" name="sizes" type="checkbox" value="l" {...register("sizes")} className="lg:ml-4 mr-1" />
              <label htmlFor="size-l">L</label>
            </div>

            <div>
              <input id="size-xl" name="sizes" type="checkbox" value="xl" {...register("sizes")} className="lg:ml-4 mr-1" />
              <label htmlFor="size-xl">Xl</label>
            </div>

            <div>
              <input
                id="size-2xl"
                name="sizes"
                type="checkbox"
                value="2xl"
                {...register("sizes")}
                className="lg:ml-4 mr-1"
              />
              <label htmlFor="size-2xl">2xl</label>
            </div>

            <div>
              <input
                id="size-3xl"
                name="sizes"
                type="checkbox"
                value="3xl"
                {...register("sizes")}
                className="lg:ml-4 mr-1"
              />
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
          <div className="grid grid-cols-3 lg:grid-cols-10">
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
                className="lg:ml-4 mr-2"
              />
              <label htmlFor="color-gray">Gray</label>
            </div>

            <div>
              <input
                id="color-white"
                name="colors"
                type="checkbox"
                value="white"
                {...register("colors")}
                className="lg:ml-4 mr-2"
              />
              <label htmlFor="color-white">White</label>
            </div>

            <div>
              <input
                id="color-red"
                name="colors"
                type="checkbox"
                value="red"
                {...register("colors")}
                className="lg:ml-4 mr-2"
              />
              <label htmlFor="color-red">Red</label>
            </div>

            <div>
              <input
                id="color-green"
                name="colors"
                type="checkbox"
                value="green"
                {...register("colors")}
                className="lg:ml-4 mr-2"
              />
              <label htmlFor="color-green">Green</label>
            </div>

            <div>
              <input
                id="color-blue"
                name="colors"
                type="checkbox"
                value="blue"
                {...register("colors")}
                className="lg:ml-4 mr-2"
              />
              <label htmlFor="color-blue">Blue</label>
            </div>

            <div>
              <input
                id="color-yellow"
                name="colors"
                type="checkbox"
                value="yellow"
                {...register("colors")}
                className="lg:ml-4 mr-2"
              />
              <label htmlFor="color-yellow">Yellow</label>
            </div>

            <div>
              <input
                id="color-pink"
                name="colors"
                type="checkbox"
                value="pink"
                {...register("colors")}
                className="lg:ml-4 mr-2"
              />
              <label htmlFor="color-pink">Pink</label>
            </div>

            <div>
              <input
                id="color-orange"
                name="colors"
                type="checkbox"
                value="orange"
                {...register("colors")}
                className="lg:ml-4 mr-2"
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
                className="lg:ml-4 mr-2"
              />
              <label htmlFor="color-purple">Purple</label>
            </div>

            {/* Add more colors as needed */}
          </div>
        </div>

        {/* Original price input field */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
          <div className="w-full lg:mb-4">
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
          <div className="w-full lg:mb-4">
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

        {/* Images input fields */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="w-full mb-4">
              <label className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                <span className="text-sm font-medium">Image {index}</span>
              </label>
              <input
                type="file"
                name={`image${index}`}
                accept="image/*"
                onChange={(e) => handleImageInputChange(e, index - 1)}
                className="focus:ring-action-primary text-primary-500 border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-full py-3 px-3"
              />
            </div>
          ))}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
