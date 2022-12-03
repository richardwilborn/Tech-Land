import React from 'react';
import { Link } from 'react-router-dom';

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>Input your contact info here!</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {profiles &&
        profiles.map((contact) => (
          <div key={contact._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {profile.profileAuthor} <br />
            </h4>
            <div className="card-body bg-light p-2">
              <p>{profile.profileText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProfileList;
