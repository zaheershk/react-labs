import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import './index.css';
import { selectedTicket } from '../../../../redux/actions/ticket.actions';
import { editModal } from '../../../../redux/actions/modal.actions';
import { deleteTicket, closeTicket } from '../../../../services/ticket.service';

const TABLE_HEADER = [
    'ID',
    'FullName',
    'Subject',
    'Priority',
    'Status',
    'Created',
    'Completed',
    'Action'
];

const Table = props => {
    const { tickets, entries, selectedTicket, editModal } = props;

    const [tableTickets, setTableTickets] = useState(tickets);

    useEffect(() => {
        const tableEntries = tickets.slice(0, parseInt(entries, 10));
        setTableTickets(tableEntries);
    }, [setTableTickets, tickets, entries]);

    const openEditModal = ticket => {
        editModal(true);
        selectedTicket(ticket);
    };

    const deleteUserTicket = id => {
        deleteTicket(id);
    };

    const closeUserTicket = id => {
        closeTicket(id);
    };

    return (
        <Fragment>
            <div className='col-sm-12 table-responsive'>
                <table className='table table-centered mb-0' id='ticketTable'>
                    <thead className='font-14 bg-light'>
                        <tr>
                            {
                                TABLE_HEADER.map((tableHead, i) =>
                                    <th key={i}
                                        className='font-weight-medium'>
                                        {tableHead} &nbsp;&nbsp;
                                    <i className='fas fa-angle-up icon'></i>
                                    </th>
                                )}
                        </tr>
                    </thead>
                    <tbody className='font-14'>
                        {
                            tableTickets.map(ticket =>
                                <tr key={ticket._id}>
                                    <td>#{ticket.ticketId}</td>
                                    <td>{ticket.fullname}</td>
                                    <td>{ticket.subject}</td>
                                    <td>
                                        {
                                            ticket.priority === 'High' ?
                                                <span className='badge badge-danger'>
                                                    {ticket.priority}
                                                </span>
                                                :
                                                ticket.priority === 'Medium' ?
                                                    <span className='badge badge-warning'>
                                                        {ticket.priority}
                                                    </span>
                                                    :
                                                    <span className='badge badge-secondary'>
                                                        {ticket.priority}
                                                    </span>
                                        }
                                    </td>
                                    <td>
                                        {
                                            ticket.status === 'Open' ?
                                                <span className='badge badge-success'>
                                                    {ticket.status}
                                                </span>
                                                :
                                                <span className='badge badge-secondary'>
                                                    {ticket.status}
                                                </span>
                                        }
                                    </td>
                                    <td>{moment(ticket.created).format('DD/MM/YYYY')}</td>
                                    <td>{moment(ticket.dueDate).format('DD/MM/YYYY')}</td>
                                    <td>
                                        <Fragment>
                                            <a href='#!' className='btn text-white btn-sm'
                                                onClick={() => deleteUserTicket(ticket._id)}>
                                                <i className='fas fa-trash'></i>
                                            </a>
                                            <a href='#!' className='btn text-white btn-sm'
                                                onClick={() => closeUserTicket(ticket._id)}>
                                                <i className='fas fa-check'></i>
                                            </a>
                                            <a href='#!' className='btn text-white btn-sm'
                                                onClick={() => openEditModal(ticket)}>
                                                <i className='fas fa-pencil-alt'></i>
                                            </a>
                                        </Fragment>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

Table.propTypes = {
    tickets: PropTypes.array.isRequired,
    entries: PropTypes.any.isRequired,
    selectedTicket: PropTypes.func.isRequired,
    editModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    tickets: state.tickets.allTickets,
    entries: state.tickets.entries,
});

export default connect(
    mapStateToProps,
    { selectedTicket, editModal }
)(Table);

