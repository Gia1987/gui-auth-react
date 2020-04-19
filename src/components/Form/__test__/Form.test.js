import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';
import Form from '../Form';

const handleSubmitStub = stub();

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
        singleActionProp: () => {},
        error: false,
        currentView: 'form',
        handleSubmit: handleSubmitStub
    };

    const component = shallow(<Form {...props} />);
    const headerUser = component.find('[data-test="header-user"]');
    const headerPrivacy = component.find('[data-test="header-privacy"]');
    const headerDone = component.find('[data-test="header-done"]');
    const userDetails = component.find('[data-test="user-details"]');
    const btn = component.find('[data-test="btn"]');

    return {
        component,
        headerUser,
        headerPrivacy,
        headerDone,
        userDetails,
        btn,
        props
    };
};

describe('Form', () => {
    afterEach(() => {
        handleSubmitStub.resetHistory();
    });
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
    it('should render headerUser ', () => {
        const { headerUser } = setup();

        expect(headerUser.exists()).toEqual(true);

        expect(headerUser.text()).toEqual(`User`);
    });
    it('should render headerPrivacy ', () => {
        const { headerPrivacy } = setup();

        expect(headerPrivacy.exists()).toEqual(true);

        expect(headerPrivacy.text()).toEqual(`Privacy`);
    });
    it('should render headerDone ', () => {
        const { headerDone } = setup();

        expect(headerDone.exists()).toEqual(true);

        expect(headerDone.text()).toEqual(`Done`);
    });
    it('should render UserDetails componete with the rigth props', () => {
        const { userDetails, props } = setup();

        expect(userDetails.exists()).toEqual(true);

        expect(userDetails.props().details).toEqual(props.details);
        expect(userDetails.props().singleActionProp).toEqual(
            props.singleActionProp
        );
    });
    it('should render Privacy component  with rigth props when currentView is "privacy"', () => {
        const { component, props } = setup();

        component.setProps({ currentView: 'privacy' });

        const privacy = component.find('[data-test="privacy"]');

        expect(privacy.exists()).toEqual(true);
        expect(privacy.props().singleActionProp).toEqual(
            props.singleActionProp
        );
    });
    it('should render CompletionScreen component with rigth props when currentView is "completion"', () => {
        const { component, props } = setup();

        component.setProps({ currentView: 'completion' });

        const completionScreen = component.find('[data-test="completion"]');

        expect(completionScreen.exists()).toEqual(true);
        expect(completionScreen.props().details).toEqual(props.details);
    });
    it('should call handleSubmit when button is clicked', () => {
        const { btn } = setup();

        btn.simulate('click');

        expect(btn.exists()).toEqual(true);

        expect(handleSubmitStub.called).toEqual(true);
        expect(btn.props().type).toEqual('submit');
        expect(typeof btn.props().onClick).toEqual('function');
    });

    it('should render errorMessage when error is true', () => {
        const { component } = setup();

        component.setProps({ error: true });

        const errorMessage = component.find('[data-test="error"]');
        expect(errorMessage.exists()).toEqual(true);
        expect(errorMessage.text()).toEqual(
            'Please check your details. One or more of the mandatory fields are missing or are not valid.'
        );
    });
});
