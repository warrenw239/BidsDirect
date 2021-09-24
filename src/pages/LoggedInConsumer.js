import React, { useEffect, useState } from 'react';
import NavBarConsumerHome from '../components/NavBarConsumerHome';
import axios from 'axios';
import PropTypes from 'prop-types';

const LoggedInConsumer = ({ user }) => {
    const [data, setData] = useState({
        user: {},
        projects: {},
        contractors: {},
    });

    useEffect(() => {
        axios({
            method: 'post',
            url: 'http://localhost:3000/data',
            params: {
                user: user,
            },
        });
    });

    //NOTE: more to add here. do not change to implicit return
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
