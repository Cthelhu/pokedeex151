import React from "react";
import { Link } from "react-router-dom";
import NofoundImg from "../img/nofound.png";
import PokeballIcon from "../img/pokeball_icon.png";

const NoFoundContainer = () => {
  return (
    <div
      className="px-2 flex justify-between h-screen bg-no-repeat bg-right-bottom"
      style={{
        backgroundImage: `url(${PokeballIcon})`,
        backgroundSize: "800px",
      }}
    >
      <div className="flex w-[100%] flex-row">
        <div className="w-1/2 flex items-center justify-center">
          <img src={NofoundImg} alt="No Found" className="w-[70%]" />
        </div>
        <div className="w-[50%] flex flex-col items-start justify-center">
          <p className="text-[80pt] font-bold italic text-gray-700">
            Búsqueda sin resultados :c
          </p>
          <p className="text-[20pt] font-semibold italic text-red-500">
            El Pokémon que buscaste no existe o tal vez está mal escrito, prueba con buscarlo en el listado del inicio haciendo{" "}
            <Link to="/pokedex" className="text-gray-700 underline">clic aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoFoundContainer;
