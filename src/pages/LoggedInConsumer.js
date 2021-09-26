import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import PropTypes from 'prop-types';
import axios from 'axios';
import ConsumerProfile from '../components/ConsumerProfile';

const LoggedInConsumer = ({ user }) => {
    const HOST = process.env.HOST || 'localhost';
    const PORT = process.env.PORT || '3000';

    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios
        .get(`http://${HOST}:${PORT}/data`, { params: { user } })
        .then((profile) => {
            setUserData(profile.data);
        });
    }, []);

    //TODO: more to add here. do not change to implicit return
    return (
        <>
            <NavBar
                showLogout={true}
                menuOptions={[
                    {
                        itemName: 'Create New Project',
                        href: '/CreateNewProject',
                    },
                    {
                        itemName: 'Find Contractors',
                        href: '/FindContractors',
                    },
                ]}
            />
        <ConsumerProfile username={userData.username} picture={userData.picture}/>
        </>
    );
};

LoggedInConsumer.propTypes = {
    user: PropTypes.object.isRequired,
};

export default LoggedInConsumer;
