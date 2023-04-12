import React from 'react'

const SearchInput = ({ searchResults, setSearchResults }) => {

  const handleChange = (e) =>{
    e.preventDefault();
    if(searchResults.length < 1 && e.target.value.trim().length < 1) return; //the input needs a validation that prevents the user from starting the search value with a space
    setSearchResults(e.target.value);
  }
  
  return (
    <div className="search-input">
      {/* <form action="" className="search-input">  the form has a default submit action that makes the page refresh, so if you are not using the form, then there is no need to have it here  */}
        <input
          type="text"
          onChange={handleChange} 
          placeholder="Search by name..."
          value={searchResults}
        />
      {/* </form> */}
    </div>
  );
};

export default SearchInput