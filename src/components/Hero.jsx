import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaLinkedin, FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Container for text and social icons */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`} // Disable pointer events for this container
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sarang</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full Stack Developer. I develop 3D visuals, Responsive user <br className="sm:block hidden" />
            interfaces and web applications
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 my-4">
            <a
              href="https://www.linkedin.com/in/sarang-tadaskar-ba9a64251/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-[#915EFF] flex justify-center items-center text-[#915EFF] hover:bg-[#915EFF] hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:translate-y-[-8px]"
              style={{ pointerEvents: 'auto' }} // Enable pointer events for icons
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SarangTech09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-[#915EFF] flex justify-center items-center text-[#915EFF] hover:bg-[#915EFF] hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:translate-y-[-8px]"
              style={{ pointerEvents: 'auto' }}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-[#915EFF] flex justify-center items-center text-[#915EFF] hover:bg-[#915EFF] hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:translate-y-[-8px]"
              style={{ pointerEvents: 'auto' }}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-[#915EFF] flex justify-center items-center text-[#915EFF] hover:bg-[#915EFF] hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:translate-y-[-8px]"
              style={{ pointerEvents: 'auto' }}
            >
              <FaInstagram />
            </a>
          </div>

          {/* Download CV Button */}
          <button
            type="submit"
            className="bg-white text-black py-3 px-8 rounded-3xl font-bold transition-colors duration-300 ease-in-out hover:bg-[#915EFF] hover:text-white mt-4"
            style={{ pointerEvents: 'auto' }} // Enable pointer events for the button
          >
            <a href="https://drive.google.com/file/d/13EkeX_2-KBX9XF-aj6JMDJ_MY5MeLcL1/view?usp=sharing" target="_blank" rel="noopener noreferrer"> 
            Download CV </a>
          </button>
        </div>
      </div>

      {/* 3D model needs pointer events */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
        <ComputersCanvas />
      </div>

      {/* Scroll down indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
