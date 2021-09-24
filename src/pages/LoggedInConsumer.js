import React, { useEffect, useState } from 'react';
import NavBarConsumerHome from '../components/NavBarConsumerHome';
import PropTypes from 'prop-types';

const LoggedInConsumer = ({ user }) => {
  const [data, setData] = useState({
    user: {},
    projects: {},
    contractors: {},
  });

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