import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullname, email, password, confirmPassword }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12"
          />
        </div>
        {/* Título */}
        <h1 className="text-2xl font-bold text-center mb-2">Crear cuenta</h1>
        <p className="text-center text-gray-500 mb-6">
          Regístrate para usar Sthinking Board
        </p>
        {/* Formulario */}
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Campo de Nombre */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Ingresa tu nombre"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          {/* Campo de Correo */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="tu@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Campo de Contraseña */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Campo de Confirmar Contraseña */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Confirmar contraseña
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {/* Botón de Registro */}
          <button
            type="submit"
            className="w-full p-2 bg-black text-white font-semibold rounded hover:bg-gray-800"
            onClick={handleRegister}
          >
            Registrarse
          </button>
          {/* Mensaje de Error o Éxito */}
          {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </form>
        {/* Enlace de Inicio de Sesión */}
        <p className="mt-4 text-center">
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" className="text-blue-500 hover:text-blue-700">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;