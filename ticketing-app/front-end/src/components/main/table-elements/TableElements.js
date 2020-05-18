import React, { Fragment } from 'react'

import { Entries } from './elements/Entries';
import { Table } from './table/Table';

const TableElements = () => {
    return (
        <Fragment>
            <div className='row'>
                <label style={labelOneStyle}>Show</label>
                <Entries />
                <label style={labelTwoStyle} >Entries</label>
            </div>
            <Table />
        </Fragment>
    )
}

const labelOneStyle = {
    color: "#8a929a",
    width: 'auto',
    marginLeft: '15px',
    marginRight: '5px'
}

const labelTwoStyle = {
    color: '#8a929a',
    width: 'auto',
    marginLeft: '5px',
    marginTop: '1px'
}

export { TableElements }
