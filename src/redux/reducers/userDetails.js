/* eslint-disable import/prefer-default-export */
import {
    SET_EMAIL,
    SET_ROLE,
    SET_NAME,
    SET_PASSWORD,
    SET_PRODUCT_UPDATE,
    SET_OTHER_PRODUCTS_UPDATE
} from '../../constants';

const initState = {
    name: '',
    email: '',
    password: '',
    role: '',
    receiveProductUpdate: false,
    receiveOtherProductsInfo: false
};

export const userDetails = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_NAME:
            return {
                ...state,
                name: payload.value
            };
        case SET_EMAIL:
            return {
                ...state,
                email: payload.value
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: payload.value
            };
        case SET_ROLE:
            return {
                ...state,
                role: payload.value
            };
        case SET_PRODUCT_UPDATE:
            return {
                ...state,
                receiveProductUpdate: payload.value
            };
        case SET_OTHER_PRODUCTS_UPDATE:
            return {
                ...state,
                receiveOtherProductsInfo: payload.value
            };
        default:
            return state;
    }
};
