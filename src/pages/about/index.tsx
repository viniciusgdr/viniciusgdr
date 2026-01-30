// icons
import Circles from '@viniciusgdr/components/Circles';
import { useState } from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiLaravel,
  SiLivewire,
  SiNestjs,
  SiMongodb,
  SiSqlite,
  SiPostgresql,
  SiTypescript,
  SiPrisma,
  SiNodedotjs,
  SiGoland,
  SiPhp,
  SiC,
  SiReact,
  SiExpo,
  SiFlutter,
  SiDart,
} from "react-icons/si";

import { motion } from 'framer-motion';
import Avatar from '@viniciusgdr/components/Avatar';
import { fadeIn } from '../../../variants';
import CountUp from 'react-countup';
import Image from 'next/image';
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={0} />,
          <FaCss3 key={1} />,
          <FaJs key={2} />,
          <FaReact key={3} />,
          <SiNextdotjs key={4} />
        ],
      },
      {
        title: 'Backend Development',
        icons: [
          <SiNodedotjs key={0} />,
          <SiTypescript key={1} />,
          <SiGoland key={2} />,
          <SiDart key={3} />,
          <SiC key={4} />,
          <SiNestjs key={5} />
        ]
      },
      {
        title: 'Database',
        icons: [
          <SiMongodb key={0} />,
          <SiSqlite key={1} />,
          <SiPostgresql key={2} />,
          <SiPrisma key={3} />,
        ]
      },
      {
        title: 'Mobile Development',
        icons: [
          <SiReact key={1} />,
          <SiExpo key={2} />,
          <SiFlutter key={3} />,
        ]
      }
    ],
  },
  {
    title: 'experiências',
    info: [
      {
        title: 'Accio Educacional',
        stage: 'Jun. 2025 - Atual'
      },
      {
        title: 'Projeto TomoriBOT WhatsApp',
        stage: '2020 - Atual',
      },
      {
        title: 'CargoBR',
        stage: 'Set. 2024 - Mar. 2025',
      },
      {
        title: 'Auxiliar de Monitoramento na Cooper-UNE',
        stage: 'Mar. 2022 - Abr. 2024',
      },
      {
        title: 'TuttaBOT: Apostas Online Automatizadas para a Blaze',
        stage: '2022-2023',
      },
    ],
  },
  {
    title: 'cursos e certificados',
    info: [
      {
        title: 'Técnico em Redes de Computadores - Escola Técnica Estadual Governador Eduardo Campos',
        stage: 'Fev. 2023 - Dez. 2025',
      },
      {
        title: 'Hackers do Bem - Curso de Segurança da Informação e Redes de Computadores',
        stage: '2024',
        certs: [
          {
            url: '/certs/hackersdobem-basico.pdf',
            preview: '/certs/preview/bem1.png'
          },
          {
            url: '/certs/hackersdobem-fundamental.pdf',
            preview: '/certs/preview/bem2.png'
          }
        ]
      },
      {
        title: 'NodeJS, Typescript, TDD, DDD, Clean Architecture e SOLID course, 4Dev academy - Rodrigo Manguinho',
        stage: '2022-2023',
      },
      {
        title: 'Curso Full Stack Profissional com Javascript - Onebitcode',
        stage: '2021-2022',
      },
      {
        title: 'Curso Web Moderno Completo com JavaScript 2022 - Cod3r Cursos Online',
        stage: '2022',
      },
      {
        title: 'Curso Técnico em Computadores - UltraCursos',
        stage: '2015-2018',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return <div className='pt-12 pb-32 md:pt-32 text-center xl:text-left'>
    <Circles />
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 max-w-[640px] mx-auto xl:mx-0'
        >
          +3 anos criando <span className='text-accent'>experiências</span> digitais.
        </motion.h2>
        <motion.a
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          href='/curriculum.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full text-center w-56 self-center xl:self-start px-6 py-3 bg-accent text-white font-bold text-lg'
        >
          Baixar Currículo
        </motion.a>
        <motion.p
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-[680px] mx-auto xl:mx-0 mb-6 xl:mb-8 px-2 xl:px-0'>
          Há cinco anos, iniciei minha jornada como programador freelancer. Desde então, desenvolvi uma variedade de projetos para atender às demandas dos clientes. Atualmente sou dono da Accio Educacional, onde desenvolvi uma solução de reconhecimento facial para escolas e atuo como desenvolvedor full stack. Minha paixão sempre foi criar soluções inovadoras que impactam positivamente a vida das pessoas.
        </motion.p>
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden md:flex md:max-w-2xl max:max-w-none mx-auto xl:mx-0 mb-6'>
          <div className='flex flex-1 xl:gap-x-6'>
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={5} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Anos de Experiência
              </div>
            </div>
            <div className='relative flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={8} duration={5} /> +
              </div>
              <div className='text-xs text-left pl-2 xl:pl-0 uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Projetos Completados
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='flex flex-col w-full xl:max-w-[48%] md:h-[480px] h-full'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {
            aboutData.map((item, i) => {
              return <div
                key={i}
                onClick={() => setIndex(i)}
                className={`${index === i && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}>
                {item.title}
              </div>;
            })
          }
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, i) => {
            const isTimeline = 'stage' in item;
            const isSkills = 'icons' in item;
            const isCerts = 'certs' in item;
            return <div
              key={i}
              className={'w-full ' + (isTimeline ? 'max-w-[560px]' : 'max-w-max') + (isCerts ? ' cursor-pointer' : '')}
              onClick={() => {
              if ('certs' in item) {
                (document.getElementById('modal_' + i) as any).showModal();
              }
            }}>
              <div className={
                isTimeline
                  ? 'grid gap-2 sm:grid-cols-[1fr_auto] items-start rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80'
                  : 'flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/70'
              }>
                <div className={
                  'font-medium leading-snug ' + (isCerts ? 'underline decoration-white/30' : '')
                }>
                  {item.title}
                </div>
                {isTimeline && (
                  <div className='text-xs sm:text-sm uppercase tracking-[1px] text-white/60 sm:text-right'>
                    {item.stage}
                  </div>
                )}
                {isSkills && (
                  <div className='flex gap-x-4'>
                    {item.icons.map((icon, i2) => {
                      return <div key={i2} className='text-2xl'>{icon}</div>;
                    })}
                  </div>
                )}
              </div>
              {
                'certs' in item && <dialog id={'modal_' + i} className="modal z-50">
                  <div className="modal-box bg-primary">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='flex items-center gap-3'>
                      <h3 className="font-bold text-lg">
                        {
                          'Certificado' + (item.certs!.length > 1 ? 's' : '')
                        }
                      </h3>
                    </div>
                    <div className='flex flex-col py-4'>
                      {
                        item.certs!.map((cert, i2) => {
                          return <div key={i2} className='flex flex-col gap-x-6 items-center' onClick={() => {
                            window.open(cert.url, '_blank');
                          }}>
                            <Image src={cert.preview} alt={item.title} width={300} height={200} />
                            <h3 className="pb-4 break-all w-full text-white text-center">
                              {cert.url}
                            </h3>
                          </div>;
                        })
                      }
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Fechar</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              }
            </div>;
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
