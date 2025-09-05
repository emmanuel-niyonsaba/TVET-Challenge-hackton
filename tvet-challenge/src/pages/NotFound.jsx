import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-500">404</h1>
        <p className="mt-4 text-xl text-gray-700 font-semibold">
          Oops! Page not found
        </p>
        <p className="mt-2 text-gray-500">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
