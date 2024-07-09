import React, { useState } from 'react';

const LoginToggle = ({ hidden, setHidden }) => {
  const [isInicio, setIsInicio] = useState(true);

  const toggle = () => {
    setIsInicio(!isInicio);
    setHidden(!hidden);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center bg-gray-500 rounded-full ">
        <button
          onClick={toggle} 
          className={`${
            isInicio
              ? "bg-red-500 text-white text-lg"
              : "bg-gray-500 text-gray-300 text-lg"
          } px-[70px] py-2 rounded-full focus:outline-none transition-colors duration-300`}
        >
          Inicio
        </button>
        <button
          onClick={toggle}
          className={`${
            isInicio
              ? "bg-gray-500 text-gray-300 text-lg"
              : "bg-red-500 text-white text-lg"
          } px-[70px] py-2 rounded-full focus:outline-none transition-colors duration-300`}
        >
          Registro
        </button>
      </div>
    </div>
  );
};

export default LoginToggle;
