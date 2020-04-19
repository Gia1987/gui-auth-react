import {
    SET_EMAIL,
    SET_ROLE,
    SET_PASSWORD,
    SET_NAME,
    SET_PRODUCT_UPDATE,
    SET_OTHER_PRODUCTS_UPDATE
} from '../../../constants';
import { userDetails } from '../userDetails';

const initState = {
    name: '',
    email: '',
    password: '',
    role: '',
    receiveProductUpdate: false,
    receiveOtherProductsInfo: false
};

describe('userDetails reducer', () => {
    it('default should work', () => {
        const input = userDetails({}, { type: 'default' });
        const output = {};
        expect(input).toMatchObject(output);
    });

    it('SET_EMAIL should work', async () => {
        const payload = { value: 'test' };
        const input = await userDetails(initState, {
            type: SET_EMAIL,
            payload
        });
        const output = {
            ...initState,
            email: payload.value
        };

        expect(input).toEqual(output);
    });

    it('SET_PASSWORD should work', async () => {
        const payload = { value: 'test' };
        const input = await userDetails(initState, {
            type: SET_PASSWORD,
            payload
        });
        const output = {
            ...initState,
            password: payload.value
        };

        expect(input).toEqual(output);
    });

    it('SET_ROLE should work', async () => {
        const payload = { value: 'test' };
        const input = await userDetails(initState, { type: SET_ROLE, payload });
        const output = {
            ...initState,
            role: payload.value
        };

        expect(input).toEqual(output);
    });

    it('SET_NAME should work', async () => {
        const payload = { value: 'test' };
        const input = await userDetails(initState, { type: SET_NAME, payload });
        const output = {
            ...initState,
            name: payload.value
        };

        expect(input).toEqual(output);
    });
    it('SET_PRODUCT_UPDATE should work', async () => {
        const payload = { value: true };
        const input = await userDetails(initState, {
            type: SET_PRODUCT_UPDATE,
            payload
        });
        const output = {
            ...initState,
            receiveProductUpdate: payload.value
        };

        expect(input).toEqual(output);
    });

    it('SET_OTHER_PRODUCTS_UPDATE should work', async () => {
        const payload = { value: true };
        const input = await userDetails(initState, {
            type: SET_OTHER_PRODUCTS_UPDATE,
            payload
        });
        const output = {
            ...initState,
            receiveOtherProductsInfo: payload.value
        };

        expect(input).toEqual(output);
    });
});
