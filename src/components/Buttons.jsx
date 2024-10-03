// src/components/Buttons.jsx
import React from 'react';
import { FaTablero, FaCalendar, FaPlus, FaTasks } from 'react-icons/fa'; // Asegúrate de que estos íconos están instalados

const Buttons = ({ showBoard, showCalendar, showAddColumn, showCards }) => {
  return (
    <div className="flex space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
      {showBoard && (
        <button className="flex items-center bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          <FaTablero className="mr-2" /> Tablero
        </button>
      )}
      {showCalendar && (
        <button className="flex items-center bg-green-500 text-white p-2 rounded hover:bg-green-600">
          <FaCalendar className="mr-2" /> Calendario
        </button>
      )}
      {showAddColumn && (
        <button className="flex items-center bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
          <FaPlus className="mr-2" /> Añadir Columna
        </button>
      )}
      {showCards && (
        <button className="flex items-center bg-purple-500 text-white p-2 rounded hover:bg-purple-600">
          <FaTasks className="mr-2" /> Tarjetas
        </button>
      )}
    </div>
  );
};

export default Buttons;
