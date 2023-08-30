import React from 'react';

const UserProfile = ({ username }) => {
    return (
        <div>
            <p>You are logged in as {username}</p>
        </div>
    );
};

export default UserProfile;
