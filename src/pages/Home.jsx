import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills';

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/malakyasser311/', icon: 'ri-linkedin-fill', label: 'LinkedIn' },
    { href: 'mailto:malakyasser541@gmail.com', icon: 'ri-mail-fill', label: 'Email' },
    { href: 'https://www.behance.net/malakyasser25', icon: 'ri-behance-fill', label: 'Behance' },
    { href: 'https://github.com/malak-y', icon: 'ri-github-fill', label: 'GitHub' }
  ];

  return (
    <div ref={ref} className="overflow-x-hidden">
      <section className="hero min-h-screen flex flex-col items-center justify-center relative pt-20 pb-10 px-3 sm:px-6 md:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-5"
            style={{ backgroundSize: '40px 40px' }}
            animate={{ backgroundPositionX: ['0%', '100%'] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div
          className="relative z-10 container mx-auto text-center px-2 sm:px-6 md:px-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div 
            className="absolute -top-16 -left-16 w-28 sm:w-48 h-28 sm:h-48 rounded-full bg-[#BFA3B9] opacity-10 blur-3xl -z-10"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="mb-8 relative">
            <motion.h4
              className="text-xs sm:text-base md:text-lg font-semibold mb-2 tracking-wider uppercase"
              style={{ color: '#92828D', letterSpacing: '0.2em' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              Welcome to my world
            </motion.h4>
            
            <motion.h1
              className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-center"
              style={{
                color: '#63264A',
                textShadow: '2px 2px 4px rgba(101, 67, 99, 0.2)',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            >
              I'm <span className="bg-clip-text text-transparent bg-[#63264A]" style={{ WebkitTextStroke: '1px #63264A' }}>
                Malak Yasser
              </span>
            </motion.h1>
          </div>
          <motion.p
            className="text-sm sm:text-lg md:text-xl mb-8 sm:mb-12 leading-relaxed max-w-md sm:max-w-2xl mx-auto px-2"
            style={{ color: '#111827', lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
          >
            Creative frontend developer and UI/UX designer with a passion for building beautiful, 
            functional digital experiences. Graduate of Cairo University, Faculty of Computer Science.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full transition-all shadow-md relative overflow-hidden group"
                style={{ backgroundColor: '#63264A', color: '#FFFFFF' }}
                whileHover={{ scale: 1.1 }}
              >
                <i className={`${link.icon} text-sm sm:text-base md:text-lg z-10`}></i>
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5, ease: 'easeOut' }}
          >
            <a
              href="mailto:malakyasser541@gmail.com?subject=Inquiry%20About%20Hiring"
              className="w-full sm:w-auto text-center py-2.5 px-5 sm:px-8 rounded-full font-semibold text-sm sm:text-lg shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #63264A 0%, #7C3A61 100%)',
                color: '#FFFFFF',
              }}
            >
              Hire Me 👋
            </a>
            <a
              href="https://drive.google.com/file/d/12wldOqN2rlJBCiYW5Ajlg6RTeqT8RMWA/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center py-2.5 px-5 sm:px-8 rounded-full font-semibold text-sm sm:text-lg border-2"
              style={{ borderColor: '#63264A', color: '#63264A' }}
            >
              Download CV 📄
            </a>
          </motion.div>
        </motion.div>
      </section>
      <div className="container mx-auto px-3 sm:px-6 md:px-8">
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
