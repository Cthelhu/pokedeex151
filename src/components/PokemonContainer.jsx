import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PokemonName from "../components/PokemonName";
import PokemonType from "../components/PokemonType";
import PokemonIMG from "../components/PokemonIMG";
import PokemonID from "../components/PokemonID";
import BackButton from "./BackButton";
import PokemonDescription from "./PokemonDescription";
import PokemonStats from "./PokemonStats";


const typeColors = {
  normal: "bg-gradient-to-t from-gray-800 from-40% to-white to-30%",
  fire: "bg-gradient-to-t from-red-900  from-40% to-white to-30%",
  water: "bg-gradient-to-t from-blue-800  from-40% to-white to-30%",
  electric: "bg-gradient-to-t from-yellow-800  from-40% to-white to-30%",
  grass: "bg-gradient-to-t from-green-800  from-40% to-white to-30%",
  ice: "bg-gradient-to-t from-blue-600  from-40% to-white to-30% ",
  fighting: "bg-gradient-to-t from-red-900  from-40% to-white to-30%",
  poison: "bg-gradient-to-t from-purple-900  from-40% to-white to-30%",
  ground: "bg-gradient-to-t from-yellow-900  from-40% to-white to-30%",
  flying: "bg-gradient-to-t from-blue-600  from-40% to-white to-30%",
  psychic: "bg-gradient-to-t from-pink-900  from-40% to-white to-30%",
  bug: "bg-gradient-to-t from-green-900  from-40% to-white to-30%",
  rock: "bg-gradient-to-t from-gray-900  from-40% to-white to-30%",
  ghost: "bg-gradient-to-t from-purple-900  from-40% to-white to-30%",
  dragon: "bg-gradient-to-t from-purple-900  from-40% to-white to-30%",
  dark: "bg-gradient-to-t from-gray-900  from-40% to-white to-30%",
  steel: "bg-gradient-to-t from-gray-800  from-40% to-white to-30%",
  fairy: "bg-gradient-to-t from-pink-800  from-40% to-white to-30%",
};

const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading Pokémon data</p>;
  }

  const backgroundColor =
    pokemon.types.length > 0
      ? typeColors[pokemon.types[0].type.name]
      : typeColors["normal"];

  return (
    <div className={`h-full flex flex-col ${backgroundColor}`}>
      <div className="flex-grow px-20 pt-5 flex gap-12">
        <div className="flex flex-col justify-between w-[50%] px-10 pb-10">
          <div>
            <PokemonID pokemonId={pokemon.id} className="font-bold italic text-[100pt] text-[#72728E]" />
          </div>
          <PokemonIMG pokemonId={pokemon.id} className="w-full" />
        </div>

        <div className="flex flex-col justify-between w-[50%] px-10 pb-10">
          <div>
            <PokemonName pokemonId={pokemon.id} className="font-bold italic text-[100pt] text-[#72728E] capitalize" />
            <div>
              <PokemonType pokemonId={pokemon.id} className="w-[50%]" />
            </div>
            <PokemonDescription pokemonId={pokemon.id} className="text-[20pt] text-[#72728E] font-bold italic" />
          </div>
          <PokemonStats pokemonId={pokemon.id} />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
