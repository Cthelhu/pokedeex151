import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonIMG = ({ pokemonId }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonImage = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        setImageUrl(response.data.sprites.other.dream_world.front_default);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPokemonImage();
  }, [pokemonId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading Pokémon image</p>;
  }

  return (
    <img src={imageUrl} alt={`Pokemon ${pokemonId}`} />
  );
};

export default PokemonIMG;
