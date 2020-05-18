import React, { Fragment, useState } from 'react';

import './index.css';
import { Box } from './Box';
import { Button } from '../../shared/Button';
import { Modal } from '../../shared/modal/Modal';

const Card = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const dismissModal = () => {
        setVisible(false);
    };

    return (
        <Fragment>
            <div>
                <Button
                    type='submit'
                    label='Add Ticket'
                    className='btn btn-primary btn-add'
                    handleCLick={() => showModal()}
                />
                <Modal
                    header='Add New Ticket'
                    visible={visible}
                    children='Test content...'
                    dismiss={dismissModal}
                />
                <div className='text-center mb-2'>
                    <div className='row'>
                        <Box title='Total Tickets' cardValue='100' iconClass='fas fa-tag' />
                        <Box title='Open Tickets' cardValue='40' iconClass='fas fa-archive' cardValueClass='text-success' />
                        <Box title='Closed Tickets' cardValue='20' iconClass='fas fa-shield-alt' cardValueClass='text-muted' />
                        <Box title='High Priority Tickets' cardValue='20' iconClass='fas fa-temperature-high' cardValueClass='text-danger' />
                        <Box title='Medium Priority Tickets' cardValue='10' iconClass='fas fa-folder-minus' cardValueClass='text-warning' />
                        <Box title='Low Priority Tickets' cardValue='40' iconClass='fas fa-battery-quarter' cardValueClass='text-muted' />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export { Card }
