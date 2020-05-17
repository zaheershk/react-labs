import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const {
        label,
        type,
        className,
        handleClick
    } = props;

    return (
        <Fragment>
            <button type={type} className={className} onClick={handleClick} >
                {label}
            </button>
        </Fragment>
    )
}

Button.defaultProps = {
    type: 'submit',
    className: ''
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    handleClick: PropTypes.func,
}

export { Button };
