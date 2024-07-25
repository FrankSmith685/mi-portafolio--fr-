import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-8 w-11/12 h-96 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-1/2 h-full overflow-hidden relative">
                    <img className="w-full h-full object-cover transition-transform transform hover:scale-110" src={project.imageUrl} alt={project.title} />
                </div>
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center bg-gray-800 text-white">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h2>
                    <p className="text-gray-300 mb-6 lg:text-lg">{project.description}</p>
                    <div className="flex justify-center lg:justify-start">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 border-2 border-gray-600 text-white px-8 py-4 rounded-md transition-colors hover:bg-gray-700 text-lg mr-4 flex items-center"
                            >
                                <FaGithub className="inline-block mr-2" />
                                Ver en GitHub
                            </a>
                        )}
                        {project.demoLink && (
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-8 py-4 rounded-md transition-colors hover:bg-blue-700 text-lg flex items-center"
                            >
                                Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
