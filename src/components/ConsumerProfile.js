import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ConsumerProfile.css';

const ConsumerProfile = ({ username, picture }) => {
    return (
        <div className="profileInfo">
            <img src={picture} />
            {username}
        </div>
    );
};

ConsumerProfile.propTypes = {
    username: PropTypes.string,
    picture: PropTypes.string,
};

export default ConsumerProfile;
