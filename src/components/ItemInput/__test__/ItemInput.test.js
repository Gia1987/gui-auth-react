import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';
import ItemInput from '../ItemInput';

const handleChangeStub = stub();

const setup = () => {
    const props = {
        action: 'SET_NAME',
        value: '',
        title: 'title',
        type: 'text',
        placeholder: '',
        handleChange: handleChangeStub
    };

    const component = shallow(<ItemInput {...props} />);

    const input = component.find(`[data-test="item-input"]`);
    const title = component.find('[data-test="title"]');

    return {
        component,
        input,
        title,
        props
    };
};

describe('ItemInput', () => {
    afterEach(() => {
        handleChangeStub.resetHistory();
    });
    it('should render correctly', () => {
        const { component } = setup();
        expect(component.exists()).toEqual(true);
    });
    it('should render title', () => {
        const { title, props } = setup();
        expect(title.text()).toEqual(props.title);
    });
    it('should render Input', () => {
        const { input } = setup();

        expect(input.exists()).toEqual(true);
    });

    it('should call handleChange when typing', () => {
        const { input, props } = setup();

        input.simulate('change', { target: { value: 'Jack' } }, props.action);

        expect(handleChangeStub.getCall(0).args[0]).toEqual(
            { target: { value: 'Jack' } },
            props.action
        );
    });

    it('should pass the right props', () => {
        const { input, props } = setup();

        expect(input.props().value).toEqual(props.value);
        expect(input.props().type).toEqual(props.type);
        expect(input.props().placeholder).toEqual(props.placeholder);
        expect(typeof input.props().onChange).toEqual('function');
    });
});
