import React from 'react';

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src=".././src/assets/logo.png"
            alt="Logo"
            className="w-20 h-20"
          />
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-center mb-2">Crear cuenta</h2>
        <p className="text-sm text-gray-600 text-center mb-8">
          Regístrate para usar Sthinking Board
        </p>

        {/* Formulario */}
        <form>
          {/* Campo de Nombre completo */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="fullname">
              Nombre completo
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Juan Pérez"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Campo de correo electrónico */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@ejemplo.com"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Campo de contraseña */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Campo de confirmación de contraseña */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirm-password">
              Confirmar contraseña
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Botón de registro */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Registrarse
          </button>
        </form>

        {/* Link de inicio de sesión */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;