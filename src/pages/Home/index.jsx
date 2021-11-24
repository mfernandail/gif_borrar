import React, { useCallback } from 'react';
import { useLocation } from 'wouter';
import { ListOfGif } from '../../components/ListOfGif';
import FormSearch from '../../components/SearchForm';
import { LazyTranding } from '../../components/TrendingSearches';
import { useGif } from '../../hooks/useGif';


export const Home = () => {
  const [path, pushLocation] = useLocation();
  const {gifs} = useGif();

  const handleFormSubmit = useCallback(({keyword}) => {
    pushLocation(`/search/${keyword}`)
  }, [pushLocation]);

  return (
    <>  
      <FormSearch onSubmit={handleFormSubmit} />

      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Last search</h3>
          <ListOfGif gifs={gifs} />
        </div>
        <div className="App-category">
          <LazyTranding />
        </div>
      </div>
    </>
  )
}
