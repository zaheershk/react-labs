import React, { Fragment } from 'react'

const Entries = () => {
    return (
        <Fragment>
            <div className='form-group'>
                <select
                    name='entries'
                    className='form-control form-control-sm'
                    value=''
                    onChange=''
                    style={selectTagStyle}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="All">All</option>
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

export { Entries }
