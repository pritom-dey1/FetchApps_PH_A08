import React, { useState, useMemo, useEffect } from "react";
import useAppData from "../Hooks/useAppData";
import AppCard from "../Components/card/AppCard";
import Loader from "../Components/Loader/Loader";

const Apps = () => {
  const appData = useAppData();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtering, setFiltering] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (search.trim() !== "") {
      setFiltering(true);
      const timer = setTimeout(() => {
        setFiltering(false);
      }, 500); 
      return () => clearTimeout(timer);
    } else {
      setFiltering(false);
    }
  }, [search]);

  const sanitizedSearch = search.trim().toLowerCase();

  const filteredApps = useMemo(() => {
    if (!sanitizedSearch) return appData;
    return appData.filter((app) =>
      app.title.toLowerCase().includes(sanitizedSearch)
    );
  }, [appData, sanitizedSearch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] pt-[8%] min-h-screen transition-all duration-300">
      {/* Header */}
      <h1 className="text-center text-3xl font-semibold">Our All Applications</h1>
      <p className="text-center mt-1 text-[#555758]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="w-[95%] bg-white p-4 md:p-5 rounded-[5px] flex flex-col md:flex-row items-center justify-between max-w-[1300px] mx-auto mt-10 gap-3 shadow-sm">
        <h2 className="text-gray-700 font-medium">
          ({filteredApps.length}) Apps Found
        </h2>

        <input
          type="search"
          placeholder="Search Apps by Title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 py-2 px-5 rounded-[5px] w-full md:w-72 outline-none focus:ring-2 focus:ring-[#632EE3] transition"
        />
      </div>

      {/* Apps Grid or Loader */}
      <div className="max-w-[1300px] mx-auto mt-10 px-4 pb-11">
        {filtering ? (
          <div className="flex justify-center items-center py-20">
            <Loader /> 
          </div>
        ) : filteredApps && filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center mt-20 pb-20">
            <p className="text-lg font-semibold text-gray-600 bg-white px-6 py-3 rounded-md shadow">
              🚫 No Apps Found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
