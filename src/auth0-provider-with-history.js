import React from 'react';
import PropTypes from 'prop-types';
import { Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

const Auth0providerWithHistory = ({ children }) => {
    const history = useHistory();
    const domain = process.env.REACT_APP_AUTHO_DOMAIN;
    const clientId = process.env.REACT_APP_AUTHO_CLIENT_ID;
    const PORT = process.env.PORT;
    const URL = process.env.API_URL;

    const onRedirectCallback = (appState) => history.push(appState?.returnTo);

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={`http://${URL}:${PORT}`}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

Auth0providerWithHistory.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Auth0providerWithHistory;
