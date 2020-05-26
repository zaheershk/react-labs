import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateTableEntries } from '../../../../redux/actions/ticket.actions';

const Entries = props => {
    const { entries, tickets, updateTableEntries } = props;

    const [tableEntries, setTableEntries] = useState(entries);

    useEffect(() => {
        setTableEntries(entries);
    }, [setTableEntries, entries]);

    const onSelectTag = e => {
        updateTableEntries(e.target.value);
    }

    return (
        <Fragment>
            <div className='form-group'>
                <select
                    name='entries'
                    className='form-control form-control-sm'
                    value={tableEntries}
                    onChange={onSelectTag}
                    style={selectTagStyle}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value={tickets.length}>All</option>
                </select>
            </div>
        </Fragment>
    )
}

const selectTagStyle = {
    backgroundColor: '#8a929a',
    color: 'white',
    border: 'none',
    width: '100px',
    height: 'auto'
};

Entries.propTypes = {
    updateTableEntries: PropTypes.func.isRequired,
    entries: PropTypes.any.isRequired,
    tickets: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    entries: state.tickets.entries,
    tickets: state.tickets.allTickets,
});

export default connect(
    mapStateToProps,
    { updateTableEntries }
)(Entries);
