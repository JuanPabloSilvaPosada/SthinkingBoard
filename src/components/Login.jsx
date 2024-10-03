import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage("");
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        
        login();
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/home');
      } else {
        const data = await response.json();
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      setError('Error en la conexión');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </div>
        {/* Título */}
        <h1 className="text-2xl font-bold text-center mb-2">Iniciar sesión</h1>
        <p className="text-center text-gray-500 mb-6">
          Ingresa a tu cuenta de Sthinking Board
        </p>
        {/* Formulario */}
        <form onSubmit={(e) => e.preventDefault()}>
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
          {/* Botón de Iniciar Sesión */}
          <button
            type="submit"
            className="w-full p-2 bg-black text-white font-semibold rounded hover:bg-gray-800"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
          {/* Mensaje de Error o Éxito */}
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}
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
