import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';
import Privacy from '../Privacy';

const singleActionProp = stub();

const setup = () => {
    const props = {
        singleActionProp
    };

    const component = shallow(<Privacy {...props} />);

    const checkbox0 = component.find(`[data-test="checkbox-0"]`);
    const checkbox1 = component.find(`[data-test="checkbox-1"]`);

    return {
        component,
        checkbox0,
        checkbox1,
        props
    };
};

describe('Privacy', () => {
    afterEach(() => {
        singleActionProp.resetHistory();
    });

    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });

    it('should render checkbox0 and pass the right props', () => {
        const { checkbox0 } = setup();

        expect(checkbox0.exists()).toEqual(true);

        expect(checkbox0.props().checked).toEqual(false);
        expect(checkbox0.props().label).toEqual(
            'Receive updates about Tray.io product by email.'
        );
        expect(typeof checkbox0.props().onClick).toEqual('function');
    });
    it('should render checkbo1 and pass the right props', () => {
        const { checkbox1 } = setup();

        expect(checkbox1.exists()).toEqual(true);

        expect(checkbox1.props().checked).toEqual(false);
        expect(checkbox1.props().label).toEqual(
            'Receive communication by email for other products created by the Tray.io team.'
        );
        expect(typeof checkbox1.props().onClick).toEqual('function');
    });
});
