import React from "react";
import { FaTrello, FaCalendarAlt, FaPlus } from "react-icons/fa";

// Componente Button reutilizable
const Button = ({ icon = null, label, onClick, styleType = "default", disabled = false }) => {
  // Estilos basados en `styleType`
  const buttonStyle = disabled
    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
    : styleType === "addColumn"
    ? "bg-black text-white hover:bg-gray-800"
    : "bg-gray-200 hover:bg-gray-300";

  return (
    <button
      className={`flex flex-col items-center p-4 rounded-lg ${buttonStyle}`}
      onClick={onClick}
      disabled={disabled} // Propiedad que controla si el botón está deshabilitado
    >
      {/* Renderiza el ícono si se proporciona */}
      {icon && (typeof icon === "string" ? (
        <img src={icon} alt="icon" className="text-2xl mb-1" />
      ) : (
        icon
      ))}
      <span className="font-bold">{label}</span>
    </button>
  );
};

// Exportar el componente Button
export default Button;
