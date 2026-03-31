import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import { NextSeo } from 'next-seo';
const Contact = () => {
  return <div className=''>
    <NextSeo title='Contato' description='Entre em contato com Carlos Vinicius (viniciusgdr) — desenvolvedor fullstack disponível para projetos, freelance e consultoria técnica.' canonical='https://viniciusgdr.com/contact' />
    <div className='container mx-auto py-12 md:py-32 text-center xl:text-left flex items-center justify-center h-full'>
      <div className='flex flex-col w-full max-w-[700px]'>
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='h2 text-center mb-12'>
          Vamos <span className='text-accent'>conversar</span>?
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='mb-12'>
          Se você tem um projeto em mente ou gostaria de conversar sobre alguma tecnologia, fique à vontade para entrar em contato.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex self-center items-center justify-center xl:justify-start'>
          <Link href='mailto:viniciusgdr@outlook.com' className='bg-accent hover:bg-accent/30 text-white font-bold py-2 px-4 rounded-full transition-all duration-150 ease-in-out'>
            Enviar email
          </Link>
          <Link href='https://wa.me/558183064666' className='bg-accent hover:bg-accent/30 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out ml-4'>
            <FaWhatsapp className='inline-block mr-2' size={27} />
            Whatsapp
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
};

export default Contact;
