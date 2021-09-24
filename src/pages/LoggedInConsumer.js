import React, { useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import PropTypes from 'prop-types';
import LogOutButton from '../components/LogOutButton';

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
        <>
            <NavBar
                buttons={[{ html: <LogOutButton />, key: 'logoutbutton' }]}
                menuOptions={[
                    {
                        html: (
                            <a className="mainNavLink" href="/CurrentProjects">
                                Current Projects
                            </a>
                        ),
                        key: 'CurrentProjects',
                    },
                    {
                        html: (
                            <a
                                    className="mainNavLink"
                                    href="/startNewProject"
                                >
                                    Start New Project
                                </a>
                        ),
                        key: 'StartNewProject',
                    },
                    {
                        html: (
                            <a className="mainNavLink" href="/FindContractors">
                                    Find Contractors
                                </a>
                        ),
                        key: 'FindContractors',
                    },
                ]}
            />
        </>
    );
};

LoggedInConsumer.propTypes = {
    user: PropTypes.object,
};

export default LoggedInConsumer;
