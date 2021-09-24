import { Button } from 'react-bootstrap';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogOutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button
            onClick={() => logout()}
            id="qsLogOutButton"
            variant="danger"
            className="btn-margin"
        >
            Log Out
        </Button>
    );
};

export default LogOutButton;
