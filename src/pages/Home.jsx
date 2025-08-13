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
    <div ref={ref}>
     
    

      <section className="hero min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Grid Pattern */}
          <motion.div 
            className="absolute inset-0 opacity-5"
            style={{
             
              backgroundSize: '40px 40px',
            }}
            animate={{
              backgroundPositionX: ['0%', '100%'],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <motion.div
          className="relative z-10 container mx-auto text-center p-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Glowing Highlight */}
          <motion.div 
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#BFA3B9] opacity-10 blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="mb-8 relative">
            <motion.div
              className="absolute -left-10 top-1/2 w-2 h-16 bg-[#63264A] rounded-full"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'backOut' }}
            />
            
            <motion.h4
              className="text-lg font-semibold mb-2 tracking-wider uppercase"
              style={{ color: '#92828D', letterSpacing: '0.2em' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              Welcome to my world
            </motion.h4>
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              style={{
                color: '#63264A',
                textShadow: '3px 3px 6px rgba(101, 67, 99, 0.2)',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            >
              <motion.span 
                className="inline-block"
                whileHover={{ y: -5 }}
              >
                I'm <span 
                  className="bg-clip-text text-transparent bg-[#63264A] "
                  style={{ WebkitTextStroke: '1px #63264A' }}
                >
                  Malak Yasser
                </span>
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="absolute -right-10 bottom-0 w-2 h-16 bg-[#BFA3B9] rounded-full"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'backOut' }}
            />
          </div>

          <motion.p
            className="text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto relative"
            style={{ color: '#111827', lineHeight: 1.8 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
          >
            <motion.span
              className="absolute -left-6 top-2 text-2xl text-[#BFA3B9]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              ❝
            </motion.span>
            Creative frontend developer and UI/UX designer with a passion for building beautiful, 
            functional digital experiences. Graduate of Cairo University, Faculty of Computer Science.
            <motion.span
              className="absolute -right-6 bottom-2 text-2xl text-[#BFA3B9]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              ❞
            </motion.span>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12 justify-center"
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
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all shadow-lg relative overflow-hidden group"
                aria-label={link.label}
                style={{ backgroundColor: '#63264A', color: '#FFFFFF' }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                custom={index}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <i className={`${link.icon} text-xl z-10`}></i>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-br from-[#63264A] to-[#BFA3B9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                />
                <motion.span 
                  className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-4/5 group-hover:-translate-x-1/2 transition-all duration-300"
                  initial={{ width: 0 }}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5, ease: 'easeOut' }}
          >
            <motion.a
              href="mailto:malakyasser541@gmail.com?subject=Inquiry%20About%20Hiring"
              className="py-3 px-8 rounded-full font-semibold text-lg shadow-xl relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #63264A 0%, #7C3A61 100%)',
                color: '#FFFFFF',
              }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Hire Me
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👋
                </motion.span>
              </span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-br from-[#BFA3B9] to-[#63264A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/12wldOqN2rlJBCiYW5Ajlg6RTeqT8RMWA/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-8 rounded-full font-semibold text-lg border-2 relative overflow-hidden group"
              style={{
                backgroundColor: 'transparent',
                color: '#63264A',
                borderColor: '#63264A',
              }}
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#F8EDE3',
                color: '#63264A'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Download CV
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  📄
                </motion.span>
              </span>
              <motion.span 
                className="absolute inset-0 bg-[#F8EDE3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
      
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;