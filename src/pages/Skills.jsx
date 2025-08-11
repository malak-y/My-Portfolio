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
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <section className="skills min-h-screen py-20 mt-16" id="skills">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-extrabold mb-16"
          style={{ color: '#63264A' }}
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-[#4B4453]">
          {[{
            icon: <FaCode className="text-5xl" style={{ color: '#63264A' }} />,
            title: "Programming & Scripting Languages",
            items: ["C++", "Java", "JavaScript", "Python"],
          },{
            icon: <FaLaptopCode className="text-5xl" style={{ color: '#63264A' }} />,
            title: "Web Development",
            items: ["HTML", "CSS", "Bootstrap", "Tailwind", "React.JS"],
          },{
            icon: <FaCogs className="text-5xl" style={{ color: '#63264A' }} />,
            title: "Software Engineering",
            items: [
              "Data Structures & Algorithms",
              "Software Design & Architecture",
              "Spring Boot",
              "Junit & Selenium Testing",
              "Design Patterns",
            ],
          },{
            icon: <FaWrench className="text-5xl" style={{ color: '#63264A' }} />,
            title: "Other Skills",
            items: ["Figma", "UI & UX", "Linux", "Git", "AI", "Fluent in English"],
          }].map(({icon, title, items}, i) => (
            <motion.div
  key={title}
  className="skill-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-default"
  style={{
    background: '#BFA3B9',
    border: '1px solid #BFA3B9',
  }}
  whileHover={{ scale: 1.05, y: -10 }}  // <-- move up and scale on hover
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={controls}
  ref={i === 0 ? ref : null} 
>

              <div className="mb-6 flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold mb-6" style={{ color: '#63264A' }}>{title}</h3>
              <ul className="list-disc list-inside space-y-2 text-left" style={{ color: '#4B4453' }}>
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="relative pl-4 before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:rounded-full"
                    style={{ 
                      before: { backgroundColor: '#C5705D' } 
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
