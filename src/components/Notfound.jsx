import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const NotFound = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold text-grey-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Lo sentimos, la página que buscas no existe.</p>
        <Link 
          to={isAuthenticated ? '/home' : '/login'}
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          {isAuthenticated ? 'Ir a la página principal' : 'Iniciar sesión'}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;