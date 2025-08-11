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
        backgroundColor: 'rgba(250, 249, 246, 0.9)', // light off-white with transparency
        backdropFilter: 'blur(10px)',
        color: '#63264A', // deep muted purple text
        borderColor: '#92828D', // soft muted gray-purple border
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="flex flex-col leading-tight font-[Poppins] transition-transform duration-300 hover:scale-105"
      >
        <span
          className="text-2xl md:text-3xl font-bold drop-shadow-sm"
          style={{ color: '#63264A' }} // primary deep muted purple
        >
          Malak Yasser
        </span>
        <span
          className="text-sm tracking-wide opacity-80"
          style={{ color: '#92828D' }} // secondary soft muted gray-purple
        >
          Frontend Developer
        </span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="text-3xl md:text-4xl cursor-pointer lg:hidden focus:outline-none transition-transform duration-300 hover:rotate-90"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        style={{ color: '#63264A' }} // primary color for icon
      >
        <i
          className={`bx ${isOpen ? 'bx-x' : 'bx-menu'} transition-transform duration-300 hover:scale-110`}
        ></i>
      </button>

      {/* Navigation */}
      <nav
        className={`${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:flex lg:gap-10 lg:items-center fixed lg:static top-0 left-0 
          w-3/4 h-full lg:w-auto lg:h-auto 
          bg-[#FAF9F6] lg:bg-transparent 
          shadow-lg lg:shadow-none
          transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 mt-20 lg:mt-0 font-[Open_Sans]">
          {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="text-lg font-medium tracking-wide transition-all duration-300 ease-in-out hover:scale-105 underline-offset-4"
                style={{ color: '#63264A' }} // primary color text
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#92828D'; // secondary color on hover
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#63264A';
                  e.currentTarget.style.textDecoration = 'none';
                }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
