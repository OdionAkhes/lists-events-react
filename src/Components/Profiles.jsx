import React,{useState} from 'react'
import Profile from './Profile'
import profilesData from './ProfileData'
// I would have preffered getting the filtered data as props in this component 
const Profiles = ({ searchResults }) => {
  const profiles = profilesData
      .filter((profile) => {
        
      return searchResults.toLowerCase() === ""
        ? profile
        : profile.firstName.toLowerCase().startsWith(searchResults.toLowerCase()) || // remeber that you are searching for a name, meaning the search value has to be the begiining of the name
            profile.lastName.toLowerCase().startsWith(searchResults.toLowerCase()); // it is better to make the two values case insensitive, so i can get results regardless of my search case
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