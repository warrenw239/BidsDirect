import React from 'react';
import NavBar from '../components/NavBar';

//TODO: more to add here. do not change to implicit return
const LoggedInContractor = () => {
    return (
        <>
            <NavBar
                showLogout={true}
                menuOptions={[
                    {
                        itemName: 'Current Projects', 
                        href: '/CurrentProjects'
                    },
                    {
                        itemName: 'Find New Projects', 
                        href: '/FindNewProjects'
                    },
                ]}
            />
        </>
    );
};

export default LoggedInContractor;
