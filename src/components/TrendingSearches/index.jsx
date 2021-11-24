import React, { Suspense } from 'react';
import { useNearScreen } from '../../hooks/useNearScreen';
import { Spinner } from '../Spinner';

const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

export const LazyTranding = () => {
  const {show, elementRef} = useNearScreen();
  
  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>
        { show ? <TrendingSearches /> : <Spinner /> }
      </Suspense>
    </div>
  )
}
