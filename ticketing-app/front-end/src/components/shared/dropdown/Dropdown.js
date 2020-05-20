import React, { Fragment, useState } from 'react'

import './index.css';

const Dropdown = props => {
    const { title, list, label, getDropdownValue } = props;
    let [listOpen, setListOpen] = useState(false);

    const toggleList = () => {
        setListOpen(!listOpen);
    };

    const selectItem = item => {
        getDropdownValue(item);
        toggleList();
    };

    return (
        <Fragment>
            <label htmlFor={label}>
                {label}
            </label>
            <div className='dd-header' onClick={toggleList}>
                <div className='dd-header-title'>
                    {title}
                </div>
                {
                    listOpen ?
                        <i className='fas fa-angle-up'></i> :
                        <i className='fas fa-angle-down'></i>
                }
            </div>
            {
                listOpen ?
                    <ul className='dd-list'>
                        {
                            list.map(item =>
                                <li className='dd-list-item'
                                    key={item.id}
                                    onClick={() => selectItem(item)}>
                                    {item.title}
                                </li>
                            )
                        }
                    </ul>
                    : null
            }
        </Fragment>
    )
}

export { Dropdown }
