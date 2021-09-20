/* eslint-disable react/react-in-jsx-scope */

import './App.css';
import NavBarOut from './components/NavBarOut';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavBarIn from './components/NavBarIn';

function App() {
    const { isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
        return (
            <div className="App">
                <NavBarOut />
            </div>
        );
    }
    if (isAuthenticated) {
        return (
            <div className="App">
                <NavBarIn />
            </div>
        );
    }
}

export default App;
