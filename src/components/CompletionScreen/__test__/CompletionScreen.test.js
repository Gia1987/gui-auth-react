import React from 'react';
import { shallow } from 'enzyme';
import CompletionScreen from '../CompletionScreen';

const setup = () => {
    const props = {
        details: {
            name: '',
            email: '',
            password: '',
            role: '',
            receiveProductUpdate: false,
            receiveOtherProductsInfo: false
        }
    };

    const component = shallow(<CompletionScreen {...props} />);
    const image = component.find('[data-test="green-mark"]');
    const message = component.find('[data-test="message"]');
    return {
        component,
        message,
        image
    };
};

describe('CompletionScreen', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
    it('should render span element with message', () => {
        const { message } = setup();

        expect(message.exists()).toEqual(true);

        expect(message.text()).toEqual(
            `Please verify your email address, you should have received an email from us already!`
        );
    });
    it('should render span element with message', () => {
        const { image } = setup();

        expect(image.exists()).toEqual(true);
        expect(image.props().alt).toEqual('');
    });
});
