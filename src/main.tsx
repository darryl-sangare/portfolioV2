

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from './pages/Accueil'; // Import de la page Accueil
import About2 from './pages/About';
import Comp from './pages/Comp';
import Project from './pages/Project';
import MyCarousel from './pages/MyCarousel';
import App from './App'
import Tree from './components/Tree'
import Pulsora from './components/Pulsora'

// Composant d'erreur personnalisé en cas de route non trouvée
const ErrorPage = () => (
  <div style={{ textAlign: "center", padding: "20px" }}>
    <h1>Erreur 404</h1>
    <p>La page que vous recherchez est introuvable.</p>
  </div>
);

// Définition des routes avec un chemin principal pour Accueil
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Utilisation du composant App pour englober les routes
    children: [
      {
        path: "/",
        element: <Accueil />, // Afficher la page Accueil sur le chemin "/"
      },
      {
        path: "/comp",
        element: <Comp />, // Afficher la page Comp sur "/comp"
      },
      {
        path: '/tree', // Route vers Tree.tsx
        element: <Tree />,  // Composant à afficher pour la route "/tree"
      },
      {
        path: '/pulsora', // Route vers Tree.tsx
        element: <Pulsora />,  // Composant à afficher pour la route "/tree"
      },

    ],
    errorElement: <ErrorPage />, // Afficher une page d'erreur en cas de route non trouvée
  },
]);

// Rendu de l'application avec RouterProvider
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
