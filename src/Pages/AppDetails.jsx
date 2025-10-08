import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useProduct from "../Hooks/useProduct";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Components/Loader/Loader"; // ✅ Loader import

const CardDetails = () => {
  const { id } = useParams();
  const [product] = useProduct();
  const [loading, setLoading] = useState(true);
  const [SingleData, setSingleData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const found = product?.find((d) => d.id === Number(id));
      setSingleData(found || null);
      setLoading(false);
    }, 500); // smooth loader delay
    return () => clearTimeout(timer);
  }, [product, id]);

  // ✅ Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#f5f5f5]">
        <Loader />
      </div>
    );
  }

  // ✅ If product not found
  if (!SingleData) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-lg font-semibold text-gray-600 bg-white px-6 py-3 rounded-md shadow">
          🚫 Product not found
        </p>
      </div>
    );
  }

  // ✅ Wishlist Add Function
  const HandleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const isExist = wishlist.some((item) => item.id === SingleData.id);

    if (isExist) {
      toast.warning("🛒 This product is already in your wishlist!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    } else {
      wishlist.push(SingleData);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      toast.success("💖 Added to your wishlist!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  // ✅ Main Layout
  return (
    <div className="bg-[#f5f5f5] pt-[8%] min-h-screen py-10 px-5">
      <div className="max-w-[1100px] mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Image + Details */}
        <div className="flex flex-col md:flex-row gap-8 items-center border-b pb-8">
          <img
            src={SingleData.image}
            alt={SingleData.name}
            className="w-64 h-64 object-cover rounded-lg shadow-md"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">{SingleData.name}</h1>
            <p className="text-gray-600 text-lg mt-3 leading-relaxed">
              {SingleData.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {SingleData.category}
              </p>
              <p>
                <span className="font-semibold">Material:</span>{" "}
                {SingleData.material}
              </p>
              <p>
                <span className="font-semibold">Dimensions:</span>{" "}
                {SingleData.dimensions}
              </p>
              <p>
                <span className="font-semibold">Stock:</span>{" "}
                {SingleData.stock ? (
                  <span className="text-green-600 font-medium">Available</span>
                ) : (
                  <span className="text-red-500 font-medium">Out of Stock</span>
                )}
              </p>
            </div>

            <div className="text-2xl font-bold text-indigo-600 mt-6">
              ${SingleData.price}
            </div>

            <button
              onClick={HandleAddToWishlist}
              className="mt-6 px-6 py-3 bg-[#632EE3] hover:bg-[#5225bf] text-white rounded-lg transition-all font-medium"
            >
              💖 Add to Wishlist
            </button>
          </div>
        </div>

        {/* Optional Extra Info */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            More About This Product
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Crafted with premium materials and designed for durability, our {SingleData.name} stands out in its category. Ideal for everyday use or gifting, it combines style and performance seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
