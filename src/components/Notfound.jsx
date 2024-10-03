import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  // Verify if user alredy login
  const user = localStorage.getItem('user');

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold text-gray-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Lo sentimos, la página que buscas no existe.</p>
        {/* Enlace condicional basado en si el usuario ha iniciado sesión */}
        <Link to={user ? '/home' : '/'} className="text-blue-500 underline">
          Ir a {user ? 'Inicio' : 'Página Principal'}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
