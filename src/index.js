import React from 'react';
import App from './App';
import Auth0providerWithHistory from './auth0-provider-with-history';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Auth0providerWithHistory>
        <App />
    </Auth0providerWithHistory>,
    document.getElementById('root'),
);
