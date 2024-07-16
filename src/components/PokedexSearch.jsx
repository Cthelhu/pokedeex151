import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PokedexSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      
      if (response.ok) {
        navigate(`/pokemon/${searchTerm.toLowerCase()}`);
      } else {
        navigate("/nofound");
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Buscar Pokémon"
        className="px-[80px] py-[5px] text-center border-solid border-2 border-gray-400 rounded-[100px]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="ml-[10px] px-[20px] py-[5px] bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-75"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default PokedexSearch;
