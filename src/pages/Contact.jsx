/* eslint-disable react/no-unescaped-entities */
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen bg-[#F8EDE3] py-16 mt-16" id="contact">
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-extrabold text-[#C5705D] mb-8"
          data-aos="fade-down"
        >
          Contact Me
        </h2>
        <p
          className="text-lg text-[#C5705D] mb-8"
          data-aos="fade-up"
        >
          I'd love to hear from you! Feel free to reach out for any inquiries or collaborations.
        </p>
        <form
          className="max-w-lg mx-auto bg-[#DFD3C3] shadow-lg rounded-lg p-8 border border-[#D0B8A8] transform transition duration-500 hover:scale-105"
          data-aos="fade-up"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-left font-semibold text-[#C5705D] mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-[#D0B8A8] rounded focus:outline-none focus:ring-2 focus:ring-[#C5705D]"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-left font-semibold text-[#C5705D] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-[#D0B8A8] rounded focus:outline-none focus:ring-2 focus:ring-[#C5705D]"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-left font-semibold text-[#C5705D] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border border-[#D0B8A8] rounded focus:outline-none focus:ring-2 focus:ring-[#C5705D]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#C5705D] text-white font-semibold py-3 rounded hover:bg-[#D0B8A8] transition-colors duration-300"
            data-aos="zoom-in"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
