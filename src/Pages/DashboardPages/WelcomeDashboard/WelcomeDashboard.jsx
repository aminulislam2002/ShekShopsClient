import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const WelcomeDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      }}
    >
      <div className="text-center text-white mb-12">
        <h1 className="text-5xl font-bold mb-2">Hey {user?.displayName},</h1>
        <h2 className="text-3xl font-semibold mb-6">Welcome to ShekShops!</h2>
        <p className="text-lg mb-6">Your one-stop destination for all your shopping needs.</p>
        <Link>
          <button className="bg-white text-purple-500 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-200 hover:text-purple-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeDashboard;
