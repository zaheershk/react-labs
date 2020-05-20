import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';
import Card from '../card/Card';
import { TableElements } from '../table-elements/TableElements';
import AddTicket from '../tickets/add/AddTicket';
import { AuthToken } from '../../../utils/AuthToken';

const Dashboard = props => {

    const { token } = props;

    useEffect(() => {
        AuthToken(token);
    }, [token])

    return (
        <Fragment>
            <div className='row'>
                <div className='col-12'>
                    <div className='card-box'>
                        <Card />
                        <TableElements />
                        <AddTicket />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

Dashboard.propTypes = {
    token: PropTypes.string
};

const mapStateToProps = state => ({
    token: state.auth.token,
});

export default connect(
    mapStateToProps,
    {}
)(Dashboard);
