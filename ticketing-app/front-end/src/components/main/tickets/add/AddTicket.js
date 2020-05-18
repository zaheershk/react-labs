import React, { Fragment, useState } from 'react';

import { Modal } from '../../../shared/modal/Modal';
import { AddTicketForm } from './AddTicketForm';

const AddTicket = () => {
    const [visible, setVisible] = useState(true);

    const dismissModal = () => {
        setVisible(false);
    };

    return (
        <Fragment>
            <Modal
                header='Add New Ticket'
                visible={visible}
                children={<AddTicketForm />}
                dismiss={dismissModal}
            />
        </Fragment>
    )
}

export { AddTicket }
