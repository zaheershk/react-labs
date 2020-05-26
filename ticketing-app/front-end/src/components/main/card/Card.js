import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import './index.css';
import { Box } from './Box';
import { Button } from '../../shared/Button';
import { addModal } from '../../../redux/actions/modal.actions';

const Card = props => {
    const { addModal, tickets } = props;

    const findByStatus = status => {
        return (_.filter(tickets, ['status', status])).length;
    };

    const findByPriority = priority => {
        return (_.filter(tickets, ['priority', priority])).length;
    };

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
                        <Box title='Total Tickets' cardValue={tickets.length} iconClass='fas fa-tag' />
                        <Box title='Open Tickets' cardValue={findByStatus('Open')} iconClass='fas fa-archive' cardValueClass='text-success' />
                        <Box title='Closed Tickets' cardValue={findByStatus('Closed')} iconClass='fas fa-shield-alt' cardValueClass='text-muted' />
                        <Box title='High Priority Tickets' cardValue={findByPriority('High')} iconClass='fas fa-temperature-high' cardValueClass='text-danger' />
                        <Box title='Medium Priority Tickets' cardValue={findByPriority('Medium')} iconClass='fas fa-folder-minus' cardValueClass='text-warning' />
                        <Box title='Low Priority Tickets' cardValue={findByPriority('Low')} iconClass='fas fa-battery-quarter' cardValueClass='text-muted' />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Card.propTypes = {
    addModal: PropTypes.func.isRequired,
    tickets: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    tickets: state.tickets.allTickets,
});

export default connect(
    mapStateToProps,
    { addModal }
)(Card);

