import React from 'react';
import NavBar from '../components/NavBar';
import LogOutButton from '../components/LogOutButton';

//TODO: more to add here. do not change to implicit return
const LoggedInContractor = () => {
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
                            <a className="mainNavLink" href="/FindNewProjects">
                                Find New Projects
                            </a>
                        ),
                        key: 'FindNewProjects',
                    },
                ]}
            />
        </>
    );
};

export default LoggedInContractor;
