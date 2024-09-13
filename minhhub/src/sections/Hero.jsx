import minhpic1 from '../assets/minhpic1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShieldAlt, faCog } from '@fortawesome/free-solid-svg-icons';

// Component tái sử dụng cho các phần chứa icon và text
const InfoItem = ({ icon, title, description }) => {
  return (
    <div className="w-full md:w-[360px] flex flex-col items-center justify-center">
      <div className="flex flex-row items-center gap-5">
        <FontAwesomeIcon icon={icon} className="w-[45px] h-[45px] lg:w-[55px] lg:h-[55px]" />
        <div className="flex-1 flex flex-col items-start gap-1.5">
          <div className="font-semibold text-lg">{title}</div>
          <div className="text-base">{description}</div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full relative flex flex-col items-start text-left text-base text-font-color font-montserrat">
      
      {/* Main Hero Section */}
      <div className="w-full bg-darkslategray flex flex-col items-center justify-center py-10 lg:py-20">
        <div className="w-full max-w-screen-xl px-4 lg:px-0 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[120px]">
          
          {/* Profile Image */}
          <img className="w-[80%] sm:w-[360px] h-auto rounded-full object-cover" alt="Minh" src={minhpic1} />
          
          {/* Hero Text */}
          <div className="flex-1 rounded-[20px] bg-aliceblue flex flex-col items-center justify-center p-6 lg:p-10">
            <div className="flex flex-col items-start gap-6 lg:gap-8">
              <div className="tracking-[3px] font-semibold text-lg">About me</div>
              <b className="text-4xl lg:text-[50px] leading-tight lg:leading-[65px] text-primary-color">
                A Creative Developer
              </b>
              <p className="text-lg lg:text-[18px] leading-relaxed font-medium">
                I m Minh, a software developer creating AI-powered apps and beautiful, insightful dashboards.
              </p>
              <button className="rounded-full bg-primary-color text-white py-3 px-6 lg:py-[25px] lg:px-[72px] uppercase">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Item Section */}
      <div className="w-full bg-ghostwhite py-8 lg:py-10 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <InfoItem 
            icon={faUser} 
            title="Continuous support" 
            description="Help and support anytime you need it"
          />
          <InfoItem 
            icon={faCog} 
            title="Personalized solutions" 
            description="Apps and Dashboard made just for you"
          />
          <InfoItem 
            icon={faShieldAlt} 
            title="Authentic Results" 
            description="Beautiful, effective tools that work."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
