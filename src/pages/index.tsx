import ProjectsBtn from "@viniciusgdr/components/ProjectsBtn";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import Avatar from "@viniciusgdr/components/Avatar";
import ParticlesContainer from "@viniciusgdr/components/ParticlesContainer";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="">
      <div className="w-full md:py-12 min-h-[750px] md:min-h-screen h-full bg-black/30 md:bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center mt-auto md:mt-32 lg:mt-0 flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transformando sonhos <br /> em{" "}
            <span className="text-accent">realidade</span>
          </motion.h1>
          <motion.h1
            className="text-white mb-4 text-4xl lg:leading-normal font-extrabold"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <TypeAnimation
              sequence={[
                "Desenvolvedor Web",
                1000,
                "Desenvolvedor Mobile",
                1000,
                "Desenvolvedor Fullstack",
                3000,
                "Clean Architecture",
                1000,
                "Aplicações Escaláveis",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Tire suas ideias do papel e transforme-as em realidade com meu
            serviço. Desenvolvo aplicações web escalaveis e mobile com as
            melhores tecnologias do mercado.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className='w-full md:w-[1200px] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[747px] max-h-[678px] absolute md:-bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
      <div className="hidden">
        {
          // SEO Component
        }
        <h1>Carlos Vinicius - Desenvolvedor Web e Mobile</h1>
        <p>
          Carlos Vinicius - Desenvolvedor Web e Mobile - HTML, CSS, JavaScript,
          React, Next.js, Node.js, TypeScript, Docker, Clean Architecture,
          Aplicações Escaláveis, Aplicações Web, Aplicações Mobile | viniciusgdr
        </p>
        <h2>viniciusgdr.com</h2>
      </div>
    </div>
  );
}
