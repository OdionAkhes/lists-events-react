import React from 'react'

const Profile = ({ profile }) => {
  const {id, title, firstName, lastName, picture} = profile; // If you don't want to pass the object prroperties as props, you can destructure her, so you don't have to repeat "profile" in so many places
    const name = `${title}. ${firstName} ${lastName}`;
  return (
      <div className='profile'>
          <img src={picture } alt={ profile} className='img' />
          <div className="profile-detail">
              <span>{id }</span>
              <span className='name'>{name}</span>
          </div>
    </div>
  )
}

export default Profile