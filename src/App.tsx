import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import About2 from './pages/About'
import Comp from './pages/Comp'
import Project from './pages/Project'
import MyCarousel from './pages/MyCarousel'
import Accueil from './pages/Accueil'
import { Outlet } from "react-router-dom";



function App() {

  return (
    <>
    <div>
      {/* Le Header est affiché en dehors des routes */}
      <Header />

      {/* Le contenu de la route active sera rendu ici */}
      <div>
        <Outlet />
      </div>
    </div>
    

    
 
    </>
  )
}

export default App
