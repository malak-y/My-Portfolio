import { FaCode, FaLaptopCode, FaCogs, FaWrench } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  const handleScroll = () => {
    const element = ref.current;
    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight * 0.75) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <section className="skills min-h-screen bg-[#F8EDE3] py-16 mt-16" id="skills">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-[#C5705D] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-[#C5705D] text-lg">
          <motion.div
            className="skill-card p-6 bg-gradient-to-r from-[#DFD3C3] to-[#F4E9D8] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            ref={ref}
          >
            <div className="flex items-center justify-center mb-4 text-[#982B1C]">
              <FaCode className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Programming & Scripting Languages</h3>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                C++
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Java
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                JavaScript
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Python
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            className="skill-card p-6 bg-gradient-to-r from-[#DFD3C3] to-[#F4E9D8] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            <div className="flex items-center justify-center mb-4 text-[#982B1C]">
              <FaLaptopCode className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                HTML
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                CSS
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Bootstrap
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Tailwind
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                React.JS
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            className="skill-card p-6 bg-gradient-to-r from-[#DFD3C3] to-[#F4E9D8] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            <div className="flex items-center justify-center mb-4 text-[#982B1C]">
              <FaCogs className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Software Engineering</h3>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Data Structures & Algorithms
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Software Design and Architecture
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Spring Boot
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Junit & Selenium Testing
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Design Patterns
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            className="skill-card p-6 bg-gradient-to-r from-[#DFD3C3] to-[#F4E9D8] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            <div className="flex items-center justify-center mb-4 text-[#982B1C]">
              <FaWrench className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Figma
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                UI & UX
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Linux
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Git
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                AI
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-[#C5705D]">
                Fluent in English
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
