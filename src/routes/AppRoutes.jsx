import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';
import HeaderNav from "../pages/assets/HeaderNav";
import Footer from "../pages/assets/Footer";
import AboutPage from "../pages/about/AboutPage";
import ProjectPage from "../pages/project/ProjectPage";
import ContactPage from "../pages/contact/ContactPage";
import CurriculumPage from "../pages/curriculum/CurriculumPage";

// Importa los componentes de las páginas
const HomePage = lazy(() => import("../pages/home/HomePage"));
// Añade aquí otros componentes de las páginas que quieras importar

export const AppRoutes = () => {
  return (
    <>
      <Router>
      <div>
        {/* Agrega el menú */}
        <HeaderNav />
        <Suspense fallback={(
          <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700">
            <FaSpinner className="animate-spin text-9xl text-gray-500" />
          </div>
        )}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<CurriculumPage />} />
            {/* Agrega aquí más rutas para otras páginas */}
          </Routes>
        </Suspense>
        <Footer />

      </div>
    </Router>
    </>
  );
};
