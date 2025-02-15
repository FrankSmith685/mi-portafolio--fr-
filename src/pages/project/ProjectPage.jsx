import React from 'react';
import ProjectCard from './Cards/ProjectCard';
import project1 from "../../assets/imagenes/project1.JPG"
import project2 from "../../assets/imagenes/project2.JPG"
import project3 from "../../assets/imagenes/food.PNG"
import project4 from "../../assets/imagenes/dog.PNG"
import project5 from "../../assets/imagenes/videogame.PNG"
import project6 from "../../assets/imagenes/phone.PNG"
import project7 from "../../assets/imagenes/project3.JPG"


const ProjectPage = () => {
    const projects = [
        {
            id: 1,
            title: 'Mappi',
            description: `
                Trabajé como Full Stack Web Developer en Mappi de agosto de 2023 a marzo de 2024. Durante este tiempo, diseñé e implementé sistemas de autenticación y autorización, desarrollé la interfaz de usuario para un panel de administración, integré mapas interactivos, desarrollé un sistema de recomendaciones y filtros de búsqueda, y gestioné el registro, actualización y eliminación de huariques. Tecnologías utilizadas: React.js, MUI Material, React-Hooks, JavaScript, SCSS, HTML, C#, ASP.NET Core, y SQL Server.
            `,
            demoLink: 'https://mappi.pe/',
            imageUrl: project1,
        },
        
        
        {
            id: 2,
            title: 'Roggman Consulting',
            description: `
                Desarrollé una página web para Roggman Consulting, una consultoría de recursos humanos en Alemania. El sitio web incluye secciones para la selección y reclutamiento de personal, evaluaciones, búsquedas especializadas, auditorías de inclusión, y más. Implementé funcionalidades para gestionar contacto, información de la empresa, y otros servicios. Tecnologías utilizadas: React.js, Tailwind CSS, y JavaScript.
            `,
            githubLink: 'https://github.com/FrankSmith685/nuevo/tree/main/Proyecto%20-%20Sandra%20Roggero%20Beratung',
            demoLink: 'https://roggero-beratung.de/',
            imageUrl: project2,
        },
        {
            id: 3,
            title: 'GEOR - Panel de Administración y Facturación',
            description: 
                'Trabajé como Practicante Pre-Profesional Frontend en GEOR, donde implementé y creé páginas web, incluyendo un panel de administración para la gestión de blogs y un sistema de facturación para planes de usuarios y administradores. Desarrollé toda la interfaz utilizando Vue 3, Vue 2, TypeScript, y realicé la integración de APIs. También utilicé Pinia para la gestión de estado global.',
            technologies: 'Vue 3, Vue 2, TypeScript, Pinia, APIs',
            imageUrl: project7,
        },
        {
            id: 3,
            title: 'Food-App',
            description: `
                Desarrollo de una Single Page Application, que consume datos de la API #spoonacularapi. La misma tiene funcionalidades tales como buscar, filtrar/ordenar recetas y crear tu propia receta. Tecnologías implementadas: React - Redux - Node.js - Express - PostgreSQL
            `,
            githubLink: 'https://github.com/FrankSmith685/pi-food',
            demoLink: 'https://pi-food-chi.vercel.app/',
            imageUrl: project3,
        },

        {
            id: 4,
            title: 'Dogs-App',
            description: `
                Desarrollo de una Single Page Application, que consume datos de la API dogs La misma tiene funcionalidades tales como buscar, filtrar/ordenar raza y crear tu propia raza. Tecnologías implementadas: React - Redux - Node.js - Express - PostgreSQL
            `,
            githubLink: 'https://github.com/FrankSmith685/pi-dogs',
            demoLink: 'https://pi-dogs-roan.vercel.app/',
            imageUrl: project4,
        },

        {
            id: 5,
            title: 'Videogames E-commerce',
            description: `
                Desarrollo un ecommerce de videojuegos en la cual los usuarios pueden adquirir productos online por medio de una aplicacion web full-stack. Tecnologías implementadas: Bootstrap - React - Redux - Node.js - Express - PostgreSql - Sequelize - Nodemailer - Stripe.
            `,
            githubLink: 'https://github.com/FrankSmith685/PF-GamesStore',
            demoLink: 'https://pf-gamestore.vercel.app/',
            imageUrl: project5,
        },

        {
            id: 6,
            title: 'Phones E-commerce',
            description: `
                El objetivo fue diseñar y desarrollar una App E-commerce de venta de celulares "New Phone" que incluía: búsqueda, filtros combinados, ordenamientos, logueo, creación de usuario, manejo de roles, borrado logico de usuarios y productos, notificaciones vía mail, uso de localStorage para una persistencia de datos, logueo con Google, preguntas y respuestas, reseñas de los productos, pagos online con stripe.
            `,
            demoLink: 'https://new-phone.vercel.app/',
            imageUrl: project6,
        },
    ];

    return (
        <div className="container mx-auto py-20">
            <h1 className="text-3xl font-semibold text-center text-white mb-2">Mis Proyectos</h1>
            <div className="flex flex-col items-center">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
