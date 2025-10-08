import React from 'react';
import HeroIMg from '../../assets/hero.png';

const Banner = () => {
  return (
    <div className='min-h-screen bg-[#f5f5f5] flex flex-col justify-center'>
      {/* Text Section */}
      <div className='pt-32 md:pt-40 lg:pt-[8%] px-4 md:px-8 lg:px-16 text-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold leading-snug'>
          We Build <br />
          <span className='text-[#9460ee]'>Productive </span> Apps
        </h1>
        <p className='mt-4 text-[#555758] text-sm sm:text-base md:text-lg'>
          At FetchApps, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> 
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
      </div>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row justify-center items-center mt-6 gap-4 px-4 md:px-0'>
        <a href="https://play.google.com/store/games?hl=en_US&pli=1" target='_blank'>
          <button className='border-2 border-[#9460ee] py-2 px-5 rounded-md flex items-center gap-2 hover:bg-[#9460ee] hover:text-white transition'>
            <i className="ri-google-play-fill text-[#9460ee] text-xl sm:text-2xl"></i> Google Play
          </button>
        </a>
        <a href="https://www.apple.com/app-store/" target='_blank'>
          <button className='border-2 border-[#9460ee] py-2 px-5 rounded-md flex items-center gap-2 hover:bg-[#9460ee] hover:text-white transition'>
            <i className="ri-app-store-fill text-[#9460ee] text-xl sm:text-2xl"></i> App Store
          </button>
        </a>
      </div>

      {/* Image */}
      <div className='flex justify-center mt-10 px-4'>
        <img 
          className='w-full max-w-lg sm:max-w-xl md:max-w-2xl object-contain' 
          src={HeroIMg} 
          alt="Heroimg" 
        />
      </div>
    </div>
  );
}

export default Banner;
