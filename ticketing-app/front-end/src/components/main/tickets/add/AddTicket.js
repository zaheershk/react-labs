import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Modal } from '../../../shared/modal/Modal';
import { AddTicketForm } from './AddTicketForm';
import { addModal } from '../../../../redux/actions/modal.actions';

const AddTicket = props => {
    const { add, addModal } = props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(add);
    }, [setVisible, add]);

    const dismissModal = () => {
        addModal(false);
    };

    return (
        <Fragment>
            <Modal
                header='Add New Ticket'
                visible={visible}
                dismiss={dismissModal}
                children={<AddTicketForm addModal={addModal} />}
            />
        </Fragment>
    )
}

AddTicket.propTypes = {
    add: PropTypes.bool
};

const mapStateToProps = state => ({
    add: state.modal.add
});

export default connect(
    mapStateToProps,
    { addModal }
)(AddTicket);
