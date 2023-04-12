import React from 'react'

const SearchInput = ({ searchResults, setSearchResults }) => {
  return (
    <div>
      <form action="" className="search-input">
        <input
          type="text"
          onChange={(e) => setSearchResults(e.target.value)}
          placeholder="Search by name..."
          value={searchResults}
        />
      </form>
    </div>
  );
};

export default SearchInput