import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="w-full h-2/3 md:h-full flex flex-col justify-center items-center">
          <div className='bg-white p-5 shadow-xl pt-8 pb-10 border-b-8 border-gray-200'>
            <div className='text-center text-4xl font-bold text-gray-800 mb-4'>ℹ️ A propos </div>
            <div className='flex justify-center items-center'>
              <div className='w-[50%] mr text-center'>
                Actuellement en BUT Métiers du Multimédia et de l'Internet, parcours Développement et Dispositifs Interactifs, je suis passionné par
                le développement web et la cybersécurité. Je suis à la recherche d'une alternance pour la rentrée
                de septembre 2025 afin de continuer à développer mes compétences.
              </div>
            </div>
            
            {/* Langues maîtrisées */}
            <div className='text-center mt-5'>
              <span className='text-lg font-semibold'>Langues :</span>
              <div className='flex justify-center mt-2 space-x-4'>
                <img className='w-8 h-5' src='https://flagcdn.com/w40/fr.png' alt='France' />
                <img className='w-8 h-5' src='https://flagcdn.com/w40/gb.png' alt='Angleterre' />
                <img className='w-8 h-5' src='https://flagcdn.com/w40/es.png' alt='Espagne' />
              </div>
            </div>
            
            {/* Centres d'intérêt */}
            <div className='text-center mt-5'>
              <span className='text-lg font-semibold'>Centres d'intérêt :</span>
              <div className='flex justify-center mt-2 space-x-4'>
                <span className='px-3 py-1 bg-gray-200 rounded-full text-sm'>🏀 Basket</span>
                <span className='px-3 py-1 bg-gray-200 rounded-full text-sm'>👕 Mode</span>
                <span className='px-3 py-1 bg-gray-200 rounded-full text-sm'>💻 Nouvelles technologies</span>
              </div>
            </div>
            
            <div className="text-center">
              <button className="text-white bg-black py-2 px-4 rounded-3xl duration-300 hover:scale-105 mt-7">Télécharger mon CV</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;