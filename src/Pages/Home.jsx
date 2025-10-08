import Banner from '../Components/Banner/Banner'
import StatsSection from '../Components/Stats/Stats'
import TrandingApps from '../Components/TrandingApps/TrandingApps'
import Loader from '../Components/Loader/Loader'
import useAppData from '../Hooks/useAppData'

const Home = () => {
const apps = useAppData();

  if (!apps || apps.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#f5f5f5]">
        <Loader />
      </div>
    );
  }
  return (
    <div>
        <Banner></Banner>
        <StatsSection></StatsSection>
        <TrandingApps></TrandingApps>
    </div>
  )
}

export default Home