import React from 'react';
import LoginButton from '../components/LogInButton';
import NavBar from '../components/NavBar';
import '../styles/NavBar.css';

//TODO: more to add here. do not change to implicit return
const LandingPage = () => {
    return (
        <>
            <NavBar
                buttons={[{html: <LoginButton />, key: 'loginbutton'}]}
                menuOptions={[
                    {
                        html: (
                            <a className="mainNavLink" href="/ForConsumers">
                                For Consumers
                            </a>
                        ),
                        key: 'ForConsumers',
                    },
                    {
                        html: (
                            <a className="mainNavLink" href="/ForContractors">
                                For Contractors
                            </a>
                        ),
                        key: 'ForContractors',
                    },
                ]}
            />
        </>
    );
};

export default LandingPage;
