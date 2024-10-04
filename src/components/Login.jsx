import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [identifier, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Stop default functionality of the form

    // Validate if all fields has information
    if (!identifier || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identifier: identifier,
          password: password,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user))
        navigate('/home');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error en la conexión, inténtalo más tarde.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </div>
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-2">Iniciar sesión</h1>
        <p className="text-center text-gray-500 mb-6">
          Ingresa a tu cuenta de Sthinking Board
        </p>
        {/* Fomr */}
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Email or username */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Correo electrónico o nombre
            </label>
            <input
              type="email o nombre"
              className="w-full p-2 border rounded"
              placeholder="tu@ejemplo.com"
              value={identifier}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Password */}
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
          {/* Mensaje de Error */}
          {error && (
            <div className="mb-4 text-red-500 text-sm font-semibold text-center">
              {error}
            </div>
          )}
          {/* Botón de Iniciar Sesión */}
          <button
            type="submit"
            className="w-full p-2 bg-black text-white font-semibold rounded hover:bg-gray-800"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
        </form>
        {/* Enlace de Registro */}
        <p className="mt-4 text-center">
          ¿No tienes una cuenta?{" "}
          <a href="/register" className="text-blue-500 hover:text-blue-700">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
