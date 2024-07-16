import React from 'react'
import PokedexCard from './PokedexCard'

const PokedexContainer = () => {
    const pokemonIds = Array.from({ length: 151 }, (_, index) => index + 1);
  
    return (
      <div className='px-20 py-5 grid grid-cols-4 gap-4 items-center justify-center'>
      {pokemonIds.map(id => (
        <PokedexCard key={id} pokemonId={id} />
      ))}
    </div>
    );
  }

export default PokedexContainer