import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router";


const ErrorPage = () => {
  const navigate = useNavigate( );

  return (
    <div className="min-h-screen bg-[#0f1115] flex flex-col justify-center items-center text-center text-white px-4">
      <div className="flex flex-col items-center gap-4">
        <AlertTriangle className="w-20 h-20 text-red-500 animate-pulse" />
        <h1 className="text-6xl font-extrabold tracking-wide">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 max-w-md">
          The page you’re looking for doesn’t exist or has been moved.  
          Please check the URL or go back to the homepage.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-red-600 hover:bg-red-700 transition-all text-white font-semibold px-6 py-2 rounded-lg shadow-md"
        >
          Back to Home
        </button>
      </div>

      <footer className="absolute bottom-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} FetchApps. All rights reserved.
      </footer>
    </div>
  );
};

export default ErrorPage;
