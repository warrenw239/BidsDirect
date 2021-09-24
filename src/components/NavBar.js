import React, { useState } from 'react';
import '../styles/NavBar.css';
import PropTypes from 'prop-types';

const NavBar = ({buttons, menuOptions}) => {
    const [navStatus, useNavBar] = useState(false);
    return (
        <>
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
                        {buttons.map((button, key = button.key) => <div key={key}>{button.html}</div>)}
                        <ul
                            className="mainNav"
                            style={
                                navStatus
                                    ? { transform: 'translateX(0)' }
                                    : null
                            }
                        >
                            {menuOptions.map((option, key = option.key) => <li key={key}>{option.html}</li>)}
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
            <div className="wrapper"></div>
        </>
    );
};

NavBar.propTypes = {
    buttons: PropTypes.array,
    menuOptions: PropTypes.array,
    key: PropTypes.string
};

export default NavBar;
