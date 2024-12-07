import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <form>
      <FaSearch />
      <input type="search" placeholder="Search for a breed" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
