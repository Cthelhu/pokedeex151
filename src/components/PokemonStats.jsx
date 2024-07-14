import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonStats = ({ pokemonId }) => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonStats = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        setStats(response.data.stats);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPokemonStats();
  }, [pokemonId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading Pokémon stats</p>;
  }

  const maxStatValue = Math.max(...stats.map(stat => stat.base_stat));

  return (
    <div className="drop-shadow-2xl bg-white p-4 rounded-[20px]">
      <div className='mb-10'>
        <h2 className='text-[40pt] text-[#72728E] font-bold italic'> 
          Stats
        </h2>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full h-80 bg-gray-200 rounded-md overflow-hidden">
              <div
                className="absolute bottom-0 w-full bg-blue-500"
                style={{ height: `${(stat.base_stat / maxStatValue) * 100}%` }}
              ></div>
            </div>
            <p className="text-center mt-2 text-gray-600">{statNames[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const statNames = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'];

export default PokemonStats;
