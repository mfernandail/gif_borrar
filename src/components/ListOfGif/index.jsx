import React from 'react';
import Gif from '../Gif';

import './ListOfGif.css';

export const ListOfGif = ({gifs}) => {

  return <div className="ListOfGifs">
    {
      gifs.map(({id, title, url}) => 
        <Gif
          key={id}
          id={id}
          title={title}
          url={url}
        />      
      )
    }
  </div>
}
