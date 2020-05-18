import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Modal = props => {
    const {
        header,
        visible,
        children,
        dismiss
    } = props;

    return (
        <Fragment>
            {
                visible ?
                    <div className='modal-wrapper'>
                        <div className='modal-box'>
                            <div className='modal-box-header'>
                                <h3>
                                    {header}
                                </h3>
                                <button onClick={dismiss}>
                                    x
                                </button>
                            </div>
                            {children}
                        </div>
                        <div className='modal-bg'></div>
                    </div>
                    :
                    null
            }
        </Fragment>
    )
}

Modal.propTypes = {
    header: PropTypes.string,
    visible: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
    dismiss: PropTypes.func.isRequired
};

export { Modal }
