import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { getTrending } from '../../services/getTrending';

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrending()
    .then(setTrends)
    .catch(e => console.log(e))
  }, []);

  return (
    <Category options={trends} name="Trensds" />
  )
}

export default TrendingSearches;