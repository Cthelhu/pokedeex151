import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import PokemonName from "./PokemonName";
import PokemonType from "./PokemonType";
import PokemonIMG from "./PokemonIMG";
import PokeballIcon from "../img/pokeball_icon.png";

const PokedexCard = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const typeColors = {
    normal: "bg-gradient-to-br from-gray-800 to-gray-500",
    fire: "bg-gradient-to-br from-red-900 to-red-600",
    water: "bg-gradient-to-br from-blue-800 to-blue-500",
    electric: "bg-gradient-to-br from-yellow-800 to-yellow-500",
    grass: "bg-gradient-to-br from-green-800 to-green-500",
    ice: "bg-gradient-to-br from-blue-600 to-blue-300",
    fighting: "bg-gradient-to-br from-red-900 to-red-700",
    poison: "bg-gradient-to-br from-purple-900 to-purple-600",
    ground: "bg-gradient-to-br from-yellow-900 to-yellow-700",
    flying: "bg-gradient-to-br from-blue-600 to-blue-300",
    psychic: "bg-gradient-to-br from-pink-900 to-pink-600",
    bug: "bg-gradient-to-br from-green-900 to-green-600",
    rock: "bg-gradient-to-br from-gray-900 to-gray-600",
    ghost: "bg-gradient-to-br from-purple-900 to-purple-700",
    dragon: "bg-gradient-to-br from-purple-900 to-purple-700",
    dark: "bg-gradient-to-br from-gray-900 to-gray-700",
    steel: "bg-gradient-to-br from-gray-800 to-gray-500",
    fairy: "bg-gradient-to-br from-pink-800 to-pink-500",
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        setPokemon(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading Pokémon data</p>;
  }

  // Validación adicional para evitar errores si pokemon o pokemon.types no están definidos
  const backgroundColor =
    pokemon && pokemon.types && pokemon.types.length > 0
      ? typeColors[pokemon.types[0].type.name]
      : typeColors["normal"];

  // Función para manejar el clic en la card
  const handleCardClick = () => {
    navigate(`/pokemon/${pokemonId}`);
  };

  return (
    <div
      className={`grid grid-cols-2 w-[100%] h-[100%] p-5 rounded-[30px] ${backgroundColor} cursor-pointer`}
      onClick={handleCardClick}
    >
      <div className="flex-col">
        <PokemonName
          pokemonId={pokemonId}
          className="capitalize text-white text-[20pt] font-bold drop-shadow-2xl"
        />
        <div className="space-y-2 text-[15pt]">
          <PokemonType pokemonId={pokemonId} />
        </div>
      </div>
      <div className="flex justify-end">
        <PokemonIMG pokemonId={pokemonId} />
      </div>
    </div>
  );
};

export default PokedexCard;
