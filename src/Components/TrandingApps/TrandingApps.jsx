import React from 'react'
import useAppData from '../../Hooks/useAppData'
import AppCard from '../card/AppCard'
import { NavLink } from 'react-router'

const TrandingApps = () => {
  const appData = useAppData().slice(0, 8)

  return (
    <div className="bg-[#f5f5f5] py-10">
      <h2 className="text-center text-3xl font-semibold">Trending Apps</h2>
      <p className="text-center mt-1 text-[#555758]">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1300px] mx-auto mt-10 px-4">
        {appData.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <NavLink to="/apps" className={"btn-bg items-center flex gap-1 rounded-[5px] py-2 px-5 text-white w-fit"}>Show All</NavLink>
      </div>
    </div>
  )
}

export default TrandingApps
