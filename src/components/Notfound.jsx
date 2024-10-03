import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Lo sentimos, la página que buscas no existe.</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">
          Regresar a la página principal
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
