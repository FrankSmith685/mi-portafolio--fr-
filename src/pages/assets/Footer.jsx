import React from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    const logo1 = "<F";
    const logo2 = "r>";

    return (
        <footer className="bg-gray-900 text-white py-6 ">
            <div className="container mx-auto">
                <div className="flex justify-between items-center px-14">
                    <div className="flex flex-nowrap">
                        <p className="pr-1">Diseñado y Desarrollado por:</p>
                        <h2 className="font-medium text-white ">{logo1}</h2>
                        <p className="font-medium text-orange-500 ">{logo2}</p>
                    </div>

                    <div className="flex flex-nowrap">
                        <p className="pr-1">&copy; 2024</p>
                        <h2 className="font-medium text-white ">{logo1}</h2>
                        <p className="font-medium text-orange-500 ">{logo2}</p>
                        <p className="pl-1">Todos los derechos reservados</p>
                    </div>

                    <div className="flex flex-nowrap items-center">
                        <a href="https://github.com/FrankSmith685" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/frank-smith-bocangelino-rojas-351157168/" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
                            <FaLinkedin />
                        </a>
                        <a href="tel:+1234567890" className="text-white flex items-center">
                            <FaPhoneAlt className="mr-2" /> +51 926749330
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
