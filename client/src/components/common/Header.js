// Importing the necessary packages.
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }


    logout(){
        localStorage.removeItem('token');
    }

    checkPage(props) {
        // Checks if page is authenitcation page.
        let authenticationPage =  this.props.login || this.props.signup || this.props.forgetPassword;


        // If user is logged in to the system.
        if (this.props.userLoggedIn) {
            return (
                <div>

                    <ul class="nav  pull-right">
                        <li><a href="">Support </a></li>
                        <li class="nav-user dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="images/user.png" alt="avatar" class="nav-avatar" />
                            <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="">Your Profile</a></li>
                                <li><a href="">Edit Profile</a></li>
                                <li><a href="">Account Settings</a></li>
                                <li class="divider"></li>
                                <li><a onClick={this.logout}>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        } else if(authenticationPage) {    // If page is authentication page.// If page is not authentication page.
            let rightNavMessage = '';
            let rightNavLink = '';
            if (this.props.signup) {
                rightNavMessage = 'Log In';
                rightNavLink = '/login'
            } else if (this.props.login) {
                rightNavMessage = 'Sign Up';
                rightNavLink = '/signup'
            } else {
                rightNavMessage = 'Sign Up';
                rightNavLink = '/signup'
            }

            return (
                <ul class="nav pull-right">
                    <li><Link to={ rightNavLink }>
                        { rightNavMessage }
                    </Link></li>
                </ul>
            );
        } else {
            return (
                <ul class="nav pull-right">
                    <li><Link to='/login'>
                        Log In
                    </Link></li>
                    <li><Link to='/signup'>
                        Sign Up
                    </Link></li>
                </ul>
            );
        }
    }

    /**
     * rendr
     */
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
                            { this.checkPage() }
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default Header;
