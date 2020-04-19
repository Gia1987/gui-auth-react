import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validateDetails } from '../../utils';
import { singleAction } from '../../redux/actions';
import Form from './Form';

export const FormContainer = ({ details, singleActionProp }) => {
    const [error, setErrorValue] = useState(false);
    const [currentView, setView] = useState('form');

    const handleSubmit = () => {
        if (currentView === 'form') {
            // validate details
            if (validateDetails(details)) {
                setErrorValue(false);
                setView('privacy');
            } else {
                setErrorValue(true);
            }
        }
        if (currentView === 'privacy') {
            setView('completion');
        }
    };
    return (
        <Form
            handleSubmit={handleSubmit}
            error={error}
            currentView={currentView}
            details={details}
            singleActionProp={singleActionProp}
            data-test="form"
        />
    );
};

FormContainer.propTypes = {
    details: PropTypes.shape({
        name: PropTypes.string,
        role: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string
    }).isRequired,
    singleActionProp: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    details: state.userDetails
});

const mapDispatchToProps = dispatch => ({
    singleActionProp: props => dispatch(singleAction(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
