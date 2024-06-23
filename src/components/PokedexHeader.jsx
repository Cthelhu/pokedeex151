import React from 'react';
import PokedexLogo from '../img/Pokédex_logo.png'
import PokedexSearch from './PokedexSearch';
import PokedexUser from './PokedexUser';


const PokedexHeader = () => {
  return (
    <header className='bg-white rounded-b-[30px] fixed top-0 left-0 right-0 px-20 py-5 shadow-md flex justify-between items-center '  >
        <img src={PokedexLogo} alt='Pokedex Logo' className='w-80'/>
        <div className='flex'>
            <PokedexSearch/>
            <PokedexUser/>
        </div>

            
    </header>
  )
}

export default PokedexHeader;