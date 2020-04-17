import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

const setup = () => {
    const props = {};

    const component = shallow(<Header {...props} />);

    return {
        component
    };
};

describe('Header', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
});
