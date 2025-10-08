import React from 'react'
import HeroIMg from '../../assets/hero.png'
const Banner = () => {
  return (
    <div className='min-h-screen bg-[#f5f5f5]'>
     <div  className='pt-[10%]'>
        <h1 className='text-center text-6xl font-semibold'>We Build <br />
<span className='text-[#9460ee]'>Productive </span> Apps</h1>
<p className='text-center mt-2.5 text-[#555758]'>At FetchApps, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
     </div>
     <div className='w-full flex justify-center mt-3.5 gap-3.5'>
        <a href="https://play.google.com/store/games?hl=en_US&pli=1" target='_blank'>
        <button className='border-[#9460ee] border-1 py-1.5 px-3 rounded-[5px] flex items-center gap-1'><i class="ri-google-play-fill text-[#9460ee] text-[22px]"></i> Google Play</button>
        </a>
        <a href="https://www.apple.com/app-store/" target='_blank'>
        <button className='border-[#9460ee] border-1 py-1.5 px-3 rounded-[5px] flex items-center gap-1'><i class="ri-app-store-fill text-[22px] text-[#9460ee]"></i> App Store</button>
        </a>
     </div>
     <div className='w-full flex justify-center mt-6'>
        <img className='object-cover w-[50%]' src={HeroIMg} alt="Heroimg" />
     </div>
    </div>
  )
}

export default Banner