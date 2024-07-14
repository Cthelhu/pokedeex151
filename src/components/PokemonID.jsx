import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonID = ({ pokemonId, className }) => {
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonId = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        setId(response.data.id);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPokemonId();
  }, [pokemonId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading Pokémon data</p>;
  }

  return (
    <div className={className} >
      #{id}
    </div>
  );
};

export default PokemonID;

