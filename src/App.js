import React, { useEffect, useState } from 'react';
import './App.css';
import NavBarOut from './components/NavBarOut';
import {
  Switch,
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavBarIn from './components/NavBarIn';
import LandingPage from './Pages/LandingPage';
import ForConsumers from './Pages/ForConsumers';
import ForContractors from './Pages/ForContractors';
import LoggedInConsumer from './Pages/LoggedInConsumer';
import Loading from './Pages/Loading';
import LoggedInContractor from './Pages/LoggedInContractor';

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    // setDisplay(<NavBarIn />);
    return <Loading />;
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
  if (
    isAuthenticated &&
    user &&
    user['https://example.com/roles'] === 'Consumer'
  ) {
    console.log(user);
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LoggedInConsumer />
          </Route>
          <Route exact path="/securedConsumer">
            <div>secured page. add info about projects</div>
          </Route>
        </Switch>
      </Router>
    );
  }
  if (
    isAuthenticated &&
    user &&
    user['https://example.com/roles'] === 'Contractor'
  ) {
    console.log(user);
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LoggedInContractor />
          </Route>
          <Route exact path="/securedConsumer">
            <div>secured page. add info about projects</div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
