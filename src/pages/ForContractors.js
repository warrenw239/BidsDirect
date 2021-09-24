import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/NavBar.css';

//TODO: more to add here. do not change to implicit return
const ForContractors = () => {
    return (
        <>
            <NavBar
                buttons={[]}
                menuOptions={[
                    {
                        html: (
                            <a className="mainNavLink" href="/">
                                Log In
                            </a>
                        ),

                        key: 'login',
                    },
                ]}
            />
        </>
    );
};

export default ForContractors;
