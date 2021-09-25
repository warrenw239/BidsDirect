import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/NavBar.css';

//TODO: more to add here. do not change to implicit return
const ForConsumers = () => {
    return (
        <>
            <NavBar
                menuOptions={[
                    {
                        itemName: 'Login Page',
                        href: '/'
                    },
                ]}
            />
        </>
    );
};

export default ForConsumers;
