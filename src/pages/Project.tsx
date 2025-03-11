import { Link } from "react-router-dom"; // Assurez-vous que React Router est installé pour utiliser Link

const projects = [
  {
    id: 1,
    name: "Treesushi",
    description: "Une application de réservation de plats asiatiques.",
    image: "src/assets/tree.png",
    link: "/tree" // Lien spécifique pour Treesushi
  },
  {
    id: 2,
    name: "PULSORA",
    description: "Un site permettant de suivre les statistiques de joueurs de football.",
    image: "src/assets/pulsora.png",
    link: "/pulsora" // Lien spécifique pour Pulsora
  },
  {
    id: 3,
    name: "AC2FL",
    description: "Un site de réservation de vol.",
    image: "src/assets/ac2fl.jpg",
    link: "/" // Lien générique
  },
  {
    id: 4,
    name: "Pub casque de réalité virtuelle",
    description: "Un outil d'analyse de données avancé.",
    image: "src/assets/casque.png",
    link: "/" // Lien générique
  }
];

export default function ProjectGrid() {
  return (
    <div className="bg-white p-5 shadow-xl border-b-8 border-gray-200">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">📌 Projets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.link} // Lien dynamique
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-6">
              <h3 className="text-3xl font-bold tracking-wide uppercase">{project.name}</h3>
              <p className="text-lg mt-4 font-light italic max-w-xs">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
