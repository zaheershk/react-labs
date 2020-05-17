import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.css';
import { FormInput } from '../shared/FormInput';
import { RadioInput } from '../shared/RadioInput';
import { Button } from '../shared/Button';
import { validateInputs } from '../../utils/Helpers';
import { createUser } from '../../redux/actions/auth.actions';

const Register = props => {
    const { createUser, isAuthenticated, history, errors } = props;

    const [user, setUser] = useState({
        data: {
            username: '',
            password: '',
            role: ''
        }
    });
    const { username, password } = user.data;

    const [error, setError] = useState({
        usernameError: '',
        passwordError: '',
        roleError: ''
    });
    const { usernameError, passwordError, roleError } = error;

    const onRegisterUser = e => {
        e.preventDefault();

        const isValid = validateInputs(user.data, setError);
        if (isValid) {
            createUser(user.data);
        };
    };

    const onChange = e => {
        const { name, value } = e.target;
        const { data } = user;
        setUser({
            data: {
                ...data,
                [name]: value
            }
        });
    };

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/dashboard');
        };
    }, [isAuthenticated, history]);

    return (
        <div className="auth-wrapper" >
            <div className="auth-inner">
                <form onSubmit={onRegisterUser}>
                    <h3>Sign Up</h3>
                    <div className='form-group'>
                        <FormInput
                            type='text'
                            name='username'
                            label='Username'
                            className='form-control'
                            placeholder='Enter Username'
                            value={username}
                            error={usernameError}
                            onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <FormInput
                            type='password'
                            name='password'
                            label='Password'
                            className='form-control'
                            placeholder='Enter Password'
                            value={password}
                            error={passwordError}
                            onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label>Role</label><br />
                        <div className="form-check form-check-inline">
                            <RadioInput
                                id='rb-user'
                                name='role'
                                labelClassName='form-check-label'
                                className='form-check-input'
                                value='User'
                                error={roleError}
                                onChange={onChange} />
                        </div>
                        <div className="form-check form-check-inline">
                            <RadioInput
                                id='rb-admin'
                                name='role'
                                labelClassName='form-check-label'
                                className='form-check-input'
                                value='Admin'
                                error={roleError}
                                onChange={onChange} />
                        </div>
                    </div>

                    <Button
                        type='submit'
                        label='Sign Up'
                        className='btn btn-primary btn-block' />

                    <p className='forgot-password text-right'>
                        Already registered? <Link to='/sign-in'>Login</Link>
                    </p>
                </form>

                {
                    errors ? <p className='error-feedback'>{errors}</p> : ''
                }
            </div>
        </div >
    )
}

Register.propTypes = {
    createUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    errors: PropTypes.string
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { createUser }
)(Register);
