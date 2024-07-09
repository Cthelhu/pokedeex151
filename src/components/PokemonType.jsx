import React, { useState, useEffect } from 'react';
import axios from 'axios';

const typeColors = {
  normal: 'bg-gray-500',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-500',
  grass: 'bg-green-500',
  ice: 'bg-blue-200',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-800',
  flying: 'bg-blue-300',
  psychic: 'bg-pink-500',
  bug: 'bg-green-600',
  rock: 'bg-gray-700',
  ghost: 'bg-purple-800',
  dragon: 'bg-purple-700',
  dark: 'bg-gray-900',
  steel: 'bg-gray-400',
  fairy: 'bg-pink-300',
};

const PokemonType = ({ pokemonId }) => {
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPokemonTypes = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
          setTypes(response.data.types.map(typeInfo => typeInfo.type.name));
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
  
      fetchPokemonTypes();
    }, [pokemonId]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error loading Pokémon data</p>;
    }
  
    return (
      <div className='flex flex-col '>
        {types.map((type, index) => (
          <div key={index} className={` capitalize text-white font-medium rounded-full text-center shadow-lg shadow-black-200/50 m-1 py-2 ${typeColors[type]}`}>
            {type}
          </div>
        ))}
      </div>
    );
  };
  
  export default PokemonType;
