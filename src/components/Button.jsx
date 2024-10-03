import React from "react";
import { FaTrello, FaCalendarAlt, FaPlus, FaClipboardList } from "react-icons/fa"; // Importamos los íconos de react-icons

const Button = ({ icon, label, onClick, isVisible = true, isAddColumn = false }) => {
  if (!isVisible) return null; // Si no es visible, no renderizamos nada

  return (
    <button
      className={`flex flex-col items-center p-2 rounded-lg hover:bg-gray-300 ${
        isAddColumn ? "bg-black text-white" : "bg-gray-200"
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

const Buttons = () => {
  const handleAddColumn = () => {
    // Aquí puedes definir lo que hace el botón "Añadir Columna"
    console.log("Añadir Columna");
  };

  return (
    <div className="flex justify-between items-center w-full">
      {/* Botones pequeños a la izquierda */}
      <div className="flex space-x-4">
        {/* Botón Tablero */}
        <Button
          icon={<FaTrello className="text-2xl mb-1" />}
          label="Tablero"
          onClick={() => console.log("Ir a Tablero")}
        />

        {/* Botón Calendario */}
        <Button
          icon={<FaCalendarAlt className="text-2xl mb-1" />}
          label="Calendario"
          onClick={() => console.log("Ir a Calendario")}
        />
      </div>

      {/* Botón Añadir Columna a la derecha */}
      <Button
        icon={<FaPlus className="text-2xl mr-2" />}
        label="Añadir Columna"
        onClick={handleAddColumn}
        isAddColumn={true}
      />
    </div>
  );
};

export default Buttons;
