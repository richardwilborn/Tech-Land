import React from 'react';
import { Link } from 'react-router-dom';

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {profiles &&
        profiles.map((profile) => (
          <div key={profile._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">

              {profiles.profileAuthor} <br />
            </h4>
            <div className="card-body bg-light p-2">
              <p>{profiles.profileText}</p>

            </div>
          </div>
        ))}
    </div>
  );
};

export default ProfileList;
