import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';  // Import Boxicons CSS

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#C5705D] py-4 px-6 md:px-12 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl md:text-4xl font-extrabold text-[#F8EDE3] uppercase tracking-widest transition-transform duration-500 hover:scale-110"
      >
        <span className="text-[#982B1C] text-4xl md:text-5xl">M</span>alak
      </Link>
      
      {/* Mobile Menu Button */}
      <button
        className="text-3xl md:text-4xl cursor-pointer lg:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
      >
        <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'} text-[#F8EDE3] transition-transform duration-500 hover:scale-110`}></i>
      </button>
      
      {/* Navigation Menu */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex lg:gap-10 lg:items-center fixed lg:static top-0 left-0 w-full h-full lg:w-auto lg:h-auto bg-[#C5705D] lg:bg-transparent transition-all duration-500 ease-in-out`}
      >
        <ul className="flex flex-col lg:flex-row items-center gap-10 mt-20 lg:mt-0">
          <li>
            <Link
              to="/"
              className="text-lg text-[#F8EDE3] font-semibold transition-transform duration-300 ease-in-out transform hover:text-[#D0B8A8] hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg text-[#F8EDE3] font-semibold transition-transform duration-300 ease-in-out transform hover:text-[#D0B8A8] hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-lg text-[#F8EDE3] font-semibold transition-transform duration-300 ease-in-out transform hover:text-[#D0B8A8] hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="text-lg text-[#F8EDE3] font-semibold transition-transform duration-300 ease-in-out transform hover:text-[#D0B8A8] hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg text-[#F8EDE3] font-semibold transition-transform duration-300 ease-in-out transform hover:text-[#D0B8A8] hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
