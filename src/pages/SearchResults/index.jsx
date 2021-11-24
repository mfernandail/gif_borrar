import React, { useRef, useEffect, useCallback } from 'react';
import { ListOfGif } from '../../components/ListOfGif';
import { useGif } from '../../hooks/useGif';
import { Spinner } from '../../components/Spinner'; 
import { useNearScreen } from '../../hooks/useNearScreen';
import debounce from 'just-debounce-it';

export const SearchResults = ({params}) => {
  const {keyword} = params;  
  const {gifs, loading, setPage} = useGif({keyword});
  
  const externalRef = useRef();

  const {show} = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });

  console.log(show)

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prev => prev +1) , 500
  ), [setPage]);

  useEffect(() => {
    if (show) debounceHandleNextPage()
  }, [debounceHandleNextPage, show]);




  return ( 
    <>
      {
        loading
          ? <Spinner />
          : <>
              <h3 className="App-title-search">{decodeURI(keyword)}</h3>  
              <ListOfGif gifs={gifs}/>
              <div id="visor" ref={externalRef}></div>
            </>
      }
    </>
  )
}
