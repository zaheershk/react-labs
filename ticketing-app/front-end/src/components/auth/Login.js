import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.css';
import { FormInput } from '../shared/FormInput';
import { Button } from '../shared/Button';
import { validateInputs } from '../../utils/Helpers';
import { loginUser } from '../../redux/actions/auth.actions';

const Login = props => {
    const { loginUser, isAuthenticated, history, errors } = props;

    const [user, setUser] = useState({
        data: {
            username: '',
            password: ''
        }
    });
    const { username, password } = user.data;

    const [error, setError] = useState({
        usernameError: '',
        passwordError: ''
    });
    const { usernameError, passwordError } = error;

    const onLoginUser = e => {
        e.preventDefault();

        const isValid = validateInputs(user.data, setError);
        if (isValid) {
            loginUser(user.data);
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
                <form onSubmit={onLoginUser}>
                    <h3>Sign In</h3>
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

                    <Button
                        type='submit'
                        label='Sign In'
                        className='btn btn-primary btn-block' />

                    <p className='forgot-password text-right'>
                        Not yet registered? <Link to='/sign-up'>Register</Link>
                    </p>
                </form>

                {
                    errors ? <p className='error-feedback'>{errors}</p> : ''
                }
            </div>
        </div >
    )
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    errors: PropTypes.string
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
