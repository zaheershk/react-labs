import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RadioInput = props => {
    const {
        id,
        name,
        value,
        className,
        labelClassName,
        onChange,
        error
    } = props;

    return (
        <Fragment>
            <input
                id={id}
                type='radio'
                name={name}
                value={value}
                className={className}
                onChange={onChange}
                autoComplete='false'
            />
            <label
                className={labelClassName}
                style={{ color: error ? 'red' : '#36404a', fontWeight: 'normal' }}
            >
                {value}
            </label>
        </Fragment>
    )
}

RadioInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

export { RadioInput };
