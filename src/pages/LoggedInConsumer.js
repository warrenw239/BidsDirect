import axios from 'axios';
import NavBarConsumerHome from '../components/NavBarConsumerHome';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const LoggedInConsumer = ({ user }) => {

    useEffect(() => {
        axios({
            method: 'post',
            url: 'http://localhost:3000/data',
            params: {
                user: user,
            },
        });
    });

    //TODO: more to add here. do not change to implicit return
    return (
        <div>
            <NavBarConsumerHome />
        </div>
    );
};

LoggedInConsumer.propTypes = {
  user: PropTypes.object
};

export default LoggedInConsumer;
