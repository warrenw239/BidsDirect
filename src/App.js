import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ForConsumers from './pages/ForConsumers';
import LandingPage from './pages/LandingPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage}></Route>
            </Switch>
        </Router>
    );
};

export default App;
