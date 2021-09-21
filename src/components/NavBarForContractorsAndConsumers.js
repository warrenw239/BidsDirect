import React, { useState } from 'react';
import '../styles/NavBar.css';
import LoginButton from './LoginButton';

const NavBarForContractorsAndConsumers = () => {
  const [navStatus, useNavBar] = useState(false);
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
            <ul
              className="mainNav"
              style={navStatus ? { transform: 'translateX(0)' } : null}
            >
              <li>
                <a className="mainNavLink" href="/">
                  Login Page
                </a>
              </li>

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
    </div>
  );
};

export default NavBarForContractorsAndConsumers;
