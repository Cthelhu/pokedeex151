import React, {useState} from 'react';

const PokedexSearch = () => {
 
    return (
        <div className='flex Items-center'>
        <input  
          type="text" 
          placeholder="Buscar Pókemon" 
          className='px-[80px] py-[5px] text-center border-solid border-2 border-gray-400 rounded-[100px]'
        />
        <button className='ml-[10px] px-[20px] py-[5px]  bg-[#E75757] text-white rounded-[100px]' 
          //style={{ padding: '10px', marginLeft: '10px', fontSize: '16px' }}
        >
          Buscar
        </button>
      </div>
  )
}

export default PokedexSearch