import React, { useState } from 'react';
import '../styles/NavBar.css';
import LogOutButton from './LogOutButton';

const NavBarConsumerHome = () => {
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
            <LogOutButton />
            <ul
              className="mainNav"
              style={navStatus ? { transform: 'translateX(0)' } : null}
            >
              <li>
                <a className="mainNavLink" href="/securedConsumer">
                  Current Projects
                </a>
              </li>
              <li>
                <a className="mainNavLink" href="/startNewProject">
                  Start New Project
                </a>
              </li>
              <li>
                <a className="mainNavLink" href="/ForConsumers">
                  Find Contractors
                </a>
              </li>
              <li></li>
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

export default NavBarConsumerHome;