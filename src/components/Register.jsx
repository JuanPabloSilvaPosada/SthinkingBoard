import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // Stop default functionality of the form

    // Validate if all fields has information
    if (!username || !email || !password || !verifyPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // Validate password
    if (password !== verifyPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          verifyPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/login"); // Redirige a la página de inicio de sesión
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Error en la conexión, intentalo mas tarde.");
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
        <h1 className="text-2xl font-bold text-center mb-2">Crear cuenta</h1>
        <p className="text-center text-gray-500 mb-6">
          Regístrate para usar Sthinking Board
        </p>
        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Ingresa tu nombre"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {/* Email */}
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
          {/* Verify Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Confirmar contraseña
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="********"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              required
            />
          </div>
          {/* Mensaje de Error */}
          {error && (
            <div className="mb-4 text-red-500 text-sm font-semibold text-center">
              {error}
            </div>
          )}
          {/* Botón de Registro */}
          <button
            type="submit"
            className="w-full p-2 bg-black text-white font-semibold rounded hover:bg-gray-800"
            onClick={handleRegister}
          >
            Registrarse
          </button>
        </form>
        {/* Enlace de Inicio de Sesión */}
        <p className="mt-4 text-center">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-blue-500 hover:text-blue-700">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
