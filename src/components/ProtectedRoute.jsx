import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const user = localStorage.getItem('user'); // Verificar si el usuario ha iniciado sesión

  if (!user) {
    // Si no hay usuario, redirigir a la página de inicio
    return <Navigate to="/" />;
  }

  return <Outlet />; // Renderiza los componentes hijos si el usuario está autenticado
};

export default ProtectedRoute;