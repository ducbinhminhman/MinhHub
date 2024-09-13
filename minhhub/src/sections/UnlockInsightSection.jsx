import aboutminh from '../assets/aboutminh.png';

const UnlockInsightSection = () => {
  return (
    <section className="w-full bg-ghostwhite flex flex-col items-center py-14 px-2.5 text-left text-font-color font-montserrat">
      <div className="flex flex-row items-start gap-28">
        {/* Text content */}
        <div className="max-w-md flex flex-col gap-8">
          <h2 className="text-2xl font-bold">Unlock Insights from Your Data</h2>
          <p className="text-lg text-font-color1 leading-relaxed">
            Every dataset holds powerful insights. Let’s explore it together to find valuable stories and drive the best decisions for your business.
          </p>
          <button className="bg-primary-color text-white text-sm font-bold uppercase py-4 px-8 rounded-full">
            Learn More
          </button>
        </div>
        {/* Image */}
        <img className="w-[574px] h-[754px] rounded-tl-41xl rounded-tr-41xl rounded-b-41xl object-cover" alt="About Minh" src={aboutminh} />
      </div>
    </section>
  );
};

export default UnlockInsightSection;
