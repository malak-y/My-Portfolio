const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen bg-[#F8EDE3] py-16 mt-16">
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl font-extrabold text-[#D05D50]">
          My <span className="text-[#D0B8A8]">Portfolio</span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* SHOPEASE Website */}
        <div className="bg-[#D0B8A8] p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="relative">
            <img src="assets/Screenshot (488).png" alt="SHOPEASE Website" className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-between p-4  rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <a href="https://malak-y.github.io/E-Commerce/" target="_blank" rel="noopener noreferrer" className="bg-[#333] p-2 rounded-full transform transition-transform duration-300 hover:scale-110">
                    <i className="ri-github-fill text-[#F8EDE3] text-xl hover:text-[#D0B8A8] transition-colors duration-300" title="View on GitHub"></i>
                  </a>
                </div>
              </div>
    
            </div>
          </div>
          <h4 className="text-xl font-bold text-[#C5705D] mt-4">
          <a href="https://malak-y.github.io/E-Commerce/" className ="hover:text-[#982B1C] transition-colors duration-300" target="_blank" rel="noopener noreferrer">SHOPEASE Website</a>
        </h4>
          <p className="mt-2 text-[#8D493A]">A responsive website for selling branded items, featuring product listings with images, names, and prices. The site includes a user-friendly cart and checkout page.</p>
          <p className="mt-2 text-[#982B1C]"><strong>Tools used:</strong> HTML, CSS, Bootstrap, JavaScript, and GitHub</p>
        </div>
        {/* Elite Stay Website */}
        <div className="bg-[#D0B8A8] p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="relative">
            <img src="assets/Screenshot (541).png" alt="Elite Stay Website" className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-between p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <a href="https://malak-y.github.io/Travel_new/" target="_blank" rel="noopener noreferrer" className="bg-[#333] p-2 rounded-full transform transition-transform duration-300 hover:scale-110">
                    <i className="ri-github-fill text-[#F8EDE3] text-xl hover:text-[#D0B8A8] transition-colors duration-300" title="View on GitHub"></i>
                  </a>
                </div>
              </div>
             
            </div>
          </div>
          <h4 className="text-xl font-bold text-[#C5705D] mt-4">
          <a href="https://malak-y.github.io/Travel_new/" className ="hover:text-[#982B1C] transition-colors duration-300" target="_blank" rel="noopener noreferrer">Elite Stay Website</a>
        </h4>
          <p className="mt-2 text-[#8D493A]">A React application that lets users find and book accommodations. It features a homepage with key benefits, a hotels page to filter and view listings, and a booking page for completing reservations.</p>
          <p className="mt-2 text-[#982B1C]"><strong>Tools used:</strong> React.js, Tailwind CSS, React Router, Figma, and GitHub</p>
        </div>
        {/* MealMap Website */}
        <div className="bg-[#D0B8A8] p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="relative">
            <img src="assets/Screenshot (489).png" alt="MealMap Website" className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-between p-4  rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <a href="https://malak-y.github.io/MealMap/" target="_blank" rel="noopener noreferrer" className="bg-[#333] p-2 rounded-full transform transition-transform duration-300 hover:scale-110">
                    <i className="ri-github-fill text-[#F8EDE3] text-xl hover:text-[#D0B8A8] transition-colors duration-300" title="View on GitHub"></i>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          <h4 className="text-xl font-bold text-[#C5705D] mt-4">
                <a href="https://malak-y.github.io/MealMap/" className ="hover:text-[#982B1C] transition-colors duration-300" target="_blank" rel="noopener noreferrer">MealMap Website</a>
              </h4>
          <p className="mt-2 text-[#8D493A]">A React application that allows users to search for recipes using the Edamam API.</p>
          <p className="mt-2 text-[#982B1C]"><strong>Tools used:</strong> React, Axios, GitHub</p>
        </div>
        {/* Movie System Reservation */}
        <div className="bg-[#D0B8A8] p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="relative">
            <img src="assets/Screenshot (490).png" alt="Movie System Reservation" className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-between p-4  rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <a href="https://www.behance.net/gallery/204799155/Movie-Reservation-system" target="_blank" rel="noopener noreferrer" className="bg-[#1769ff] p-2 rounded-full transform transition-transform duration-300 hover:scale-110">
                    <i className="ri-behance-fill text-[#F8EDE3] text-xl hover:text-[#D0B8A8] transition-colors duration-300" title="View on Behance"></i>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          <h4 className="text-xl font-bold text-[#C5705D] mt-4">
                <a href="https://www.behance.net/gallery/204799155/Movie-Reservation-system" className ="hover:text-[#982B1C] transition-colors duration-300" target="_blank" rel="noopener noreferrer">Movie System Reservation</a>
              </h4>
          <p className="mt-2 text-[#8D493A]">A project showcasing the design for a movie reservation system.</p>
          <p className="mt-2 text-[#982B1C]"><strong>Tools used:</strong> Figma, Adobe Photoshop, Behance, Adobe Color</p>
        </div>
        {/* Food Order System */}
        <div className="bg-[#D0B8A8] p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="relative">
            <img src="assets/Screenshot (491).png" alt="Food Order System" className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-108" />
            <div className="absolute inset-0 flex flex-col justify-between p-4  rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                <a href="https://www.behance.net/gallery/203806851/Food-Order-System" target="_blank" rel="noopener noreferrer" className="bg-[#1769ff] p-2 rounded-full transform transition-transform duration-300 hover:scale-110">
                    <i className="ri-behance-fill text-[#F8EDE3] text-xl hover:text-[#D0B8A8] transition-colors duration-300" title="View on Behance"></i>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          <h4 className="text-xl font-bold text-[#C5705D] mt-4">
                <a href="https://www.behance.net/gallery/203806851/Food-Order-System" className ="hover:text-[#982B1C] transition-colors duration-300"target="_blank" rel="noopener noreferrer">Food Order System</a>
              </h4>
          <p className="mt-2 text-[#8D493A]">A design project for a food ordering system with an intuitive user interface and interactive elements.</p>
          <p className="mt-2 text-[#982B1C]"><strong>Tools used:</strong> Figma, Adobe Photoshop, Behance</p>
        </div>
        <div className="bg-[#D0B8A8] p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
  <div className="relative">
    <img
      src="assets/sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
      alt="ROOMIFY"
      className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
    />
    <div className="absolute inset-0 flex flex-col justify-between p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <a
          href="https://www.behance.net/gallery/205289277/ROOMIFY"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1769ff] p-2 rounded-full hover:bg-[#0f5bb5] transform transition-transform duration-300 hover:scale-110"
        >
          <i
            className="ri-behance-fill text-[#F8EDE3] text-xl hover:text-[#D0B8A8] transition-colors duration-300"
            title="View on Behance"
          ></i>
        </a>
      </div>
      
    </div>
  </div>
  <h4 className="text-xl font-bold text-[#C5705D] mt-4">
        <a
          href="https://www.behance.net/gallery/205289277/ROOMIFY"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#982B1C] transition-colors duration-300"
        >
          ROOMIFY
        </a>
      </h4>
  <p className="mt-2 text-[#8D493A]">A project showcasing the design for ROOMIFY.</p>
  <p className="mt-2 text-[#982B1C]">
    <strong>Tools used:</strong> Figma, Adobe Photoshop, Behance, Adobe Color
  </p>
</div>

      </div>
    </section>
  );
};

export default Portfolio;
