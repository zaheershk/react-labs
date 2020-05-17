import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FormInput = props => {
    const {
        id,
        label,
        type,
        name,
        value,
        placeholder,
        className,
        onChange,
        error
    } = props;

    return (
        <Fragment>
            <label htmlFor={name}>{label}</label>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                className={className}
                onChange={onChange}
                autoComplete='false'
                style={{ border: error ? 'solid 1px red' : '' }}
            />
            {
                error ? <p style={{ color: 'red', fontSize: '14px' }}>{error}</p> : ''
            }
        </Fragment>
    )
}

FormInput.defaultProps = {
    type: 'text',
    className: ''
}

FormInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

export { FormInput };
