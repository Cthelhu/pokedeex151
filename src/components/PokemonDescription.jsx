import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonDescription = ({ pokemonId, className }) => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDescription = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
        );
        const spanishEntry = response.data.flavor_text_entries.find(
          entry => entry.language.name === 'es'
        );

        setDescription(spanishEntry ? spanishEntry.flavor_text : 'No description available');
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPokemonDescription();
  }, [pokemonId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading Pokémon description</p>;
  }

  return <p className={className}>{description}</p>;
};

export default PokemonDescription;
