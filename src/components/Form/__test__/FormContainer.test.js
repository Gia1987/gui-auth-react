import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FormContainer } from '../FormContainer';

const mockStore = configureMockStore([thunk]);
const store = mockStore();
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
        singleActionProp: () => {}
    };

    const component = shallow(
        <Provider store={store}>
            <FormContainer {...props} />
        </Provider>
    )
        .dive()
        .dive();
    const form = component.find('[data-test="form"]');

    return {
        component,
        form,
        props
    };
};

describe('FormContainer', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
    it('should render form with the right props', () => {
        const { form, props } = setup();

        expect(form.exists()).toEqual(true);

        expect(typeof form.props().handleSubmit).toEqual('function');
        expect(form.props().error).toEqual(false);
        expect(form.props().currentView).toEqual('form');
        expect(form.props().details).toEqual(props.details);
        expect(typeof form.props().singleActionProp).toEqual('function');
    });
});
