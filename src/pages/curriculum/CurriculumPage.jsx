import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const CurriculumPage = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // Asegúrate de que la URL del trabajador sea correcta
    const workerUrl = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

    return (
        <div className=" w-full h-full px-40 pt-32 pb-10 min-h-screen">
            <div className="border border-gray-300 shadow-lg p-4 bg-white">
                <Worker workerUrl={workerUrl}>
                    <Viewer
                        fileUrl="/cv.pdf"
                        plugins={[defaultLayoutPluginInstance]}
                        onLoadError={(error) => console.error('Error al cargar el PDF:', error)}
                    />
                </Worker>
            </div>
        </div>
    );
};

export default CurriculumPage;
