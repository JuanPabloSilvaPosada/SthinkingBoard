import React from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md">
      {/* Logo y nombre del proyecto */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
        <h1 className="text-xl font-bold">Sthinking Board</h1>
      </div>

      {/* Botones con iconos */}
      <div className="flex items-center space-x-4">
        <button
          className="flex items-center text-gray-600 hover:text-red-500 focus:outline-none"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="text-2xl mr-2" />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </header>
  );
};

export default Header;