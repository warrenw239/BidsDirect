import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/NavBar.css';

//TODO: more to add here. do not change to implicit return
const LandingPage = () => {
    return (
        <>
            <NavBar
                showLogin={true}
                menuOptions={[
                    {
                        itemName: 'For Consumers',
                        href: '/ForConsumers'
                    },
                    {
                        itemName: 'For Contractors',
                        href: '/ForContractors'
                    },
                ]}
            />
        </>
    );
};

export default LandingPage;
