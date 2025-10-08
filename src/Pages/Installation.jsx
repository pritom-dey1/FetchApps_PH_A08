import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaDownload, FaStar } from "react-icons/fa";
import Loader from "../Components/Loader/Loader";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstalledApps = () => {
      const savedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
      setInstalledApps(savedApps);
      setLoading(false); 
    };

    fetchInstalledApps();
  }, []);

  const handleSort = (order) => {
    setSortOrder(order);
    let sortedApps = [...installedApps];

    if (order === "high-low") sortedApps.sort((a, b) => b.downloads - a.downloads);
    else if (order === "low-high") sortedApps.sort((a, b) => a.downloads - b.downloads);

    setInstalledApps(sortedApps);
  };

  const handleUninstall = (id) => {
    const updated = installedApps.filter((item) => item.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.info("🗑️ App uninstalled successfully!", {
      autoClose: 1500,
      position: "top-center",
      theme: "colored",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 lg:px-10 pb-10 transition-all">
      <div className="max-w-[1100px] mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
          Your Installed Apps
        </h2>
        <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">
          Explore all trending apps you have installed on your device
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 border-b pb-3 gap-3 sm:gap-0">
          <p className="text-gray-700 font-semibold">
            {installedApps.length} Apps Found
          </p>

          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
          >
            <option value="default">Sort by Downloads</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>

        {installedApps.length === 0 ? (
          <p className="text-center text-gray-500 py-10 text-sm sm:text-base">
            😔 No installed apps found.
          </p>
        ) : (
          <div className="space-y-4">
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col sm:flex-row items-center sm:justify-between bg-[#f9f9f9] border border-gray-200 rounded-lg p-4 hover:shadow-md transition gap-4 sm:gap-0"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-16 h-16 sm:w-14 sm:h-14 object-cover rounded-lg"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-gray-800">{app.title}</h3>
                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 text-sm text-gray-600 mt-1">
                      <div className="flex items-center gap-1">
                        <FaDownload className="text-[#632EE3]" />
                        {app.downloads.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        {app.ratingAvg}
                      </div>
                      <span>{app.size} MB</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold transition w-full sm:w-auto"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstalledApps;
