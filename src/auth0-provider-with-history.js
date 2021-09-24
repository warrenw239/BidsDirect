import React from 'react';
import PropTypes from 'prop-types';
import { Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

const Auth0providerWithHistory = ({ children }) => {
    const history = useHistory();
    const domain = process.env.REACT_APP_AUTHO_DOMAIN;
    const clientId = process.env.REACT_APP_AUTHO_CLIENT_ID;

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

Auth0providerWithHistory.propTypes = {
    children: PropTypes.element
  };

export default Auth0providerWithHistory;
