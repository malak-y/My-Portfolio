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
        controls.start({ 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.6, ease: 'easeOut' } 
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <section className="relative flex items-center justify-center min-h-screen py-16 mt-16" id="about">
      {/* Remove Decorative background elements */}
      {/* <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ backgroundColor: '#63264A' }}></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ backgroundColor: '#11030eff' }}></div>
      </div> */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
        >
          <motion.span 
            className="text-lg font-medium tracking-widest text-[#92828D] mb-4 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            GET TO KNOW ME
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-[#63264A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            About <span className="text-[#BFA3B9]">Me</span>
          </motion.h1>
          <motion.div 
            className="w-20 h-1 mx-auto bg-[#63264A] opacity-30"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image with modern frame effect */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            ref={ref}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl border-4 border-[#63264A] transform rotate-6 opacity-30"></div>
              <div className="absolute inset-0 rounded-3xl border-4 border-[#BFA3B9] transform -rotate-6 opacity-30"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="assets/1723535464191.jpeg"
                  alt="About"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#63264A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>

          {/* Information with modern layout */}
          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={controls}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-[#63264A]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Software <span className="text-[#92828D]">Engineer</span> &<br />
              <span className="text-[#BFA3B9]">Frontend</span> Specialist
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {/* Removed background and blur classes */}
              <div className="p-6 rounded-xl border border-[#BFA3B9]/20 hover:border-[#63264A]/40 transition-all duration-300">
                <p className="text-[#4B4453] mb-1">Age</p>
                <p className="font-semibold text-[#63264A] text-xl">21 Years</p>
              </div>

              <div className="p-6 rounded-xl border border-[#BFA3B9]/20 hover:border-[#63264A]/40 transition-all duration-300">
                <p className="text-[#4B4453] mb-1">Specialty</p>
                <p className="font-semibold text-[#63264A] text-xl">Frontend Developer</p>
              </div>

              <div className="p-6 rounded-xl border border-[#BFA3B9]/20 hover:border-[#63264A]/40 transition-all duration-300">
                <p className="text-[#4B4453] mb-1">Location</p>
                <p className="font-semibold text-[#63264A] text-xl">Dokki, Egypt</p>
              </div>

              <div className="p-6 rounded-xl border border-[#BFA3B9]/20 hover:border-[#63264A]/40 transition-all duration-300">
                <p className="text-[#4B4453] mb-1">Phone</p>
                <p className="font-semibold text-[#63264A] text-xl">01284876844</p>
              </div>

              <div className="md:col-span-2 p-6 rounded-xl border border-[#BFA3B9]/20 hover:border-[#63264A]/40 transition-all duration-300">
                <p className="text-[#4B4453] mb-1">Email</p>
                <a
                  href="mailto:malakyasser541@gmail.com"
                  className="font-semibold text-[#63264A] text-xl hover:text-[#BFA3B9] transition-colors duration-300"
                >
                  malakyasser541@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
