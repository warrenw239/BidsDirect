import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ConsumerProjects.css';

const ConsumerProjects = ({ projects }) => {
    //TODO: ADD AWAITING AND ACCEPTED SECTION
    return <div className='project'>Projects: Awaiting Bid Acceptance
        {projects.map((project) => <div key={project.id}>{project.title}placeholder</div>)}
    </div>;
};

ConsumerProjects.propTypes = {
    projects: PropTypes.array.isRequired,
};

export default ConsumerProjects;
