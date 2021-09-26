import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import PropTypes from 'prop-types';
import axios from 'axios';

const LoggedInConsumer = ({ user }) => {
    const HOST = process.env.HOST || 'localhost';
    const PORT = process.env.PORT || '3000';

    useEffect(() => {
        axios.get(`http://${HOST}:${PORT}/data`, { params: { user } }).then((profile) => {

            // eslint-disable-next-line no-unused-vars
            const [userData] = useState(profile);
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
            <div>testing</div>
        </>
    );
};

LoggedInConsumer.propTypes = {
    user: PropTypes.object.isRequired,
};

export default LoggedInConsumer;
