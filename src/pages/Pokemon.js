import React from 'react';
import PokedexHeader from '../components/PokedexHeader';
import PokemonContainer from '../components/PokemonContainer';

const Pokedex = () => {
    return (
    <body className='flex-col'>
      <header className='fixed top-0 w-full z-50'>
      <PokedexHeader/>
      </header>
      <section className='mt-[156px]'>
      <PokemonContainer/>
      </section>
    </body>
  );
};

export default Pokedex;