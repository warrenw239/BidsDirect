import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LandingPage from './pages/LandingPage';
import ForContractors from './pages/ForContractors';

const App = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return <div>loading 123...</div>;
  }
  if (!isAuthenticated) {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route
            exact
            path="/ForContractors"
            component={ForContractors}
          ></Route>
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
            <div>logged in consumer</div>
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
           <div>logged in</div>
          </Route>
          <Route exact path="/securedConsumer">
            <div>secured page. add info about projects</div>
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default App;
