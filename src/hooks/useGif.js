import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/GifContext';
import { getGifs } from '../services/getGifs';

const INITIAL_PAGE = 0;

export const useGif = ({keyword} = {keyword: null}) => {
  // const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const {gifs, setGifs} = useContext(Context);  
  
  const keywordToUse = keyword || localStorage.getItem('lastKeyword');

  useEffect(() => {
    setLoading(true);
    getGifs({keyword: keywordToUse}).then(gif => {
      setGifs(gif);
      setLoading(false);
      localStorage.setItem('lastKeyword', keyword);
    })
  }, [keyword]);

  useEffect(() => {
    if(page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page })
      .then(nextGif => {
        setGifs(prevGifs => prevGifs.concat(nextGif));
        setLoadingNextPage(false);
      })
  }, [keywordToUse, page])

  return {
    gifs,
    loading,
    setPage,
    loadingNextPage
  }
}
