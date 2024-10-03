import React from "react";
import Header from "./Header";
import { FaTrello, FaCalendarAlt, FaPlus } from "react-icons/fa"; // Importamos los íconos de react-icons

const Home = () => {
  // Este componente que representa cada tarjeta
  const Card = ({ title, status }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-1/4"> {/* Cambié w-full por w-1/4 para que se ajuste a la cuarta parte del contenedor */}
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-600">{status}</p>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="buttons__container flex justify-between mt-6 px-4">
        {/* Div para los botones */}
        <div className="flex space-x-4">
          {/* Botón Tablero */}
          <button className="flex flex-col items-center p-4 bg-gray-200 rounded-lg hover:bg-gray-300">
            <FaTrello className="text-3xl mb-2" />
            <span>Tablero</span>
          </button>

          {/* Botón Calendario */}
          <button className="flex flex-col items-center p-4 bg-gray-200 rounded-lg hover:bg-gray-300">
            <FaCalendarAlt className="text-3xl mb-2" />
            <span>Calendario</span>
          </button>
        </div>

        {/* Div para el botón de añadir columna */}
        <div className="flex justify-end">
          <button className="flex items-center p-4 bg-black text-white rounded-lg hover:bg-gray-800">
            <FaPlus className="text-2xl mr-2" />
            <span>Añadir Columna</span>
          </button>
        </div>
      </div>

      {/* Div para las cartas */}
      <div className="cards__container flex justify-between mt-6 px-4">
        <Card title="TO DO" status="Tareas pendientes" />
        <Card title="IN PROGRESS" status="Tareas en progreso" />
        <Card title="DONE" status="Tareas completadas" />
      </div>
    </>
  );
};

export default Home;
