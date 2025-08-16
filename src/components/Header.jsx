import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center 
                 shadow-lg border-b transition-colors duration-300 ease-in-out"
      style={{
        backgroundColor: 'rgba(250, 249, 246, 0.9)',
        backdropFilter: 'blur(10px)',
        color: '#63264A',
        borderColor: '#92828D',
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="flex flex-col leading-tight font-[Poppins] transition-transform duration-300 hover:scale-105"
      >
        <span
          className="text-2xl md:text-3xl font-bold drop-shadow-sm"
          style={{ color: '#63264A' }}
        >
          Malak Yasser
        </span>
        <span
          className="text-sm tracking-wide opacity-80"
          style={{ color: '#92828D' }}
        >
          Frontend Developer
        </span>
      </Link>

    
      <button
        className="text-3xl md:text-4xl cursor-pointer lg:hidden focus:outline-none transition-transform duration-300 hover:rotate-90"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        style={{ color: '#63264A' }}
      >
        <i
          className={`bx ${isOpen ? 'bx-x' : 'bx-menu'} transition-transform duration-300 hover:scale-110`}
        ></i>
      </button>

      {/* Navigation */}
      <nav
        className={`${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 lg:opacity-100'}
          lg:translate-x-0 fixed lg:static inset-0
          w-full h-screen lg:w-auto lg:h-auto 
          bg-[#FAF9F6]/95 lg:bg-transparent 
          transition-all duration-300 ease-in-out
          z-40 flex items-center justify-center lg:block`}
      >
        {/* Close button for mobile */}
        {isOpen && (
          <button
            className="absolute top-6 right-6 text-3xl text-[#63264A] lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <i className="bx bx-x"></i>
          </button>
        )}

        <ul className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-10 font-[Open_Sans]">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="text-xl lg:text-lg font-medium tracking-wide transition-all duration-300 flex flex-col items-center lg:items-start"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[#63264A] group-hover:text-[#92828D] transition-colors duration-300">
                  {item}
                </span>
                <span 
                  className="w-0 h-0.5 bg-[#63264A] group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: '#63264A' }}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;