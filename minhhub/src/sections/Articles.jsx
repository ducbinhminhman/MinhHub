import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';  // Updated import for Pagination module

import case1 from '../assets/case1.png';
import case2 from '../assets/case2.png';
import case3 from '../assets/case3.png';
import case4 from '../assets/case4.png';

const MyLatestArticleSection = () => {
  return (
    <section className="w-full h-screen bg-ghostwhite px-2.5 text-font-color font-montserrat flex flex-col">
      {/* Section Title */}
      <div className="flex justify-center items-center h-[10%]">
        <h2 className="text-[28px] font-bold">My Latest Articles</h2>
      </div>

      {/* Swiper Container for all screens */}
      <div className="flex-grow flex lg:items-center h-[90%]">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}  // Pagination settings
          modules={[Pagination]}           // Ensure Pagination is correctly imported
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 h-full">
              <img
                className="w-full h-[450px] lg:w-[800px] lg:h-[600px] object-cover rounded-lg"
                src={case1}
                alt="Article 1"
              />
              <article className="bg-lightgray p-5 rounded-lg flex-grow w-full lg:w-[48%]">
                <h3 className="text-lg font-medium leading-relaxed">
                  How we design a SaaS Web app?
                </h3>
                <div className="mt-4 bg-black text-white rounded-full w-32 h-9 flex items-center justify-center text-sm">
                  Coming Soon
                </div>
              </article>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 h-full">
              <img
                className="w-full h-[450px] lg:w-[800px] lg:h-[600px] object-cover rounded-lg"
                src={case2}
                alt="Article 2"
              />
              <article className="bg-lightgray p-5 rounded-lg flex-grow w-full lg:w-[48%]">
                <h3 className="text-lg font-medium leading-relaxed">
                  Transform your data with interactive dashboards.
                </h3>
                <div className="mt-4 bg-black text-white rounded-full w-32 h-9 flex items-center justify-center text-sm">
                  Coming Soon
                </div>
              </article>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 h-full">
              <img
                className="w-full h-[450px] lg:w-[800px] lg:h-[600px] object-cover rounded-lg"
                src={case3}
                alt="Article 3"
              />
              <article className="bg-lightgray p-5 rounded-lg flex-grow w-full lg:w-[48%]">
                <h3 className="text-lg font-medium leading-relaxed">
                  AI-powered insights for smarter decision-making.
                </h3>
                <div className="mt-4 bg-black text-white rounded-full w-32 h-9 flex items-center justify-center text-sm">
                  Coming Soon
                </div>
              </article>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 h-full">
              <img
                className="w-full h-[450px] lg:w-[800px] lg:h-[600px] object-cover rounded-lg"
                src={case4}
                alt="Article 4"
              />
              <article className="bg-lightgray p-5 rounded-lg flex-grow w-full lg:w-[48%]">
                <h3 className="text-lg font-medium leading-relaxed">
                  Best practices for user-friendly web design.
                </h3>
                <div className="mt-4 bg-black text-white rounded-full w-32 h-9 flex items-center justify-center text-sm">
                  Coming Soon
                </div>
              </article>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MyLatestArticleSection;
