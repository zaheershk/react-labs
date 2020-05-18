import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = props => {
    const { isAuthenticated } = props;

    const history = useHistory();

    const logoutUser = () => {
        history.push('/sign-in');
    };

    return (
        <Fragment>
            {
                isAuthenticated ?
                    <div className='navbar'>
                        <div className='container'>
                            <Link to={'/dashboard'} className='navbar-brand'>
                                Ticket App
                            </Link>
                            <div className='collapses navbar-collapses'>
                                <ul className='navbar-nav ml-auto'>
                                    <li className='nav-item'>
                                        <a href='#!' onClick={() => logoutUser()}>
                                            <i className='fas fa-sign-out-alt'></i>{' '}
                                            <span>Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    ''
            }
        </Fragment>
    )
}

Navbar.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    {}
)(Navbar);