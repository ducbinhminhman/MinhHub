import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules'; // Updated import
import ai from '../assets/ai.png';
import dashboard from '../assets/dashboard.png';
import web from '../assets/web.png';

const BrowseTheRangeSection= () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-14 px-0 text-font-color font-montserrat">
      {/* Section Title */}
      <div className="flex flex-col items-center gap-8 mb-12 text-center">
        <h2 className="text-[28px] font-bold">Browse The Range</h2>
        <p className="text-lg text-font-color1">
          Minh crafts web apps, AI solutions, and dashboards that turn data into smart decisions.
        </p>
      </div>

      {/* Content */}
      <div className="w-full lg:hidden">
        {/* Swiper for small screens */}
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]} // Updated Swiper modules
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center gap-6">
              <img src={web} alt="Web Applications" className="w-[300px] h-[400px] rounded-3xl object-cover" />
              <h3 className="font-semibold text-xl">Web Applications</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-6">
              <img src={dashboard} alt="Dashboards" className="w-[300px] h-[400px] rounded-3xl object-cover" />
              <h3 className="font-semibold text-xl">Dashboards</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-6">
              <img src={ai} alt="AI Solutions" className="w-[300px] h-[400px] rounded-3xl object-cover" />
              <h3 className="font-semibold text-xl">AI Solutions</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Grid for large screens */}
      <div className="hidden lg:flex flex-row items-center justify-center gap-10 text-center text-2xl">
        {/* Web Applications */}
        <div className="flex flex-col items-center gap-6">
          <img src={web} alt="Web Applications" className="w-[381px] h-[480px] rounded-3xl object-cover" />
          <h3 className="font-semibold">Web Applications</h3>
        </div>

        {/* Dashboards */}
        <div className="flex flex-col items-center gap-6">
          <img src={dashboard} alt="Dashboards" className="w-[381px] h-[480px] rounded-3xl object-cover" />
          <h3 className="font-semibold">Dashboards</h3>
        </div>

        {/* AI Solutions */}
        <div className="flex flex-col items-center gap-6">
          <img src={ai} alt="AI Solutions" className="w-[381px] h-[480px] rounded-3xl object-cover" />
          <h3 className="font-semibold">AI Solutions</h3>
        </div>
      </div>
    </section>
  );
};

export default BrowseTheRangeSection;
