import React from 'react'
import DownImg from '../../assets/icon-downloads.png'
import Ratings from '../../assets/icon-ratings.png'
import { Link } from 'react-router'

const AppCard = ({ app }) => {
  const {id, image, title, downloads, ratingAvg } = app

  return (
    <Link to={`/apps/${id}`}>
    <div className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition">
      <div className="flex flex-col items-center">
        <img src={image} alt={title} className="w-24 h-24 object-cover rounded-lg mb-3" />
        <h2 className="text-lg font-semibold text-gray-800 text-center">{title}</h2>
      </div>

      <div className="flex justify-between items-center mt-4 text-gray-700">
        <span className="flex items-center gap-2">
          <img src={DownImg} alt="downloads" className="w-5 h-5" />
          <span>{downloads.toLocaleString()}</span>
        </span>

        <span className="flex items-center gap-2">
          <img src={Ratings} alt="ratings" className="w-5 h-5" />
          <span>{ratingAvg.toFixed(1)} ★</span>
        </span>
      </div>

    </div>
    </Link>
  )
}

export default AppCard
