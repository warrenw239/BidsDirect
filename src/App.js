import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ForContractors from './pages/ForContractors';
import LandingPage from './pages/LandingPage';

function App() {
  return ( 
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/ForContractors" component={ForContractors}></Route>
      </Switch>
    </Router>
  );
}

export default App;
