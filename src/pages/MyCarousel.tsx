const MyCarousel = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">🚀 Veille Technologique</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 w-2/5">
        <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-white p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-center text-xl font-semibold text-blue-600">Web.dev</h3>
          <p className="text-gray-600 text-center mt-4">Plateforme communautaire pour les développeurs web.</p>
          <div className="flex justify-center mt-6">
            <a
              className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              href="https://dev.to/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Découvrir
            </a>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-white p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-center text-xl font-semibold text-blue-600">GitHub Trending</h3>
          <p className="text-gray-600 text-center mt-4">Projets open-source populaires.</p>
          <div className="flex justify-center mt-6">
            <a
              className="px-4 py-2 mt-5 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              href="https://github.com/trending"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Découvrir
            </a>
          </div>
        </div>

 

      </div>
    </div>
  );
};

export default MyCarousel;
