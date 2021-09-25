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
                        itemName: 'Current Projects', 
                        href: '/CurrentProjects'
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
