import React from 'react';
import { Link } from 'react-router-dom';  // For navigation
import minhpic1 from '../assets/minhpic1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShieldAlt, faCog } from '@fortawesome/free-solid-svg-icons';

// Simple reusable component for icon and title
const InfoItem = ({ icon, title }) => (
  <div className="w-full md:w-[360px] flex flex-col items-center justify-center group">
    <div className="relative flex flex-row items-center gap-5">
      {/* Icon */}
      <FontAwesomeIcon icon={icon} className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[45px] lg:h-[45px]" />

      {/* Show title on hover for small screens */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-black p-2 rounded-lg shadow-lg text-xs hidden sm:hidden group-hover:block md:flex md:static md:transform-none md:bg-transparent md:shadow-none">
        <div className="font-semibold text-sm lg:text-base">{title}</div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <div className="w-full h-[95vh] flex flex-col">
    {/* Main Section with Image and Text */}
    <div className="h-[85vh] bg-darkslategray flex items-center justify-center py-6 lg:py-10">
      <div className="container max-w-screen-xl flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-[80px]">
        
        {/* Profile Image */}
        <img className="w-[70%] sm:w-[320px] h-auto rounded-full object-cover" alt="Minh" src={minhpic1} />
        
        {/* Hero Text */}
        <div className="flex-1 rounded-[20px] bg-aliceblue flex flex-col items-center justify-center p-4 lg:p-8">
          <div className="flex flex-col items-start gap-4 lg:gap-6">
            <div className="tracking-[2px] font-semibold text-base lg:text-lg">About me</div>
            <b className="text-3xl lg:text-[40px] leading-tight lg:leading-[55px] text-primary-color">
              A Developer
            </b>
            <p className="text-base lg:text-[16px] leading-relaxed font-medium">
              I am Minh, a developer creating AI-powered apps and insightful dashboards.
            </p>
            {/* Button that links to About Page */}
            <Link to="/about">
              <button className="rounded-full bg-primary-color text-base py-2 lg:py-[20px] uppercase underline">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Section with Icons */}
    <div className="h-[10vh] bg-ghostwhite py-4 lg:py-6 flex items-center justify-center">
      <div className="container flex items-center justify-between gap-2 sm:gap-4">
        <InfoItem icon={faUser} title="Continuous support" />
        <InfoItem icon={faCog} title="Personalized solutions" />
        <InfoItem icon={faShieldAlt} title="Authentic Results" />
      </div>
    </div>
  </div>
);

export default Hero;
