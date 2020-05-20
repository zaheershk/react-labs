import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';
import { Box } from './Box';
import { Button } from '../../shared/Button';
import { addModal } from '../../../redux/actions/modal.actions';

const Card = props => {
    const { addModal } = props;

    return (
        <Fragment>
            <div>
                <Button
                    type='submit'
                    label='Add Ticket'
                    className='btn btn-primary btn-add'
                    handleClick={() => addModal(true)}
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

Card.propTypes = {
    addModal: PropTypes.func.isRequired
};

export default connect(
    null,
    { addModal }
)(Card);

