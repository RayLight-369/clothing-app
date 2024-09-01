"use client";

import { useState, useContext, createContext } from 'react';

const ConfigContext = createContext();

export const useConfig = () => useContext( ConfigContext );

const Config = ( { children } ) => {

  const [ selectedImage, setSelectedImage ] = useState( "" );

  return (
    <ConfigContext.Provider value={ { selectedImage, setSelectedImage } }>{ children }</ConfigContext.Provider>
  );

};

export default Config;