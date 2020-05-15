import React from 'react'
import PropTypes from 'prop-types'

const FormInput = (props) => {
    const {
        title,
        type,
        name,
        value,
        onChange
    } = props;

    return (
        <div className="input-groups">
            <span className="label">{title}</span>
            <div className="range-container">
                <input
                    className="range-input"
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoComplete="false">
                </input>
            </div>
        </div>
    )
}

FormInput.propTypes = {
    title: PropTypes.string,
    type: PropTypes.oneOf(['text']),
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default FormInput

