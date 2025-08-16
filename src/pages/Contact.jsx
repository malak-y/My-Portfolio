import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative flex items-center justify-center min-h-screen pt-32 pb-16 md:pt-16"
      id="contact"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#63264A] mb-4 relative inline-block"
            data-aos="fade-down"
          >
            Get In Touch
            <span 
              className="absolute bottom-0 left-0 w-full h-1 bg-[#BFA3B9] opacity-40"
              data-aos="zoom-in"
              data-aos-delay="300"
            ></span>
          </h2>
          <p 
            className="text-lg text-[#63264A] max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's create something amazing together. Reach out for collaborations or just to say hello!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          <form
            className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border border-[#BFA3B9]/30 transform transition-all duration-500 hover:shadow-2xl"
            data-aos="fade-right"
          >
            <div className="mb-8 relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 border-b-2 border-[#D0B8A8] focus:border-[#63264A] focus:outline-none peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-4 text-[#63264A] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#92828D] peer-focus:text-[#63264A] peer-focus:transform peer-focus:-translate-y-5 peer-focus:text-sm pointer-events-none"
              >
                Your Name
              </label>
            </div>
            
            <div className="mb-8 relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 border-b-2 border-[#D0B8A8] focus:border-[#63264A] focus:outline-none peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-4 text-[#63264A] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#92828D] peer-focus:text-[#63264A] peer-focus:transform peer-focus:-translate-y-5 peer-focus:text-sm pointer-events-none"
              >
                Email Address
              </label>
            </div>
            
            <div className="mb-8 relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-4 border-b-2 border-[#D0B8A8] focus:border-[#63264A] focus:outline-none peer resize-none"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-4 text-[#63264A] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#92828D] peer-focus:text-[#63264A] peer-focus:transform peer-focus:-translate-y-5 peer-focus:text-sm pointer-events-none"
              >
                Your Message
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#63264A] text-white font-semibold py-4 rounded-lg hover:bg-[#BFA3B9] hover:text-[#63264A] transition-all duration-300 flex items-center justify-center gap-2 group"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Send Message
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
          <div 
            className="w-full max-w-md bg-[#F9FAFB] p-8 rounded-2xl shadow-xl border border-[#BFA3B9]/30"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-[#63264A] mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-[#63264A]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#63264A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#63264A]">Email</h4>
                  <a 
                    href="mailto:malakyasser541@gmail.com" 
                    className="text-[#4B4453] hover:text-[#63264A] transition-colors"
                  >
                    malakyasser541@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-[#63264A]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#63264A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#63264A]">Phone</h4>
                  <p className="text-[#4B4453]">01284876844</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-[#63264A]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#63264A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#63264A]">Location</h4>
                  <p className="text-[#4B4453]">Dokki, Egypt</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#BFA3B9]/30">
              <h4 className="font-semibold text-[#63264A] mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {[
                  { href: 'https://www.linkedin.com/in/malakyasser311/', icon: 'ri-linkedin-fill' },
                  { href: 'mailto:malakyasser541@gmail.com', icon: 'ri-mail-fill' },
                  { href: 'https://www.behance.net/malakyasser25', icon: 'ri-behance-fill' },
                  { href: 'https://github.com/malak-y', icon: 'ri-github-fill' }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#63264A] text-white hover:bg-[#BFA3B9] hover:text-[#63264A] transition-colors"
                  >
                    <i className={`${link.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;