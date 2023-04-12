import React,{useState} from 'react'
import Profile from './Profile'
import profilesData from './ProfileData'
const Profiles = ({ searchResults, setSearchResults }) => {
  const profiles = profilesData
      .filter((profile) => {
        
      return searchResults.toLowerCase() === ""
        ? profile
        : profile.firstName.toLowerCase().includes(searchResults) ||
            profile.lastName.toLowerCase().includes(searchResults);
    })
      .map((profile) => {
        
      return <Profile key={profile.id} profile={profile} />;
    });

  return (
    <div className="grid">
      {" "}
      {profiles.length > 0 ? profiles : <h2>No Results found...</h2>}
    </div>
  );
};

export default Profiles