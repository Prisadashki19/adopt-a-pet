import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

// import useHistory here.

const Search = () => {
    const history = useHistory();
  // get the history object here

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

    // imperatively redirect with history.push()
      history.push('/search?' + searchQuery);
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
