import React, { useState } from 'react';

const FormSearch = ({onSubmit}) => {
  const [keyword, setKeyword] = useState('');

  const handleInputChange = e => {
    setKeyword(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit({keyword})    
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input 
        type="text" 
        value={keyword} 
        onChange={handleInputChange} 
        placeholder="Search something..."
      />
      <button>Search</button>
    </form>
  )
}

export default React.memo(FormSearch);
