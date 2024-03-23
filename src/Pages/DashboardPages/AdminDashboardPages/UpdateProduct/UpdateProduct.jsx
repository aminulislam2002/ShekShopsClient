import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // Get the product id from the URL
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://server.shekshops.com/product/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error("Error fetching product");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    // After product data is loaded, set default values for form inputs
    if (product) {
      setValue("name", product.name || "");
      setValue("description", product.description || "");
      setValue("category", product.category || "");
      setValue("productType", product.productType || "");
      setValue("sizes", product.sizes || []);
      setValue("colors", product.colors || []);
      setValue("originalPrice", product.originalPrice || "");
      setValue("offerPrice", product.offerPrice || "");
      setValue("ratings", product.ratings || "");
      setValue("reviews", product.reviews || "");
    }
  }, [product, setValue]);

  const [images, setImages] = useState([]);

  const image_hosting_api_key = import.meta.env.VITE_image_hosting_api_key;
  const expiration_seconds = 157680000;
  const image_hosting_url = `https://api.imgbb.com/1/upload?expiration=${expiration_seconds}&key=${image_hosting_api_key}`;

  const handleImageInputChange = (e, index) => {
    const updatedImages = [...images];
    updatedImages[index] = e.target.files[0];
    setImages(updatedImages);
  };

  const handleRegistration = async (data) => {
    setIsLoading(true);
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
        // createdAt: new Date().toISOString(), // Add current date and time
      };

      // Product updated to database
      const response = await fetch(`https://server.shekshops.com/updateProduct/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productInfo),
      });
      if (response.ok) {
        // Product successfully updated
        Swal.fire({
          icon: "success",
          title: "Product Updated!",
          text: "Your product has been successfully updated.",
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-5 px-5 bg-white text-slate-800 dark:bg-[#132337] dark:text-slate-50">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold uppercase">UPDATE A PRODUCT</h1>
        <div className="h-1 bg-white mt-2 w-20 mx-auto"></div>
      </div>

      <form onSubmit={handleSubmit(handleRegistration)} className="">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Product Title
          </label>
          <input
            id="name"
            name="name"
            defaultValue={product?.name}
            type="text"
            {...register("name")}
            className="w-full bg-white text-slate-800 dark:bg-[#132337] dark:text-slate-50 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="description">
            Product Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={product?.description}
            type="text"
            rows="5"
            {...register("description")}
            className="w-full bg-white text-slate-800 dark:bg-[#132337] dark:text-slate-50 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex justify-center items-center gap-10">
          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="category">
              Product Category
            </label>
            <select
              id="category"
              name="category"
              defaultValue={product?.category}
              {...register("category")}
              className="w-full bg-white text-slate-800 dark:bg-[#132337] dark:text-slate-50 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Product Category</option>
              <option value="bag">Bag</option>
              <option value="women">Women</option>
              <option value="mens">Mens</option>
              <option value="kitchen">Kitchen</option>
              <option value="gadget">Gadget</option>
              <option value="hundred taka">100 TK</option>
              <option value="home improvement">Home Improvement</option>
            </select>
          </div>

          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="productType">
              Product Type
            </label>
            <select
              id="productType"
              name="productType"
              {...register("productType")}
              className="w-full bg-white text-slate-800 dark:bg-[#132337] dark:text-slate-50 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Product Type</option>
              <option value="New Arrivals">New Arrivals</option>
              <option value="Most Popular">Most Popular</option>
              <option value="Best Selling">Best Selling</option>
            </select>
          </div>
        </div>

        {/* Add similar sections for other fields */}

        {/* Sizes checkbox */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="sizes">
            Product Size
          </label>
          {/* Use checkboxes for multiple selections */}
          <div className="grid grid-cols-3 lg:grid-cols-10">
            {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
              <div key={size}>
                <input
                  id={`size-${size}`}
                  name="sizes"
                  type="checkbox"
                  defaultValue={size}
                  defaultChecked={product?.sizes.includes(size)} // Set defaultChecked
                  {...register("sizes")}
                  className="mr-2"
                />
                <label htmlFor={`size-${size}`}>{size}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Colors checkbox */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="colors">
            Product Colors
          </label>
          {/* Use checkboxes for multiple selections */}
          <div className="grid grid-cols-3 lg:grid-cols-10">
            {["Black", "Gray", "White", "Red", "Green", "Blue", "Yellow", "Pink", "Orange", "Purple"].map((color) => (
              <div key={color}>
                <input
                  id={`color-${color}`}
                  name="colors"
                  type="checkbox"
                  defaultValue={color}
                  defaultChecked={product?.colors.includes(color)} // Set defaultChecked
                  {...register("colors")}
                  className="mr-2"
                />
                <label htmlFor={`color-${color}`}>{color}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Original price input field */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
          <div className="w-full lg:mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="originalPrice">
              Original Price
            </label>
            <input
              id="originalPrice"
              name="originalPrice"
              defaultValue={product?.originalPrice}
              type="number"
              min="1"
              {...register("originalPrice")}
              className="w-full bg-white text-slate-800 dark:bg-[#132337] dark:text-slate-50 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Offer price input field */}
          <div className="w-full lg:mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="offerPrice">
              Offer Price
            </label>
            <input
              id="offerPrice"
              name="offerPrice"
              defaultValue={product?.offerPrice}
              type="number"
              min="1"
              {...register("offerPrice")}
              className="w-full bg-white text-slate-800 dark:bg-[#132337] dark:text-slate-50 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Ratings input field */}
          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="ratings">
              Ratings
            </label>
            <input
              id="ratings"
              name="ratings"
              defaultValue={product?.ratings}
              type="number"
              min="1"
              max="5"
              step="0.1"
              {...register("ratings")}
              className="w-full bg-white text-slate-800 dark:bg-[#132337] dark:text-slate-50 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Reviews input field */}
          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="reviews">
              Reviews
            </label>
            <input
              id="reviews"
              name="reviews"
              defaultValue={product?.reviews}
              type="number"
              min="1"
              {...register("reviews")}
              className="w-full bg-white text-slate-800 dark:bg-[#132337] dark:text-slate-50 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Images input fields */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="w-full mb-4">
              <label className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                <span className="text-sm font-medium">{index === 1 ? "Main Image" : `Optional Image`}</span>
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

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          {isLoading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
