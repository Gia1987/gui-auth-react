import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

const setup = () => {
    const props = {};

    const component = shallow(<Footer {...props} />);

    return {
        component
    };
};

describe('Footer', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
});
