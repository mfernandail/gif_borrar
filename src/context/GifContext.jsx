import React, { createContext, useState } from 'react';

export const Context = createContext({});

export const GifContextProvider = ({children}) => {
  const [gifs, setGifs]= useState([]);

  return (
    <Context.Provider value={{gifs, setGifs}} >
      {children}
    </Context.Provider>
  )
}
