import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

import './index.css';
import Card from '../card/Card';
import { TableElements } from '../table-elements/TableElements';
import AddTicket from '../tickets/add/AddTicket';
import EditTicket from '../tickets/edit/EditTicket';
import { AuthToken } from '../../../utils/AuthToken';
import { allTickets, updateTableEntries } from '../../../redux/actions/ticket.actions';
import { getUser } from '../../../redux/actions/user.actions';

const API_ENDPOINT = 'http://localhost:4000';

const Dashboard = props => {
    const socket = socketIOClient(API_ENDPOINT);

    const { token, allTickets, updateTableEntries, getUser } = props;

    useEffect(() => {
        const dashboardMethods = () => {
            AuthToken(token);
            allTickets();
            updateTableEntries(5);
            getUser();
        };

        dashboardMethods();
        socket.on('refreshPage', () => {
            dashboardMethods();
        });
    }, [token, allTickets, socket, updateTableEntries, getUser]);

    return (
        <Fragment>
            <div className='row'>
                <div className='col-12'>
                    <div className='card-box'>
                        <Card />
                        <TableElements />
                        <AddTicket />
                        <EditTicket />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

Dashboard.propTypes = {
    token: PropTypes.string,
    allTickets: PropTypes.func.isRequired,
    updateTableEntries: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    token: state.auth.token,
});

export default connect(
    mapStateToProps,
    { allTickets, updateTableEntries, getUser }
)(Dashboard);
