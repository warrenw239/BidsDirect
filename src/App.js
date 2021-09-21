import React from 'react';
import './App.css';
import NavBarOut from './components/NavBarOut';
import { Switch, Router, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavBarIn from './components/NavBarIn';
// import ConsumerProfile from './components/ConsumerProfile';

function App() {
    const { isAuthenticated, isLoading, user } = useAuth0();


    if (isLoading) {
      return <div>loading....</div>;
    }
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
                {/* <ConsumerProfile /> */}
                {console.log(user)}
            </div>
        );
    }
}

export default App;
