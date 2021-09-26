import React from 'react';
import App from './App';
import Auth0providerWithHistory from './auth0-provider-with-history';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Auth0providerWithHistory>
            <App />
        </Auth0providerWithHistory>
    </Router>,
    document.getElementById('root'),
);
