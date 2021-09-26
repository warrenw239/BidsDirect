import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginButton from './LogInButton';
import LogOutButton from './LogOutButton';
import '../styles/NavBar.css';

const NavBar = ({
    showLogin = false,
    showLogout = false,
    menuOptions = [],
}) => {
    const [navStatus, useNavBar] = useState(false);
    return (
        <>
            <header className="header">
                <div className="navContainer">
                    <span className="logo">
                        BidsDirect: Find The Best Fit For Your Next Project
                    </span>
                    <nav>
                        {showLogin && <LoginButton />}
                        {showLogout && <LogOutButton />}
                        <ul
                            className="mainNav"
                            style={
                                navStatus
                                    ? { transform: 'translateX(0)' }
                                    : null
                            }
                        >
                            {menuOptions.map(({ itemName, href }) => (
                                <li key={itemName}>
                                    <a href={href}>{itemName}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        onClick={() => useNavBar((currentStatus) => !currentStatus)}
                        className={`navToggle ${navStatus ? 'open' : null}`}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                    <div
                        onClick={() => useNavBar((currentStatus) => !currentStatus)}
                        className={`overlay ${navStatus ? 'open' : ''}`}
                    />
                </div>
            </header>
        </>
    );
};

NavBar.propTypes = {
    buttons: PropTypes.array,
    menuOptions: PropTypes.array,
    showLogin: PropTypes.bool,
    showLogout: PropTypes.bool,
};

export default NavBar;
