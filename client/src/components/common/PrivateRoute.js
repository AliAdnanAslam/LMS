// Importing the necessary packages.
import React, {Component} from 'react';
import { Redirect, Route } from 'react-router-dom';
import isAuthorized from '../../utils/validation/isAuthorized';

/**
 * Protects access of pages without authentication.
 *
 * @since  1.0
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
<Route {...rest} render={(props) => (
isAuthorized() === true
  ? <Component {...props} />
  : <Redirect to='/login' />
)} />
)
export default PrivateRoute;
