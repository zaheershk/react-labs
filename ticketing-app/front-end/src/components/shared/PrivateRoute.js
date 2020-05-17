import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = props => {

    const { isAuthenticated, component, ...rest } = props;

    return (
        <Route
            {...rest}
            render={props =>
                !isAuthenticated ?
                    (<Redirect to='/sign-in' />)
                    :
                    (<Component {...props} />)}>
        </Route>
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    {}
)(PrivateRoute);
