/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import About from './About'; // Adjust the path as needed
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills'; // Import the Skills component

const Home = () => {
  return (
    <div>
      <section className="hero min-h-screen bg-[#F8EDE3] flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-12">
        <motion.div
          className="relative z-10 container mx-auto text-center p-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.h4
              className="text-lg font-semibold text-[#C5705D] mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi, There!
            </motion.h4>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#C5705D] mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I'm <span className="text-[#982B1C]">Malak Yasser</span>
            </motion.h1>
          </div>
          <motion.p
            className="text-[#C5705D] text-base sm:text-lg md:text-xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            I'm a student at Cairo University, currently in my fourth year in the Faculty of
            <br />
            Computer Science and Artificial Intelligence.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 mb-12 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/malakyasser311/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-[#C5705D] text-[#F8EDE3] rounded-full hover:bg-[#D0B8A8] transition-transform"
              aria-label="LinkedIn Profile"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.4 }}
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </motion.a>
            <motion.a
              href="mailto:malakyasser541@gmail.com"
              className="flex items-center justify-center w-12 h-12 bg-[#C5705D] text-[#F8EDE3] rounded-full hover:bg-[#D0B8A8] transition-transform"
              aria-label="Email"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.4 }}
            >
              <i className="ri-mail-fill text-xl"></i>
            </motion.a>
            <motion.a
              href="https://www.behance.net/malakyasser25"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-[#C5705D] text-[#F8EDE3] rounded-full hover:bg-[#D0B8A8] transition-transform"
              aria-label="Behance Profile"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.4 }}
            >
              <i className="ri-behance-fill text-xl"></i>
            </motion.a>
            <motion.a
              href="https://github.com/malak-y"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-[#C5705D] text-[#F8EDE3] rounded-full hover:bg-[#D0B8A8] transition-transform"
              aria-label="GitHub Profile"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.4 }}
            >
              <i className="ri-github-fill text-xl"></i>
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <motion.a
              href="mailto:malakyasser541@gmail.com?subject=Inquiry%20About%20Hiring"
              className="btn bg-[#C5705D] text-[#F8EDE3] py-3 px-6 rounded-lg font-semibold text-base md:text-lg hover:bg-[#D0B8A8] transition-transform"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Hire Me
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1MD4yMi98Q8mn55GcfnzsjW0dUgBY2N9V/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#F8EDE3] text-[#C5705D] py-3 px-6 rounded-lg font-semibold border border-[#982B1C] hover:bg-[#D0B8A8] transition-transform"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <About />  {/* The About section */}
      <Skills /> {/* The Skills section */}
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
