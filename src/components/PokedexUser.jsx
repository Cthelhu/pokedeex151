import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokedexUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // Limpiar la información del usuario
    navigate('/home');
  };

  // Obtener el nombre de usuario y correo del localStorage
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const { username = '', email = '' } = user;

  return (
    <div className="relative">
      <div
        className="bg-[#72728E] hover:bg-gray-600 h-9 w-9 ml-[10px] rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // Alternar estado
      >
        <p className="font-bold text-white">{username.slice(0, 2).toUpperCase()}</p>
      </div>

      {isOpen && (
        <div className="w-[300px] absolute top-full right-0 bg-white shadow-2xl rounded-lg p-4 mt-2 z-10">
          <h3 className="text-gray-700 font-bold text-lg">{username}</h3>
          <p className="text-gray-700">{email || 'Correo no disponible'}</p>
          <button
            className="mt-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      )}
      
      {/* Cerrar el overlay al hacer clic fuera */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default PokedexUser;
