import React from 'react';
import NavBar from '../components/NavBar';
import PropTypes from 'prop-types';

//TODO: ADD OTHER COMPNENTS AND FUNCTIONALITY
const CreateNewProject = ({ user }) => {
    console.info(user);
    return (
        <div>
            <NavBar 
            showLogout={true}
             menuOptions={[
                {
                    itemName: 'Current Projects',
                    href: '/'
                },
            ]}
            />
        </div>
    );
};

CreateNewProject.propTypes = {
    user: PropTypes.object.isRequired,
};

export default CreateNewProject;
