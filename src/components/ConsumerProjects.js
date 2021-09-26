import React from 'react';
import PropTypes from 'prop-types';

const ConsumerProjects = ({ projects }) => {
    
    return <div>Projects: Awaiting Bid Acceptance
        {projects.map((project) => <div key={project.id}>{project.title}</div>)}
    </div>;
};

ConsumerProjects.propTypes = {
    projects: PropTypes.array.isRequired,
};

export default ConsumerProjects;
