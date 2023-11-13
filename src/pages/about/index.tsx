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
} from "react-icons/si";

import { motion } from 'framer-motion';
import Avatar from '@viniciusgdr/components/Avatar';
import { fadeIn } from '../../../variants';
import CountUp from 'react-countup';
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiLaravel />,
          <SiLivewire />,
          <SiNextdotjs />,
        ],
      },
      {
        title: 'Backend Development',
        icons: [
          <SiNodedotjs />,
          <SiTypescript />,
          <SiGoland />,
          <SiPhp />,
          <SiC />,
          <SiNestjs />
        ]
      },
      {
        title: 'Database',
        icons: [
          <SiMongodb />,
          <SiSqlite />,
          <SiPostgresql />,
          <SiPrisma />,
        ]
      },
      {
        title: 'Mobile Development',
        icons: [
          <SiReact />,
          <SiExpo />,
        ]
      }
    ],
  },
  {
    title: 'experiências',
    info: [
      {
        title: 'BusConnect: Horários de Ônibus',
        stage: '2023-Atual',
      },
      {
        title: 'Auxiliar de Monitoramento na Cooper-UNE',
        stage: '2022-Atual',
      },
      {
        title: 'TomoriBOT WhatsApp',
        stage: '2020-Atual',
      },
      {
        title: 'gdrplay: Plataforma de Streaming',
        stage: '2023',
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
        stage: '2023-2025',
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
  return <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
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
          className='h2'
        >
          Construindo <span className='text-accent'>experiências</span> digitais incríveis, há mais de 2 anos
        </motion.h2>
        <motion.p
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          Há 1 ano atrás, eu comecei sendo um programador freelancer. Desde então, fiz diversos projetos para atender as necessidades dos clientes.
        </motion.p>
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden md:flex md:max-w-xl max:max-w-none mx-auto xl:mx-0 mb-8'>
          <div className='flex flex-1 xl:gap-x-6'>
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={3} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Anos de Experiência
              </div>
            </div>
            <div className='relative flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={6} duration={5} /> +
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
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
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
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, i) => {
            return <div key={i} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
              <div className='font-light mb-2 md:mb-0'>{item.title}</div>
              <div className='hidden md:flex'>-</div>
              {
                'stage' in item && <div className='text-end'>{item.stage}</div> || 'icons' in item && (
                  <div className='flex gap-x-4'>
                    {
                      item.icons.map((icon, i) => {
                        return <div key={i} className='text-2xl'>{icon}</div>;
                      })
                    }
                  </div>
                )
              }
            </div>;
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
