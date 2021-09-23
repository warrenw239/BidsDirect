import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ForConsumers from './pages/ForConsumers';
import LandingPage from './pages/LandingPage';

function App() {
  return ( 
    <Router>
      <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/ForConsumers" component={ForConsumers}></Route>
      </Switch>
    </Router>
  );
}

export default App;
