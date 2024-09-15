import aboutminh from '../assets/aboutminh.png';

const UnlockInsightSection = () => {
  return (
    <section className="w-full h-auto lg:min-h-screen bg-ghostwhite flex justify-center items-center">
      <div className="container h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-6 lg:px-16">
        
        {/* Text content */}
        <div className="flex flex-col gap-6 justify-center">
          <h2 className="text-[28px] lg:text-4xl font-bold">Unlock Insights from Your Data</h2>
          <p className="text-lg text-font-color1 leading-relaxed">
            Every dataset holds powerful insights. Let’s explore it together to find valuable stories and drive the best decisions for your business.
          </p>
          <button className="bg-primary text-white text-sm font-bold uppercase py-4 px-8 rounded-full hover:bg-primary-dark transition duration-300">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="flex h-[300px] lg:h-[600px] justify-center items-center">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover object-center rounded-[20px]"
              alt="About Minh"
              src={aboutminh}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockInsightSection;
