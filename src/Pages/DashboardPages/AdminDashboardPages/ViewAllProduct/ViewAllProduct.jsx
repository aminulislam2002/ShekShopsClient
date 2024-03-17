import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ViewAllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API endpoint
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://server.shekshops.com/products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Error fetching products");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`https://server.shekshops.com/deleteProduct/${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Update the products state without the deleted product
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));

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
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full table-auto">
          {/* head */}
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-center">Name</th>
              <th className="px-4 py-2 text-center">Category</th>
              <th className="px-4 py-2 text-center">Price</th>
              <th className="px-4 py-2 text-center">Offer</th>
              <th className="px-4 py-2 text-center">Ratings</th>
              <th className="px-4 py-2 text-center">Reviews</th>
              <th className="px-4 py-2 text-center">Image</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {products.map((product) => (
              <tr key={product?._id} className="border-t">
                <td className="px-4 py-2 w-3/12" title={product?.name}>
                  {product?.name.slice(0, 100)}...
                </td>
                <td className="px-4 py-2 text-center w-1/12">{product?.category}</td>
                <td className="px-4 py-2 text-center w-1/12">{product?.originalPrice}</td>
                <td className="px-4 py-2 text-center w-1/12">{product?.offerPrice}</td>
                <td className="px-4 py-2 text-center w-1/12">{product?.ratings}</td>
                <td className="px-4 py-2 text-center w-1/12">{product?.reviews}</td>
                <td className="px-4 py-2 text-center w-1/12">
                  <img src={product?.images[0]} alt={`Product ${product?.name}`} className="w-16 h-16" />
                </td>
                <td className="px-4 py-2 text-center w-1/12">
                  <Link to={`/dashboard/update/${product?._id}`}>
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 my-1 rounded-md">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      // Show confirmation alert before deletion
                      Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleDeleteProduct(product?._id);
                        }
                      });
                    }}
                    className="w-full bg-red-500 hover:bg-red-700 text-white px-3 py-1 my-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllProduct;
