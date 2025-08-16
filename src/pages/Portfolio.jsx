const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen py-20">
      <div className="container mx-auto px-4  pt-10">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-5xl font-bold text-[#63264A] mb-4">
            My <span className="text-[#BFA3B9]">Creative</span> Works
          </h2>
          <div className="w-24 h-1 bg-[#BFA3B9] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(99,38,74,0.3)]">
            <div className="h-64 overflow-hidden">
              <img
                src="assets/hand.png"
                alt="Craftopia Marketplace"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7C3A61] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    A versatile marketplace platform for handmade products with customization options and auction features.
                  </p>
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    <a
                      href="https://github.com/alibedair/Graduation-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#63264A] p-3 rounded-full hover:bg-[#BFA3B9] transition-colors duration-300"
                    >
                      <i className="ri-github-fill text-xl"></i>
                    </a>
                    <a
                      href="https://www.behance.net/gallery/218796221/Craftopia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#63264A] p-3 rounded-full hover:bg-[#BFA3B9] transition-colors duration-300"
                    >
                      <i className="ri-behance-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-2xl font-bold text-[#63264A] mb-2">Craftopia Marketplace</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Figma</span>
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">UI/UX</span>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(99,38,74,0.3)]">
            <div className="h-64 overflow-hidden">
              <img
                src="assets/chef-hat.png"
                alt="Online Home-made Dishes"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7C3A61] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    Full-stack web application for managing dish orders between customers, sellers, and admins.
                  </p>
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    <a
                      href="https://github.com/mennatallah222/Dishes-DS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#63264A] p-3 rounded-full hover:bg-[#BFA3B9] transition-colors duration-300"
                    >
                      <i className="ri-github-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-2xl font-bold text-[#63264A] mb-2">Home-made Dishes</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">RabbitMQ</span>
              </div>
            </div>
          </div>
<div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(99,38,74,0.3)]">
  <div className="h-64 overflow-hidden">
    <img
      src="assets/flight-booking.png"       
      alt="Flight Booking Website"
      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#7C3A61] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex items-end p-6">
      <div>
        <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
          Full flight marketplace: companies add flights, passengers register and book, messaging,
          payments (account/cash), dashboards, and search.
        </p>
        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
          <a
            href="https://github.com/alibedair/Web-project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#63264A] p-3 rounded-full hover:bg-[#BFA3B9] transition-colors duration-300"
            title="View on GitHub"
          >
            <i className="ri-github-fill text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white p-6">
    <h3 className="text-2xl font-bold text-[#63264A] mb-2">Flight Booking Website</h3>
    <div className="flex flex-wrap gap-2 mt-4">
      <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">HTML/CSS</span>
      <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">JavaScript</span>
      <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">jQuery</span>
      <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">PHP</span>
      <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">MySQL</span>
    </div>
  </div>
</div>

          <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(99,38,74,0.3)]">
            <div className="h-64 overflow-hidden">
              <img
                src="assets/hotel.png"
                alt="Elite Stay Website"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7C3A61] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    A React application that lets users find and book accommodations with filtering and booking features.
                  </p>
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    <a
                      href="https://malak-y.github.io/Travel_new/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#63264A] p-3 rounded-full hover:bg-[#BFA3B9] transition-colors duration-300"
                    >
                      <i className="ri-github-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-2xl font-bold text-[#63264A] mb-2">Elite Stay</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Tailwind</span>
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Figma</span>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(99,38,74,0.3)]">
            <div className="h-64 overflow-hidden">
              <img
                src="assets/wallet.png"
                alt="Wallet App"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7C3A61] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    Designed a modern digital wallet application with an intuitive interface for tracking expenses.
                  </p>
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    <a
                      href="https://www.behance.net/gallery/219862355/Wallet-App"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#63264A] p-3 rounded-full hover:bg-[#BFA3B9] transition-colors duration-300"
                    >
                      <i className="ri-behance-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-2xl font-bold text-[#63264A] mb-2">Wallet App</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Figma</span>
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">UI/UX</span>
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Prototyping</span>
              </div>
            </div>
          </div>
         <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(99,38,74,0.3)]">
  <div className="h-64 overflow-hidden">
    <img
      src="assets/order-food.png"
      alt="Food Order System"
      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#7C3A61] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex items-end p-6">
      <div>
        <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
          A design project for a food ordering system with an intuitive user interface and interactive elements.
        </p>
        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
          <a
            href="https://www.behance.net/gallery/203806851/Food-Order-System"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#63264A] p-3 rounded-full hover:bg-[#BFA3B9] transition-colors duration-300"
          >
            <i className="ri-behance-fill text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div className="bg-white p-6">
    <h3 className="text-2xl font-bold text-[#63264A] mb-2">Food Order System</h3>
    <div className="flex flex-wrap gap-2 mt-4">
      <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Figma</span>
      <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Adobe Photoshop</span>
      <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Behance</span>
    </div>
  </div>
</div>
<div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(99,38,74,0.3)]">
  <div className="h-64 overflow-hidden">
    <img
      src="assets/Screenshot (490).png"
      alt="Movie System Reservation"
      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#7C3A61] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex items-end p-6">
      <div>
        <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
          A project showcasing the design for a movie reservation system.
        </p>
        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
          <a
            href="https://www.behance.net/gallery/204799155/Movie-Reservation-system"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#63264A] p-3 rounded-full hover:bg-[#BFA3B9] transition-colors duration-300"
          >
            <i className="ri-behance-fill text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white p-6">
    <h3 className="text-2xl font-bold text-[#63264A] mb-2">Movie System Reservation</h3>
    <div className="flex flex-wrap gap-2 mt-4">
      <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Figma</span>
      <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Adobe Photoshop</span>
      <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Behance</span>
      <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Adobe Color</span>
    </div>
  </div>
</div>


          <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(99,38,74,0.3)]">
            <div className="h-64 overflow-hidden">
              <img
                src="assets/food.png"
                alt="MealMap Website"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7C3A61] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    A React application that allows users to search for recipes using the Edamam API.
                  </p>
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    <a
                      href="https://malak-y.github.io/MealMap/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#63264A] p-3 rounded-full hover:bg-[#BFA3B9] transition-colors duration-300"
                    >
                      <i className="ri-github-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-2xl font-bold text-[#63264A] mb-2">MealMap</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">API</span>
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Axios</span>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(99,38,74,0.3)]">
            <div className="h-64 overflow-hidden">
              <img
                src="assets/sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
                alt="ROOMIFY"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7C3A61] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    A project showcasing the design for ROOMIFY with modern UI/UX principles.
                  </p>
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    <a
                      href="https://www.behance.net/gallery/205289277/ROOMIFY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#63264A] p-3 rounded-full hover:bg-[#BFA3B9] transition-colors duration-300"
                    >
                      <i className="ri-behance-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-2xl font-bold text-[#63264A] mb-2">ROOMIFY</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Figma</span>
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">Photoshop</span>
                <span className="px-3 py-1 bg-[#F8EDE3] text-[#63264A] rounded-full text-sm">UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;