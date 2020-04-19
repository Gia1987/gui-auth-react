import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

const ItemInput = ({
    value,
    title,
    type,
    placeholder,
    handleChange,
    action
}) => {
    return (
        <div>
            <span data-test="title">{title}</span>
            <Input
                type={type}
                value={value}
                onChange={e => handleChange(e, action)}
                placeholder={placeholder}
                data-test="item-input"
            />
        </div>
    );
};

ItemInput.propTypes = {
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
    handleChange: PropTypes.func.isRequired
};

ItemInput.defaultProps = {
    type: 'text'
};

export default ItemInput;
