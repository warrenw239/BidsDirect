import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import Auth0providerWithHistory from './auth0-provider-with-history';

ReactDOM.render(
    <Router>
      <Auth0providerWithHistory>
        <App />
    </Auth0providerWithHistory>
    </Router>,
    document.getElementById('root'),
);


