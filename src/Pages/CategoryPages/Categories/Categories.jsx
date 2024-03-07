import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../HomePage/HomePageCard/ProductCard/ProductCard";

const Categories = () => {
  const { state } = useLocation();
  const category = state?.category || "all";
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
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
    category.toLowerCase() === "all"
      ? products
      : products.filter((product) => product.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="container mx-auto">
      {loading ? (
        <h1>Loading...!</h1>
      ) : (
        <>
          <div className="grid gap-3 md:gap-4 lg:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product?.id}
                id={product?.id}
                product={product}
                handleFavoriteClick={handleFavoriteClick}
                favorites={favorites}
              ></ProductCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Categories;
