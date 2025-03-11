import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Comp() {
  // Déclaration de ref et inView
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Suivi de la position de la souris
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredTech, setHoveredTech] = useState(null);

  // Liste des descriptions pour chaque technologie
  const descriptions = {
    react: "Bibliothèque JavaScript pour interfaces dynamiques",
    angular: "Framework TypeScript pour applications web",
    javascript: "Langage de programmation web",
    typescript: "Extension de JavaScript avec typage",
    word: "Traitement de texte Microsoft",
    php: "Langage de programmation backend",
    python: "Langage polyvalent et facile à apprendre",
    linux: "Système d'exploitation open-source",
    tailwind: "Tailwind CSS est un framework CSS open source.",
    gitbash: "Conteneurisation d'applications",
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX + 15, y: e.clientY + 15 }); // Décalage de 15px
    };

    if (hoveredTech) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hoveredTech]);

  return (
    <>
      {/* Bloc qui suit la souris */}
      {hoveredTech && (
        <motion.div
          className="fixed bg-white z-10 p-2 rounded-lg shadow-lg text-xs font-semibold text-gray-800"
          style={{
            top: mousePos.y,
            left: mousePos.x,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {descriptions[hoveredTech]}
        </motion.div>
      )}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{
          duration: 1.4,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        <div className="h-screen">
          <h1 className="text-4xl font-bold text-gray-800  mb-6 text-center mt-24">
          ⭐ COMPÉTENCES
          </h1>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8">
            {/* Première ligne */}
            <div className="lg:h-32 lg:w-[50%] w-[72%] mx-auto rounded-lg flex justify-between p-4">
              {["react", "angular", "javascript", "typescript", "word"].map(
                (tech) => (
                  <div
                    key={tech}
                    className="bg-white p-6 rounded-xl shadow-md w-20 lg:w-28 lg:h-28 flex items-center justify-center transition-transform duration-200 hover:scale-105"
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <img src={`src/assets/${tech}.png`} alt={tech} />
                  </div>
                )
              )}
            </div>

            {/* Deuxième ligne */}
            <div className="lg:h-32 lg:w-[50%] w-[72%] mx-auto rounded-lg flex justify-between p-4">
              {["php", "python", "linux", "tailwind", "gitbash"].map((tech) => (
                <div
                  key={tech}
                  className="bg-white p-6 rounded-xl shadow-md w-20 lg:w-28 lg:h-28 flex items-center justify-center transition-transform duration-200 hover:scale-105"
                  onMouseEnter={() => setHoveredTech(tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <img src={`src/assets/${tech}.png`} alt={tech} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
