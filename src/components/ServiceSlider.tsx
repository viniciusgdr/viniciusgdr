// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopLeft,
  RxArrowTopRight,
  RxMobile,
  RxCode,
} from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";
import { Pagination } from "swiper";
import { SiJest, SiTestin } from 'react-icons/si';
// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Aplicações Web",
    description: "Desenvolvimento de aplicações web escaláveis e responsivas.",
  },
  {
    icon: <RxMobile />,
    title: "Aplicações Mobile",
    description: "Desenvolvimento de aplicativos mobile para Android e iOS.",
  },
  {
    icon: <RxCode />,
    title: "APIs",
    description: "Desenvolvimento de APIs RESTful.",
  },
  {
    icon: <SiJest />,
    title: "Testes Unitários",
    description: "Desenvolvimento de testes unitários para garantir a qualidade do código.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item, index) => {
          return <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
