import React, { useState, useEffect, useMemo } from "react";
import { FaHandSparkles } from "react-icons/fa";
import banner from "../../assets/imagenes/banner.png"
 
const HomePage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(false); // Estado para controlar el parpadeo del cursor

  const texts = useMemo(() => [
    "Desarrollador FullStack",
    "JavaScript | React | Node"
  ], []);
  
  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let speed = 100; // Velocidad de escritura/borrado
  
    const type = () => {
      const currentText = texts[textIndex];
      const newText = isDeleting
        ? currentText.substring(0, charIndex - 1)
        : currentText.substring(0, charIndex + 1);
  
      setDisplayedText(newText);
  
      if (!isDeleting && charIndex === currentText.length) {
        // Cuando termina de escribir el texto, muestra el cursor "|" y espera un momento antes de iniciar el borrado
        setShowCursor(true);
        setTimeout(() => {
          isDeleting = true;
        }, 1500);
      } else if (isDeleting && charIndex === 0) {
        // Cuando termina de borrar el texto, oculta el cursor "|" y pasa al siguiente texto
        setShowCursor(false);
        setTimeout(() => {
          isDeleting = false;
          setTextIndex((prevIndex) =>
            prevIndex === texts.length - 1 ? 0 : prevIndex + 1
          );
        }, 500); // Tiempo de espera antes de pasar al siguiente texto
      }
  
      charIndex += isDeleting ? -1 : 1;
    };
  
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // Intervalo de parpadeo del cursor
  
    const typeInterval = setInterval(type, speed);
  
    return () => {
      clearInterval(cursorInterval);
      clearInterval(typeInterval);
    };
  }, [textIndex, texts]); // Incluir texts en el array de dependencias
  
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen px-40 py-32">
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-y-auto">
          <h2 className="flex items-center text-white space-x-3">
            <strong className="text-4xl font-medium">¡Hola!</strong> 
            <FaHandSparkles className="animate-waving text-5xl" />
          </h2>
          <p className="text-white text-4xl">Soy <strong className="text-orange-500 font-medium">Frank Smith Bocangelino Rojas</strong></p>
          <p className="text-white text-4xl">
            {displayedText}
            {showCursor && "|"}
          </p>
          
        </div>
        <div className="w-1/2 h-full">
          <img src={banner} alt="NOT FOUND" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
  
  
};

export default HomePage;