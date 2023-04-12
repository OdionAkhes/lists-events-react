import { useState } from 'react'

import './App.css'
import Profiles from './components/Profiles'
import SearchInput from './components/SearchInput'
function App() {
const [searchResults, setSearchResults] = useState("");

  return (
    <div className="App">
      <SearchInput searchResults={searchResults}
      setSearchResults={setSearchResults} />
      <Profiles
        searchResults={searchResults} 
        />
    </div>
  );
}

export default App
