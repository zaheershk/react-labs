import React, { Fragment } from 'react';

import { FormInput } from '../../../shared/FormInput';
import { Button } from '../../../shared/Button';

const AddTicketForm = () => {

    const onChange = e => { };

    return (
        <Fragment>
            <form>
                <div className='form-group'>
                    <FormInput
                        type='text'
                        name='fullname'
                        label='FullName'
                        className='form-control'
                        placeholder='Enter FullName'
                        value=''
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
                        value=''
                        error=''
                        onChange={onChange} />
                </div>
                <div className='form-group'>
                    <FormInput
                        type='text'
                        name='department'
                        label='Department'
                        className='form-control'
                        placeholder='Select Department'
                        value=''
                        error=''
                        onChange={onChange} />
                </div>
                <div className='form-group'>
                    <FormInput
                        type='text'
                        name='priority'
                        label='Priority'
                        className='form-control'
                        placeholder='Select Priority'
                        value=''
                        error=''
                        onChange={onChange} />
                </div>
                <div className='form-group'>
                    <FormInput
                        type='text'
                        name='subject'
                        label='Subject'
                        className='form-control'
                        placeholder='Enter Subject'
                        value=''
                        error=''
                        onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea
                        className='form-control name=description'
                        row='5'
                        col='40'
                        value=''
                        error=''
                        onChange={onChange}>
                    </textarea>
                    <Button
                        type='submit'
                        label='Add'
                        className='btn btn-primary'
                    />
                    <Button
                        type='submit'
                        label='Cancel'
                        className='btn btn-danger'
                    />
                </div>
            </form>
        </Fragment>
    )
}

export { AddTicketForm } 
