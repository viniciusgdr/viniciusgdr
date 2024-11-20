// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'TomoriBOT',
          path: '/projects/tomoribot.png',
          url: 'https://tomoribot.gdr.dev.br',
        },
        {
          title: 'gdrplay',
          path: '/projects/gdrplay.png'
        },
        {
          title: 'AIAChat',
          path: '/projects/aiachat.png',
          url: 'https://aiachat.com.br',
        },
        {
          title: 'gdrmusic',
          path: '/projects/gdrmusic.png',
          url: 'http://p6yabb2eqi3fd4dzqxtj77slywugkkhjdoo56dnu7kk7d3r23xdwsjad.onion/'
        },
        {
          title: 'BusConnect',
          path: '/projects/busconnect.png',
          url: 'https://busconnect.com.br/',
        }
      ],
    }
  ],
};
import { IoMdWarning } from "react-icons/io";
import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
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
      
      modules={[FreeMode, Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {
        workSlides.slides.map((slide, index) => {
          return <SwiperSlide key={index}>
            <div className='grid grid-cols-2 gap-4 grid-rows-2'>
              {
                slide.images.map((image, index2) => {
                  return (
                    image.url?.endsWith('.onion/') ? (
                      <div key={index2} className='relative rounded-lg overflow-hidden flex items-center justify-center group' onClick={() => {
                        (document.getElementById('modal_' + index2) as any).showModal();
                      }}>
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
                        <dialog id={'modal_' + index2} className="modal z-50">
                          <div className="modal-box bg-primary">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className='flex items-center gap-3'>
                              <IoMdWarning className="inline-block text-red-500" size={36} />
                              <h3 className="font-bold text-lg">
                                Atenção!
                              </h3>
                            </div>
                            <p className="py-4">
                              Este site é acessível apenas via Tor Browser. Para acessar, certifique-se de que você está utilizando o navegador correto.
                            </p>
                            <p>
                              <a href="https://www.torproject.org/download/" target="_blank" rel="noreferrer" className="text-blue-500 underline">Clique aqui</a> para baixar o Tor Browser.
                            </p>
                            <div className="bg-base-100 p-2 rounded-lg mt-4">
                              <h3 className="font-bold text-lg text-center pt-2">
                                Link do site
                              </h3>
                              <p className="py-4 break-all w-full text-white">
                                {image.url}
                              </p>
                            </div>
                            <div className="modal-action">
                              <form method="dialog">
                                <button className="btn">Fechar</button>
                              </form>
                              <form method="dialog">
                                <button className="btn btn-success" onClick={() => {
                                  window.open(image.url, '_blank');
                                }}>Acessar</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </div>
                    ) : !image.url ? (
                      <div key={index2} className='relative rounded-lg overflow-hidden flex items-center justify-center group' onClick={() => {
                        (document.getElementById('modal_' + index2) as any).showModal();
                      }}>
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
                        <dialog id={'modal_' + index2} className="modal z-50">
                          <div className="modal-box bg-primary">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className='flex items-center gap-3'>
                              <IoMdWarning className="inline-block text-red-500" size={36} />
                              <h3 className="font-bold text-lg">
                                Atenção!
                              </h3>
                            </div>
                            <p className="py-4">
                              Este site ainda não está disponível para visualização. Por favor, confira outros projetos.
                            </p>
                            <div className="modal-action">
                              <form method="dialog">
                                <button className="btn">Fechar</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </div>
                    ) :  <Link href={image.url ?? '/'} key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
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
                  )
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
