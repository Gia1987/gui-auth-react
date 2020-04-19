import React from 'react';
import { mount } from 'enzyme';
import { stub } from 'sinon';
import UserDetails from '../UserDetails';
import {
    SET_EMAIL,
    SET_ROLE,
    SET_NAME,
    SET_PASSWORD
} from '../../../constants';

const singleActionProp = stub();

const setup = () => {
    const props = {
        details: {
            name: '',
            email: '',
            password: '',
            role: '',
            receiveProductUpdate: false,
            receiveOtherProductsInfo: false
        },
        singleActionProp
    };

    const component = mount(<UserDetails {...props} />);

    const nameInput = component.find(`[data-test="name"]`);
    const emailInput = component.find(`[data-test="email"]`);
    const passwordInput = component.find(`[data-test="password"]`);
    const roleInput = component.find(`[data-test="role"]`);

    return {
        component,
        nameInput,
        emailInput,
        passwordInput,
        roleInput,
        props
    };
};

describe('UserDetails', () => {
    afterEach(() => {
        singleActionProp.resetHistory();
    });

    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });

    it('should render nameInput and pass the right props', () => {
        const { nameInput, props } = setup();

        expect(nameInput.exists()).toEqual(true);

        expect(nameInput.props().title).toEqual('name: *');
        expect(nameInput.props().action).toEqual(SET_NAME);
        expect(nameInput.props().placeholder).toEqual('Name');
        expect(nameInput.props().value).toEqual(props.details.name);
        expect(typeof nameInput.props().handleChange).toEqual('function');
    });
    it('should render roleInput and pass the right props', () => {
        const { roleInput, props } = setup();

        expect(roleInput.exists()).toEqual(true);

        expect(roleInput.props().title).toEqual('role:');
        expect(roleInput.props().action).toEqual(SET_ROLE);
        expect(roleInput.props().placeholder).toEqual('Role');
        expect(roleInput.props().value).toEqual(props.details.role);
        expect(typeof roleInput.props().handleChange).toEqual('function');
    });
    it('should render emailInput and pass the right props', () => {
        const { emailInput, props } = setup();

        expect(emailInput.exists()).toEqual(true);

        expect(emailInput.props().title).toEqual('email: *');
        expect(emailInput.props().action).toEqual(SET_EMAIL);
        expect(emailInput.props().placeholder).toEqual('example@email.com');
        expect(emailInput.props().value).toEqual(props.details.email);
        expect(typeof emailInput.props().handleChange).toEqual('function');
    });
    it('should render passwordInput and pass the right props', () => {
        const { passwordInput, props } = setup();

        expect(passwordInput.exists()).toEqual(true);

        expect(passwordInput.props().title).toEqual('password: *');
        expect(passwordInput.props().action).toEqual(SET_PASSWORD);
        expect(passwordInput.props().placeholder).toEqual('password');
        expect(passwordInput.props().value).toEqual(props.details.password);
        expect(typeof passwordInput.props().handleChange).toEqual('function');
    });
});
