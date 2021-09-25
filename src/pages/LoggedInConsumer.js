import React from 'react';
import NavBar from '../components/NavBar';

const LoggedInConsumer = () => {

    //TODO: more to add here. do not change to implicit return
    return (
        <>
            <NavBar
                showLogout={true}
                menuOptions={[
                    {
                        itemName: 'Create New Project', 
                        href: '/CreateNewProject'
                    },
                    {
                        itemName: 'Find Contractors', 
                        href: '/FindContractors'
                    },
                ]}
            />
        </>
    );
};

export default LoggedInConsumer;
