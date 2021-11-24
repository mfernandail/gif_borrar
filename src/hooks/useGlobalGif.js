import { useContext } from 'react';
import { Context } from '../context/GifContext';

export const useGlobalGif = () => {
  return useContext(Context).gifs;
}
