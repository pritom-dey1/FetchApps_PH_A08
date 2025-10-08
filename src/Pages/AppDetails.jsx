import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAppData from "../Hooks/useAppData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaDownload, FaStar, FaUserAlt } from "react-icons/fa";
import Loader from "../Components/Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstallationDetails = () => {
  const { id } = useParams();
  const apps = useAppData();
  const [loading, setLoading] = useState(true);
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundApp = apps.find((a) => a.id === parseInt(id));
      setApp(foundApp || null);

      const installed = JSON.parse(localStorage.getItem("installedApps") || "[]");
      setIsInstalled(installed.some((item) => item.id === parseInt(id)));

      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [apps, id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#f5f5f5]">
        <Loader />
      </div>
    );
  }

  if (!app) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-lg font-semibold text-gray-600 bg-white px-6 py-3 rounded-md shadow">
          🚫 App not found
        </p>
      </div>
    );
  }

  const handleInstallApp = () => {
    const installed = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (installed.some((item) => item.id === app.id)) {
      toast.info("⚙️ This app is already installed!", { position: "top-center", autoClose: 2000, theme: "colored" });
      setIsInstalled(true);
    } else {
      installed.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installed));
      toast.success("✅ App installed successfully!", { position: "top-center", autoClose: 2000, theme: "colored" });
      setIsInstalled(true);
    }
  };

  return (
    <div className="bg-[#f5f5f5] pt-24 sm:pt-28 md:pt-32 min-h-screen px-4 sm:px-6 lg:px-10 pb-10 transition-all">
      <div className="max-w-[1100px] mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center border-b pb-6">
          <img
            src={app.image}
            alt={app.title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-32 md:h-32 object-cover rounded-lg shadow-md"
          />

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{app.title}</h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Developed by{" "}
              <span className="font-medium text-[#632EE3]">{app.companyName}</span>
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-gray-700">
              <div className="flex items-center gap-2">
                <FaDownload className="text-[#632EE3]" />
                <span className="font-semibold">{app.downloads.toLocaleString()} Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                <span className="font-semibold">{app.ratingAvg}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserAlt className="text-[#632EE3]" />
                <span className="font-semibold">{app.reviews.toLocaleString()} Reviews</span>
              </div>
            </div>

            <button
              onClick={handleInstallApp}
              disabled={isInstalled}
              className={`mt-5 px-5 py-2 rounded-lg font-semibold transition w-full md:w-auto
                ${isInstalled ? "bg-gray-400 cursor-not-allowed text-white" : "bg-[#632EE3] hover:bg-[#5225bf] text-white"}`}
            >
              {isInstalled ? "✅ Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>

        {/* Ratings Chart */}
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">Ratings</h2>
          <div className="bg-[#f8f8f8] p-4 rounded-md shadow-inner">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={app.ratings}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#632EE3" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">Description</h2>
          <p className="text-gray-700 leading-relaxed">{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InstallationDetails;
