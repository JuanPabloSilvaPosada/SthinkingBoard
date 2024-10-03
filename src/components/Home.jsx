import React, { useState } from "react";
import Header from "./Header";
import Button from './Buttons';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  

  return (
    <>
      {/* Header siempre estático */}
      <Header />

      {/* Botones de navegación */}
      <div className="buttons__container flex justify-between mt-6 px-4">
        <div className="flex space-x-4">
          <Button
            label="Tablero"
            onClick={() => navigate("/home/board")} // Cambia a la vista de Tablero
            styleType="default"
          />
          <Button
            label="Calendario"
            onClick={() => navigate("/home/calendar")} // Cambia a la vista de Calendario
            styleType="default"
            disabled={true} // El botón Calendario está deshabilitado
          />
        </div>

        {/* Botón de añadir columna */}
        <div className="flex justify-end">
          <button
            className="flex items-center p-4 bg-black text-white rounded-lg hover:bg-gray-800"
            onClick={() => setIsPopUpVisible(true)} // Muestra el PopUp para añadir columna
          >
            <FaPlus className="text-2xl mr-2" />
            <span>Añadir Columna</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;