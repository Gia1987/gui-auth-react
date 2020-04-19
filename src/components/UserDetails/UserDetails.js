import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ItemInput from '../ItemInput';
import { SET_EMAIL, SET_ROLE, SET_NAME, SET_PASSWORD } from '../../constants';

const UserDetails = ({ details, singleActionProp }) => {
    // dispacth action
    const handleChange = (e, action) => {
        singleActionProp({ type: action, payload: { value: e.target.value } });
    };
    return (
        <Form className="container">
            <Form.Field>
                <ItemInput
                    title="name: *"
                    action={SET_NAME}
                    handleChange={handleChange}
                    value={details.name}
                    placeholder="Name"
                    data-test="name"
                />
            </Form.Field>
            <Form.Field>
                <ItemInput
                    title="role:"
                    action={SET_ROLE}
                    handleChange={handleChange}
                    value={details.role}
                    placeholder="Role"
                    data-test="role"
                />
            </Form.Field>
            <Form.Field>
                <ItemInput
                    title="email: *"
                    action={SET_EMAIL}
                    handleChange={handleChange}
                    value={details.email}
                    placeholder="example@email.com"
                    data-test="email"
                />
            </Form.Field>
            <Form.Field>
                <ItemInput
                    title="password: *"
                    action={SET_PASSWORD}
                    handleChange={handleChange}
                    value={details.password}
                    placeholder="password"
                    type="password"
                    data-test="password"
                />
            </Form.Field>
        </Form>
    );
};

UserDetails.propTypes = {
    details: PropTypes.shape({
        name: PropTypes.string,
        role: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string
    }).isRequired,
    singleActionProp: PropTypes.func.isRequired
};

export default UserDetails;
