const Footer = () => {
  return (
    <footer className="bg-[#63264A] text-[#F8EDE3] py-8 mt-10 shadow-lg">
      <div className="container mx-auto px-6">
        {/* Top section with social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-wide">Malak Yasser</h2>
            <p className="text-sm opacity-80">Front-End Developer & UI/UX Designer</p>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/malakyasser311/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F8EDE3] text-[#63264A] p-2 rounded-full hover:bg-[#BFA3B9] hover:text-[#4E1C37] transition duration-300"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a
              href="https://github.com/malak-y"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F8EDE3] text-[#63264A] p-2 rounded-full hover:bg-[#BFA3B9] hover:text-[#4E1C37] transition duration-300"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a
              href="https://www.behance.net/malakyasser25"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F8EDE3] text-[#63264A] p-2 rounded-full hover:bg-[#BFA3B9] hover:text-[#4E1C37] transition duration-300"
            >
              <i className="ri-behance-fill text-xl"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F8EDE3] opacity-30 my-6"></div>

        {/* Bottom copyright */}
        <div className="text-center text-sm opacity-80">
          <p>&copy; 2024 Malak Yasser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
