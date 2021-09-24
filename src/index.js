import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0providerWithHistory from './auth0-provider-with-history';

ReactDOM.render(
    <Auth0providerWithHistory>
        <App />
    </Auth0providerWithHistory>,
    document.getElementById('root'),
);
