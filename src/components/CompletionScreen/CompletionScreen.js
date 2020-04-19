/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import completionMark from '../../assets/img/completionMark.png';

const CompletionScreen = ({ details }) => {
    console.log(details);
    return (
        <div className="completion">
            <img
                alt=""
                src={completionMark}
                className="completion-image"
                data-test="green-mark"
            />
            <span className="message" data-test="message">
                Please verify your email address, you should have received an
                email from us already!
            </span>
        </div>
    );
};

CompletionScreen.propTypes = {
    details: PropTypes.shape({
        name: PropTypes.string,
        role: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string
    }).isRequired
};

export default CompletionScreen;
