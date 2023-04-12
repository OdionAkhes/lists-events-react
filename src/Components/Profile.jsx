import React from 'react'

const Profile = ({ profile }) => {
    const name = `${profile.title}. ${profile.firstName} ${profile.lastName}`;
  return (
      <div className='profile'>
          <img src={profile.picture } alt={ profile.firstName} className='img' />
          <div className="profile-detail">
              <span>{profile.id }</span>
              <span className='name'>{ name}</span>
          </div>
    </div>
  )
}

export default Profile