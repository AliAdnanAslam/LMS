// Importing the necessary packages.
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import isAuthorized from '../../utils/validation/isAuthorized';

class Header extends Component {

constructor(props) {
    super(props);

    let isLoggedIn = isAuthorized();

    this.state = {
        isLoggedIn: isLoggedIn,
        isForgetPassword: this.props.forgetPassword,
        isLogIn: this.props.login,
        isSignUp: this.props.signup,
        isForgetPassword: this.props.resetPassword,
    }

    this.logout = this.logout.bind(this);
}


logout(){
    localStorage.removeItem('token');
}

render() {
	return (
        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
                        <i class="icon-reorder shaded"></i>
                    </a>
                    <Link to='/' class="brand">Hello Books</Link>
                    <div class="nav-collapse collapse navbar-inverse-collapse">

                        { this.state.isLoggedIn ?

                        <div>
                            <ul class="nav  pull-right">
                                <li class="nav-user dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown">
                                    <img src="/images/user.png" alt="avatar" class="nav-avatar" />
                                    Saqib
                                    <b class="caret"></b></a>
                                    <ul class="dropdown-menu">

                                        <li><Link to='/user/profile'> Edit Profile </Link></li>
                                        <li><a href="">Dashboard</a></li>
                                        <li class="divider"></li>
                                        <li><a onClick={this.logout}>Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        :  this.state.isLogIn ?

                        <ul class="nav pull-right">
                            <li><Link to='/signup'>
                                Sign Up
                            </Link></li>
                        </ul>

                        : this.state.isSignUp ?

                        <ul class="nav pull-right">
                            <li><Link to='/login'>
                                Log In
                            </Link></li>
                        </ul>

                        : <ul class="nav pull-right">
                            <li><Link to='/login'>
                                Log In
                            </Link></li>
                            <li><Link to='/signup'>
                                Sign Up
                            </Link></li>
                        </ul> }
                    </div>
                </div>
            </div>
        </div>
	);
}
}

export default Header;
