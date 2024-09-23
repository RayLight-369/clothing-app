"use client";

import { API } from '@/lib/constants';
import { useState, useEffect, createContext, useContext } from 'react';


const clothesContext = createContext();

export const useClothes = () => useContext( clothesContext );


async function fetchClothes () {

  const clothesRes = await fetch( API.CLOTHES );

  if ( clothesRes.ok ) {

    const clothesBody = await clothesRes.json();
    return clothesBody;

  }

  console.log( await clothesRes.json() );

}

const ClothesContext = ( { children } ) => {

  const [ clothes, setClothes ] = useState( [] );

  useEffect( () => {
    ( async () => {

      const clothesData = await fetchClothes();

      console.log( clothesData );

      setClothes( clothesData );

    } )();
  }, [] );


  return (
    <clothesContext.Provider value={ { clothes, setClothes } }>
      { children }
    </clothesContext.Provider>
  );
};

export default ClothesContext;