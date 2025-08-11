import { motion } from 'framer-motion';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills';

const Home = () => {
  return (
    <div>
      <section
        className="hero min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-12"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <motion.div
          className="relative z-10 container mx-auto text-center p-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ y: -5 }}
        >
          <div className="mb-8">
            <motion.h4
              className="text-lg font-semibold mb-2 tracking-wide"
              style={{ color: '#92828D', letterSpacing: '0.05em' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              Hi, there!
            </motion.h4>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
              style={{
                color: '#63264A',
                textShadow: '2px 2px 4px rgba(101, 67, 99, 0.25)',
                letterSpacing: '0.03em',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            >
              I'm <span style={{ color: '#BFA3B9' }}>Malak Yasser</span>
            </motion.h1>
          </div>
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto"
            style={{ color: '#111827', letterSpacing: '0.01em', lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
          >
            I'm a Frontend Developer and UI/UX Designer, and a graduate of Cairo University,
            Faculty of Computer Science and Artificial Intelligence. 
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 mb-12 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          >
            {[
              { href: 'https://www.linkedin.com/in/malakyasser311/', icon: 'ri-linkedin-fill', label: 'LinkedIn Profile' },
              { href: 'mailto:malakyasser541@gmail.com', icon: 'ri-mail-fill', label: 'Email' },
              { href: 'https://www.behance.net/malakyasser25', icon: 'ri-behance-fill', label: 'Behance Profile' },
              { href: 'https://github.com/malak-y', icon: 'ri-github-fill', label: 'GitHub Profile' }
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full transition-transform shadow-md"
                aria-label={link.label}
                style={{ backgroundColor: '#63264A', color: '#FFFFFF' }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, boxShadow: '0 8px 15px rgba(191, 163, 185, 0.5)', backgroundColor: '#BFA3B9', color: '#111827' }}
                transition={{ duration: 0.4 }}
              >
                <i className={`${link.icon} text-xl`}></i>
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
              className="py-3 px-6 rounded-lg font-semibold text-base md:text-lg shadow-md relative overflow-hidden transition-transform"
              style={{
                backgroundColor: '#63264A',
                color: '#FFFFFF',
                boxShadow: '0 4px 6px rgba(99, 38, 74, 0.5)',
              }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, backgroundColor: '#BFA3B9', color: '#111827' }}
              transition={{ duration: 0.3 }}
            >
              Hire Me
    
              <span
                className="absolute left-0 bottom-0 h-[2px] w-full bg-white opacity-0 transition-opacity duration-300"
                style={{ pointerEvents: 'none' }}
              />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/12wldOqN2rlJBCiYW5Ajlg6RTeqT8RMWA/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-lg font-semibold border border-transparent transition-transform"
              style={{
                backgroundColor: '#F9FAFB',
                color: '#111827',
                borderColor: '#92828D',
              }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, backgroundColor: '#BFA3B9', color: '#111827', borderColor: '#BFA3B9' }}
              transition={{ duration: 0.3 }}
            >
              Download CV
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
