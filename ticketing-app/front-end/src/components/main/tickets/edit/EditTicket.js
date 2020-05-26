import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Modal } from '../../../shared/modal/Modal';
import EditTicketForm from './EditTicketForm';
import { editModal } from '../../../../redux/actions/modal.actions';

const AddTicket = props => {
    const { edit, editModal } = props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(edit);
    }, [setVisible, edit]);

    const dismissModal = () => {
        editModal(false);
    };

    return (
        <Fragment>
            <Modal
                header='Edit Ticket'
                visible={visible}
                dismiss={dismissModal}
                children={<EditTicketForm editModal={editModal} />}
            />
        </Fragment>
    )
}

AddTicket.propTypes = {
    add: PropTypes.bool
};

const mapStateToProps = state => ({
    edit: state.modal.edit
});

export default connect(
    mapStateToProps,
    { editModal }
)(AddTicket);
