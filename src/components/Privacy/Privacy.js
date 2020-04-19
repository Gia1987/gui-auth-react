import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';
import { SET_OTHER_PRODUCTS_UPDATE, SET_PRODUCT_UPDATE } from '../../constants';

const Privacy = ({ singleActionProp }) => {
    const [firstCheckedValue, setFirstChecked] = useState(false);
    const [secondCheckedValue, setSecondChecked] = useState(false);

    const handleFirstChecked = () => {
        setFirstChecked(!firstCheckedValue);
        singleActionProp({
            type: SET_PRODUCT_UPDATE,
            payload: { value: !firstCheckedValue }
        });
    };
    const handleSecondChecked = () => {
        setSecondChecked(!secondCheckedValue);
        singleActionProp({
            type: SET_OTHER_PRODUCTS_UPDATE,
            payload: { value: !secondCheckedValue }
        });
    };
    return (
        <div className="privacy">
            <Checkbox
                className="checkbox"
                onClick={handleFirstChecked}
                label="Receive updates about Tray.io product by email."
                checked={firstCheckedValue}
                data-test="checkbox-0"
            />
            <Checkbox
                className="checkbox"
                onClick={handleSecondChecked}
                label="Receive communication by email for other products created by the Tray.io team."
                checked={secondCheckedValue}
                data-test="checkbox-1"
            />
        </div>
    );
};

Privacy.propTypes = {
    singleActionProp: PropTypes.func.isRequired
};
export default Privacy;
