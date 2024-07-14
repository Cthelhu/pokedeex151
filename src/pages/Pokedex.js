import React from 'react';
import PokedexHeader from '../components/PokedexHeader';
import PokedexContainer from '../components/PokedexContainer';

const Pokedex = () => {
    return (
    <body className='flex-col'>
      <header className='fixed top-0 w-full z-50'>
      <PokedexHeader/>
      </header>
      <section className='mt-[156px]'>
      <PokedexContainer/>
      </section>
    </body>
  );
};

export default Pokedex;