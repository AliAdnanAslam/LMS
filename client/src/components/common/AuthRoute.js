import React, {Component} from 'react';
import { Redirect, Route } from 'react-router-dom';
import isAuthorized from '../../utils/validation/isAuthorized';

const PrivateRoute = ({ component: Component, ...rest }) => (
<Route {...rest} render={(props) => (
isAuthorized === false
  ? <Component {...props} />
  : <Redirect to='/login' />
)} />
)
export default PrivateRoute;
