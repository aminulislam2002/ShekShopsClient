import { useLocation } from "react-router-dom";

const Categories = () => {
  const { state } = useLocation();
  const category = state?.category || "all";

  console.log(category);
  return (
    <div className="container mx-auto">
      {category ? (
        <>
          <h1>
            Categories <span className="text-2xl text-[#00cc99]">{category}</span>
          </h1>
        </>
      ) : (
        <>
          <h1>Loading...!</h1>
        </>
      )}
    </div>
  );
};

export default Categories;
