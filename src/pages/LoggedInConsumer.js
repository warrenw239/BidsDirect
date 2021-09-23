import React, { useEffect, useState } from 'react';
import NavBarConsumerHome from '../components/NavBarConsumerHome';
import axios from 'axios';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
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
    return () => {

    };
  });

  return (
    <div>
      <NavBarConsumerHome />
    </div>
  );
};


export default LoggedInConsumer;
