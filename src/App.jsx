import { useState } from 'react'

import './App.css'
import Profiles from './Components/Profiles'
import SearchInput from './Components/SearchInput'
function App() {
const [searchResults, setSearchResults] = useState("");

  return (
    <div className="App">
      <SearchInput searchResults={searchResults}
      setSearchResults={setSearchResults} />
      <Profiles
        searchResults={searchResults} 
        setSearchResults={setSearchResults} />
    </div>
  );
}

export default App
