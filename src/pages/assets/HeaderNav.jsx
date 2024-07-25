import { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { FaUser } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BiSolidUserPin } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';

const HeaderNav = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const logo1 = "<F";
    const logo2 = "r>";

    const menu = [
        { path: "/", label: "Home", icon: <FaHome /> },
        { path: "/about", label: "Conóceme", icon: <FaUser /> },
        { path: "/project", label: "Proyectos", icon: <AiOutlineFundProjectionScreen /> },
        { path: "/contact", label: "Contáctame", icon: <BiSolidUserPin /> },
        { path: "/resume", label: "Curriculum", icon: <IoDocumentTextSharp /> },
    ];

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsSticky(offset > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLinkClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className={`p-4 w-full fixed z-50 ${isSticky ? 'bg-gray-900' : 'bg-transparent'}`}>
            <ul className="flex space-x-16 items-center justify-center">
                <li className="flex flex-nowrap text-3xl">
                    <h2 className="font-medium text-white">{logo1}</h2>
                    <p className="font-medium text-orange-500">{logo2}</p>
                </li>
                {menu.map((item, index) => (
                    <li key={index} className="text-center">
                        <Link 
                            to={item.path} 
                            onClick={handleLinkClick}
                            className={`text-white hover:text-gray-300 flex flex-col items-center relative ${currentPath === item.path ? 'after:bg-white after:block after:absolute after:content-[""] after:h-1 after:w-full after:left-0 after:bottom-0 after:rounded-t-md' : ''}`}
                        >
                            {item.icon && <span className="text-center">{item.icon}</span>}
                            <p className={`relative z-10 transition duration-300 ease-in-out transform ${currentPath === item.path ? 'translate-y-[-3px]' : 'hover:translate-y-[-3px]'} ${currentPath === item.path ? '' : 'hover:after:bg-white hover:after:block hover:after:absolute hover:after:content-[""] hover:after:h-1 hover:after:w-full hover:after:left-0 hover:after:bottom-0 hover:after:rounded-t-md'}`}>
                                {item.label}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HeaderNav;