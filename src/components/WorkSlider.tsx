// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'TomoriBOT',
          path: '/tomoribot.png',
          url: 'https://tomoribot.gdr.dev.br',
        },
        {
          title: 'gdrplay',
          path: '/gdrplay.png',
          url: 'https://play.gdr.dev.br',
        },
        {
          title: 'BusConnect',
          path: '/busconnect.png',
          url: 'https://busconnect.com.br/',
        }
      ],
    }
  ],
};

import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from 'next/image';
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {
        workSlides.slides.map((slide, index) => {
          return <SwiperSlide key={index}>
            <div className='grid grid-cols-2 gap-4 grid-rows-2 cursor-pointer'>
              {
                slide.images.map((image, index) => {
                  return <Link href={image.url} key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      <Image src={image.path} alt={image.title} width={500} height={300} />
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='delay-100'>LIVE</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                })
              }
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  );
};

export default WorkSlider;
