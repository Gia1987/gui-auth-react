import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import { COMPANY_SHORT } from '../../../constants';

const setup = () => {
    const component = shallow(<Header />);
    const logo = component.find('[data-test="logo"]');

    return {
        component,
        logo
    };
};

describe('Header', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
    it('should render logo correctly and pass the right props', () => {
        const { logo } = setup();

        expect(logo.exists()).toEqual(true);

        expect(logo.props().alt).toEqual(COMPANY_SHORT);
    });
});
