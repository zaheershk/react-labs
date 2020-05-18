import React, { Fragment } from 'react';

import './index.css';
import { Card } from '../card/Card';
import { TableElements } from '../table-elements/TableElements';
import { AddTicket } from '../tickets/add/AddTicket';

const Dashboard = () => {
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

export default Dashboard;
