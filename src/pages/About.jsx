import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const About = () => {
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
    <section className="flex items-center justify-center min-h-screen bg-[#F8EDE3] py-16 mt-16" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-12 text-[#C5705D]"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
        >
          About Me
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center p-8 md:p-16 bg-[#D0B8A8] shadow-xl rounded-3xl">
          <motion.div
            className="flex-1 mb-8 md:mb-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            ref={ref}
          >
            <div
              className="relative w-80 h-80 rounded-full overflow-hidden"
            >
              <img
                src="assets/WhatsApp_Image_2024-08-02_at_15.53.22-removebg-preview.png"
                alt="About"
                className="w-full h-full object-cover rounded-full border-8 border-[#C5705D] shadow-lg"
                style={{ boxShadow: `0 8px 16px rgba(197, 112, 93, 0.6)` }} // Custom shadow color
              />
            </div>
          </motion.div>
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={controls}
          >
            <h2 className="text-5xl font-extrabold mb-8 text-[#C5705D]">
              I am a Software <span className="text-[#982B1C]">Engineer</span>
            </h2>
            <div className="space-y-4 text-lg text-[#F8EDE3]">
              <p>
                Age: <span className="font-semibold text-[#C5705D]">21 Years</span>
              </p>
              <p>
                Specialty: <span className="font-semibold text-[#C5705D]">Front End Developer</span>
              </p>
              <p>
                Address: <span className="font-semibold text-[#C5705D]">Dokki</span>
              </p>
              <p>
                Email: <a href="mailto:malakyasser541@gmail.com" className="font-semibold text-[#C5705D] hover:underline">malakyasser541@gmail.com</a>
              </p>
              <p>
                Phone: <span className="font-semibold text-[#C5705D]">01284876844</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
