import ProjectsBtn from "@viniciusgdr/components/ProjectsBtn";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import ParticlesContainer from "@viniciusgdr/components/ParticlesContainer";
import { TypeAnimation } from "react-type-animation";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Início"
        description="Portfolio de Carlos Vinicius (viniciusgdr) — desenvolvedor fullstack. Projetos com React, Next.js, Node.js, TypeScript, Docker e mais."
        canonical="https://viniciusgdr.com"
      />
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
            Desenvolvedor fullstack <br /> que constrói{" "}
            <span className="text-accent">produtos reais</span>
          </motion.h1>
          <motion.p
            className="text-white mb-4 text-4xl lg:leading-normal font-extrabold"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "React & Next.js",
                1500,
                "Node.js & NestJS",
                1500,
                "React Native & Flutter",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.p>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Crio aplicações web e mobile escaláveis, do backend à interface,
            usando TypeScript, React, Node.js e arquitetura limpa.
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
      </div>

    </div>
    </>
  );
}
