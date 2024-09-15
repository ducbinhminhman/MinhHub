import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'; // Import the Pagination module from swiper/modules
import MinhPray from '../assets/MinhPray.png';
import MinhShop from '../assets/Minhshop.png';
import MinhFit from '../assets/MinhFit.png';

const InspirationCollectionSection = () => {
  return (
    <section className="w-full min-h-screen text-center text-[32px] text-font-color font-montserrat py-[60px]">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-bold">Inspiration Collection</h2>
        <p className="text-[20px] text-font-color">Minh’s work, inspired by books, wellness, and simplicity, makes life easier.</p>
      </div>

      {/* Swiper for mobile screens */}
      <div className="w-full lg:hidden">
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]} // Add Pagination module for swiper
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-[355px] mx-auto">
              <img
                className="w-full h-[434px] object-cover rounded-tl-41xl rounded-bl-none rounded-br-none"
                alt="Minh Pray"
                src={MinhPray}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[355px] mx-auto">
              <img
                className="w-full h-[434px] object-cover"
                alt="Minh Shop"
                src={MinhShop}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[355px] mx-auto">
              <img
                className="w-full h-[434px] object-cover rounded-tr-none rounded-br-41xl rounded-bl-none"
                alt="Minh Fit"
                src={MinhFit}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Grid for large screens */}
      <div className="hidden lg:flex container flex-wrap justify-center gap-6 mt-10 px-4">
        <div className="w-[355px]">
          <img
            className="w-full h-[434px] object-cover rounded-tl-41xl rounded-bl-none rounded-br-none"
            alt="Minh Pray"
            src={MinhPray}
          />
        </div>

        <div className="w-[355px]">
          <img
            className="w-full h-[434px] object-cover"
            alt="Minh Shop"
            src={MinhShop}
          />
        </div>

        <div className="w-[355px]">
          <img
            className="w-full h-[434px] object-cover rounded-tr-none rounded-br-41xl rounded-bl-none"
            alt="Minh Fit"
            src={MinhFit}
          />
        </div>
      </div>
    </section>
  );
};

export default InspirationCollectionSection;
