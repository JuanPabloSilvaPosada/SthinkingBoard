import React from "react";
import Header from "./Header";
import Button from './Buttons'
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
        <Button
          label="Tablero"
          onClick={() => console.log("Ir a Tablero")}
          styleType="default"
        />
        <Button
          label="Calendario"
          onClick={() => console.log("Ir a Calendario")}
          styleType="default"
          disabled={true}
        />
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
