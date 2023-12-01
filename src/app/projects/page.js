'use client';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const list = ['Amaz', 'Caserta', 'Goretti', 'Amaz', 'Caserta', 'Goretti'];
  return (
    <div className="dvhTOvh flex flex-col w-screen h-[100dvh] pt-20 px-10 md:px-24 md:pt-20 lg:px28 lg:pt-24 xl:px-40 xl:pt-36">
      <div className="flex justify-center items-center h-full w-full">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          className="mySwiper"
          spaceBetween={80}
          slidesPerView={1}
          navigation
          loop="true"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          // autoplay
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {list.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="flex justify-center flex-col items-center cursor-pointer">
                  <img
                    key={idx}
                    src={`/projects/${item}.jpg`}
                    className="w-full h-full img-res"
                  />
                  <div className="mt-4 text-sm md:text-base lg:text-lg xl:text-xl">
                    {item}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}
