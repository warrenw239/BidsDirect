import React, { useState } from 'react';
import '../styles/NavBar.css';
import LoginButton from './LoginButton';
import LogOutButton from './LogOutButton';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
    const [navStatus, useNavBar] = useState(false);
    const { isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
        return (
            <div>
                <header className="header">
                    <div className="navContainer">
                        <span
                            className="logo"
                            style={{
                                color: '#fff',
                                fontStyle: 'italic',
                                fontWeight: '400',
                            }}
                        >
                            BidsDirect: Find The Best Fit For Your Next Project
                        </span>
                        <nav>
                            <LoginButton />
                            <ul
                                className="mainNav"
                                style={
                                    navStatus
                                        ? { transform: 'translateX(0)' }
                                        : null
                                }
                            >
                                <li>
                                    <a
                                        className="mainNavLink"
                                        href="/ForConsumers"
                                    >
                                        For Consumers
                                    </a>
                                </li>
                                <li>
                                    <a className="mainNavLink" href="#">
                                        For Contractors
                                    </a>
                                </li>
                                <li></li>
                            </ul>
                        </nav>
                        <button
                            onClick={() =>
                                useNavBar((currentStatus) => !currentStatus)
                            }
                            className={`navToggle ${navStatus ? 'open' : null}`}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                        <div
                            onClick={() =>
                                useNavBar((currentStatus) => !currentStatus)
                            }
                            className={`overlay ${navStatus ? 'open' : ''}`}
                        />
                    </div>
                </header>
                <div className="wrapper"></div>
            </div>
        );
    }
    if (isAuthenticated) {
        return (
            <div>
                <header className="header">
                    <div className="navContainer">
                        <span
                            className="logo"
                            style={{
                                color: '#fff',
                                fontStyle: 'italic',
                                fontWeight: '400',
                            }}
                        >
                            BidsDirect: Find The Best Fit For Your Next Project
                        </span>
                        <nav>
                            <LogOutButton />
                            <ul
                                className="mainNav"
                                style={
                                    navStatus
                                        ? { transform: 'translateX(0)' }
                                        : null
                                }
                            >
                                <li>
                                    <a
                                        className="mainNavLink"
                                        href="/ForConsumers"
                                    >
                                        For Consumers
                                    </a>
                                </li>
                                <li>
                                    <a className="mainNavLink" href="#">
                                        For Contractors
                                    </a>
                                </li>
                                <li></li>
                            </ul>
                        </nav>
                        <button
                            onClick={() =>
                                useNavBar((currentStatus) => !currentStatus)
                            }
                            className={`navToggle ${navStatus ? 'open' : null}`}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                        <div
                            onClick={() =>
                                useNavBar((currentStatus) => !currentStatus)
                            }
                            className={`overlay ${navStatus ? 'open' : ''}`}
                        />
                    </div>
                </header>
                <div className="wrapper"></div>
            </div>
        );
    }
};

const AuthNav = () => {
    const { isAuthenticated } = useAuth0();

    return <nav>{isAuthenticated ? <LogOutButton /> : <LoginButton />}</nav>;
};

export default NavBar;
