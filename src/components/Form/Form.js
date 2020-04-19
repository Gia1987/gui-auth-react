import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import UserDetails from '../UserDetails';
import Privacy from '../Privacy';
import CompletionScreen from '../CompletionScreen';

const Form = ({
    handleSubmit,
    currentView,
    error,
    details,
    singleActionProp
}) => {
    return (
        <div className="form-card">
            <div className="form-header">
                <span
                    data-test="header-user"
                    className={
                        currentView === 'form' ? 'current-page' : 'element'
                    }
                >
                    User
                </span>
                <span
                    data-test="header-privacy"
                    className={
                        currentView === 'privacy' ? 'current-page' : 'element'
                    }
                >
                    Privacy
                </span>
                <span
                    data-test="header-done"
                    className={
                        currentView === 'completion'
                            ? 'current-page'
                            : 'element'
                    }
                >
                    Done
                </span>
            </div>

            <div className="form-body">
                {currentView !== 'completion' ? (
                    <>
                        <div className="container">
                            {currentView === 'form' && (
                                <UserDetails
                                    data-test="user-details"
                                    details={details}
                                    singleActionProp={singleActionProp}
                                />
                            )}
                            {currentView === 'privacy' && (
                                <Privacy
                                    data-test="privacy"
                                    singleActionProp={singleActionProp}
                                />
                            )}
                        </div>
                        <div data-test="error" className="error-message">
                            {error
                                ? `Please check your details. One or more of the mandatory fields are missing or are not valid.`
                                : ''}
                        </div>
                        <div className="btn">
                            <Button
                                data-test="btn"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <CompletionScreen
                            data-test="completion"
                            details={details}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    currentView: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    details: PropTypes.shape({
        name: PropTypes.string,
        role: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string
    }).isRequired,
    singleActionProp: PropTypes.func.isRequired
};

export default Form;
