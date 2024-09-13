import case1 from '../assets/case1.png';
import case2 from '../assets/case2.png';
import case3 from '../assets/case3.png';
import case4 from '../assets/case4.png';

const MyLatestArticleSection = () => {
  return (
    <section className="w-full bg-ghostwhite py-14 px-2.5 text-font-color font-montserrat">
      {/* Section Title */}
      <div className="flex justify-center mb-10">
        <h2 className="text-2xl font-bold">My Latest Articles</h2>
      </div>

      {/* Container in the middle of the screen */}
      <div className="container mx-auto flex flex-row gap-6 justify-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6 w-[552px]">
          <div className="flex flex-col gap-[24px] bg-ghostwhite p-0 rounded-lg h-full">
            <img
              className="w-full h-[430px] object-cover rounded-lg"
              src={case1}
              alt="Article 1"
            />
            <img
              className="w-full h-[410px] object-cover rounded-lg"
              src={case2}
              alt="Article 2"
            />
            <article className="bg-lightgray p-5 rounded-lg flex-grow">
              <h3 className="text-lg font-medium leading-relaxed">
                How we design a SaaS Web app?
              </h3>
              <div className="mt-4 bg-black text-white rounded-full w-32 h-9 flex items-center justify-center text-sm">
                Coming Soon
              </div>
            </article>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-[24px] bg-ghostwhite p-0 rounded-lg w-[552px] h-full">
          <img
            className="w-full h-[637px] object-cover rounded-lg"
            src={case3}
            alt="Article 3"
          />
          <img
            className="w-full h-[426px] object-cover rounded-lg"
            src={case4}
            alt="Article 4"
          />
        </div>
      </div>
    </section>
  );
};

export default MyLatestArticleSection;
