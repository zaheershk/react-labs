import React, { Fragment } from 'react';

import './index.css';

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

const Table = () => {
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
                        <tr>
                            <td>12345</td>
                            <td>Harry Potter</td>
                            <td>Server Down</td>
                            <td><span className='badge badge-danger'>High</span></td>
                            <td><span className='badge badge-success'>Open</span></td>
                            <td>5/10/2020</td>
                            <td>5/18/2020</td>
                            <td>
                                <Fragment>
                                    <a className='btn text-white btn-sm'>
                                        <i className='fas fa-trash'></i>
                                    </a>
                                    <a className='btn text-white btn-sm'>
                                        <i className='fas fa-check'></i>
                                    </a>
                                    <a className='btn text-white btn-sm'>
                                        <i className='fas fa-pencil-alt'></i>
                                    </a>
                                </Fragment>
                            </td>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td>Harry Potter</td>
                            <td>Server Down</td>
                            <td><span className='badge badge-danger'>High</span></td>
                            <td><span className='badge badge-success'>Open</span></td>
                            <td>5/10/2020</td>
                            <td>5/18/2020</td>
                            <td>
                                <Fragment>
                                    <a className='btn text-white btn-sm'>
                                        <i className='fas fa-trash'></i>
                                    </a>
                                    <a className='btn text-white btn-sm'>
                                        <i className='fas fa-check'></i>
                                    </a>
                                    <a className='btn text-white btn-sm'>
                                        <i className='fas fa-pencil-alt'></i>
                                    </a>
                                </Fragment>
                            </td>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td>Harry Potter</td>
                            <td>Server Down</td>
                            <td><span className='badge badge-danger'>High</span></td>
                            <td><span className='badge badge-success'>Open</span></td>
                            <td>5/10/2020</td>
                            <td>5/18/2020</td>
                            <td>
                                <Fragment>
                                    <a className='btn text-white btn-sm'>
                                        <i className='fas fa-trash'></i>
                                    </a>
                                    <a className='btn text-white btn-sm'>
                                        <i className='fas fa-check'></i>
                                    </a>
                                    <a className='btn text-white btn-sm'>
                                        <i className='fas fa-pencil-alt'></i>
                                    </a>
                                </Fragment>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export { Table }
