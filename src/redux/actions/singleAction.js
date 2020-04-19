/* eslint-disable import/prefer-default-export */
export const singleAction = ({ type, payload }) => dispatch => {
    dispatch({
        type,
        payload
    });
};
