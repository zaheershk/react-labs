import React, { Fragment, useState } from 'react';

import { FormInput } from '../../../shared/FormInput';
import { Button } from '../../../shared/Button';
import { Dropdown } from '../../../shared/dropdown/Dropdown';
import { departmentList, priorityList } from '../../../../utils/Helpers';
import { addTicket } from '../../../../services/ticket.service';

const AddTicketForm = props => {
    const { addModal } = props;

    let departments = departmentList();
    let priorities = priorityList();

    const [department, setDepartment] = useState('Select Department');
    const [priority, setPriority] = useState('Select Priority');
    const [ticket, setTicket] = useState({
        data: {
            fullname: '',
            email: '',
            department: '',
            priority: '',
            subject: '',
            description: ''
        }
    });

    const {
        fullname,
        email,
        subject,
        description
    } = ticket.data;

    const getDropdownValue = item => {
        if (item.key === 'department') {
            setDepartment(item.title);
        }
        else {
            setPriority(item.title);
        }
    };

    const onChange = e => {
        const { name, value } = e.target;
        const { data } = ticket;
        setTicket({
            data: {
                ...data,
                [name]: value
            }
        });
    };

    const onAddTicket = async e => {
        e.preventDefault();

        const { data } = ticket;
        data.department = department;
        data.priority = priority;

        await addTicket(data);
        clearFormFields();
    };

    const clearFormFields = () => {
        setTicket({
            fullname: '',
            email: '',
            department: '',
            priority: '',
            subject: '',
            description: ''
        });
        setDepartment('Select Department');
        setPriority('Select Priority');
    };

    return (
        <Fragment>
            <form onSubmit={onAddTicket}>
                <div className='form-group'>
                    <FormInput
                        type='text'
                        name='fullname'
                        label='FullName'
                        className='form-control'
                        placeholder='Enter FullName'
                        value={fullname}
                        error=''
                        onChange={onChange} />
                </div>
                <div className='form-group'>
                    <FormInput
                        type='text'
                        name='email'
                        label='Email'
                        className='form-control'
                        placeholder='Enter Email'
                        value={email}
                        error=''
                        onChange={onChange} />
                </div>
                <div className='form-group'>
                    <Dropdown title={department}
                        label='Department'
                        list={departments}
                        getDropdownValue={getDropdownValue} />
                </div>
                <div className='form-group'>
                    <Dropdown title={priority}
                        label='Priority'
                        list={priorities}
                        getDropdownValue={getDropdownValue} />
                </div>
                <div className='form-group'>
                    <FormInput
                        type='text'
                        name='subject'
                        label='Subject'
                        className='form-control'
                        placeholder='Enter Subject'
                        value={subject}
                        error=''
                        onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea
                        name='description'
                        className='form-control'
                        row='5'
                        col='40'
                        value={description}
                        error=''
                        onChange={onChange}>
                    </textarea>
                    <Button
                        type='submit'
                        label='Add'
                        className='btn btn-primary'
                        disabled={!fullname || !email || !subject || !description || !department || !priorities}
                    />
                    <Button
                        type='submit'
                        label='Cancel'
                        className='btn btn-danger'
                        handleClick={() => addModal(false)}
                    />
                </div>
            </form>
        </Fragment>
    )
}

export { AddTicketForm } 
