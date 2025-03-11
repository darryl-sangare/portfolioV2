import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assurez-vous que React Router est installé pour utiliser Link

export default function Pulsora() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-pink-100 via-white to-blue-50 p-8 flex flex-col items-center space-y-12">
      {/* Titre principal */}
      <h1 className="text-5xl font-extrabold text-center text-blue-800 transform transition-transform duration-500 hover:scale-105">
        PULSORA
      </h1>

      {/* Image principale avec un effet de survol */}
      <img
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mb-12 rounded-xl shadow-2xl transition-transform duration-300 transform hover:scale-105"
        src="src/assets/pulsora.png"
        alt="TreeSushi"
      />

      {/* Bloc des outils utilisés */}
      <div className="w-full max-w-6xl bg-white p-8 rounded-2xl shadow-lg mb-12 transition-all duration-500 hover:shadow-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Outils Utilisés</h2>
        <div className="flex justify-center space-x-6">
          <img
            className="w-16 h-16 object-contain transform transition-transform duration-300 hover:scale-110"
            src="src/assets/react.png"
            alt="Angular"
          />
          <img
            className="w-16 h-16 object-contain transform transition-transform duration-300 hover:scale-110"
            src="src/assets/symfo.png"
            alt="PHP"
          />
          <img
            className="w-16 h-16 object-contain transform transition-transform duration-300 hover:scale-110"
            src="src/assets/tailwind.png"
            alt="Tailwind"
          />
          <img
            className="w-16 h-16 object-contain transform transition-transform duration-300 hover:scale-110"
            src="src/assets/gitbash.png"
            alt="Git"
          />
                    <img
            className="w-16 h-16 object-contain transform transition-transform duration-300 hover:scale-110"
            src="src/assets/docker.png"
            alt="Git"
          />
        </div>
      </div>

      {/* Bloc de description */}
      <div className="w-full max-w-6xl bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Description</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Pulsora est un projet d’application web gratuite dédiée à la gestion des équipes sportives. Conçue pour les entraîneurs, les joueurs et les responsables de clubs, cet outil facilite l'organisation et la communication au sein des équipes. Elle permet aux fans de vos projets sportifs de suivre votre actualité, l’actualité des joueurs (blessures, sanctions...) qu’elle soit sportive ou extra-sportive au travers d’articles publiées par vos soins.
        </p>

        {/* Image secondaire avec un effet d'ombre et de zoom */}
        <img
          className="w-full sm:w-3/4 md:w-1/2 mx-auto mb-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          src="src/assets/AUTHENTIFICATION.png"
          alt="Illustration Treesushi"
        />

    


      </div>

      {/* Bouton retour avec flèche encerclée */}
      <Link
        to="/"
        className={`fixed bottom-8 left-8 bg-white text-gray-800 p-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center
          ${isScrolled ? 'border-gray-300 shadow-none opacity-50 hover:opacity-100 hover:bg-white hover:shadow-md' : 'border-white shadow-lg opacity-100 hover:bg-gray-100 hover:shadow-md'}
          ${isHovered ? 'scale-110' : 'scale-100'}`}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Flèche SVG pointant vers la gauche */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Link>
    </div>
  );
}
