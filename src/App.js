import React from 'react';
import './App.css';
import NavBarOut from './components/NavBarOut';
import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavBarIn from './components/NavBarIn';
import LandingPage from './Pages/LandingPage';
import ForConsumers from './Pages/ForConsumers';
import ForContractors from './Pages/ForContractors';


function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return <div>loading....</div>;
  }
  if (!isAuthenticated) {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/ForConsumers">
            <ForConsumers />
          </Route>
          <Route exact path="/ForContractors">
           <ForContractors />
          </Route>
        </Switch>
      </Router>
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
