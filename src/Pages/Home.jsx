import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner/Banner'
import StatsSection from '../Components/Stats/Stats'
import TrandingApps from '../Components/TrandingApps/TrandingApps'
import Loader from '../Components/Loader/Loader'

const Home = () => {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
        <Banner></Banner>
        <StatsSection></StatsSection>
        <TrandingApps></TrandingApps>
    </div>
  )
}

export default Home