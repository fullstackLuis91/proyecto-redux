import React from 'react'
import { useSelector } from 'react-redux';
import "./Profile.scss"

const Profile = () => {
    const { user } = useSelector((state) => state.auth);

  return (
    <div className="profile">
      <div className="profile__card">
        <p className="profile__name">{user.name}</p>
        <p className="profile__email">{user.email}</p>
      </div>
    </div>
  )
}

export default Profile