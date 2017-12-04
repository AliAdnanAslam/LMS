// Importing the necessary packages.
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    /**
     * checkPage() function
     */
    checkPage(props) {
        // Checks if page is authenitcation page.
        let authenticationPage =  this.props.login || this.props.signup || this.props.forgetPassword;


        // If user is logged in to the system.
        if (this.props.userLoggedIn) {
            return (
                <ul class="nav  pull-right">
                    <li class="dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown">Dropdown
                        <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="">Item No. 1</a></li>
                            <li><a href="">Don't Click</a></li>
                            <li class="divider"></li>
                            <li class="nav-header">Example Header</li>
                            <li><a href="">A Separated link</a></li>
                        </ul>
                    </li>
                    <li><a href="">Support </a></li>
                    <li class="nav-user dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown">
                        <img src="images/user.png" alt="avatar" class="nav-avatar" />
                        <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="">Your Profile</a></li>
                            <li><a href="">Edit Profile</a></li>
                            <li><a href="">Account Settings</a></li>
                            <li class="divider"></li>
                            <li><a href="">Logout</a></li>
                        </ul>
                    </li>
                </ul>
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
                    <li><Link to='/forgetpassword'>
                        Forgot password?
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
                            <ul class="nav nav-icons">
                                <li class="active"><a href=""><i class="icon-envelope"></i></a></li>
                                <li><a href=""><i class="icon-eye-open"></i></a></li>
                                <li><a href=""><i class="icon-bar-chart"></i></a></li>
                            </ul>
                            <form class="navbar-search pull-left input-append" action="">
                            <input type="text" class="span3" />
                            <button class="btn" type="button">
                                <i class="icon-search"></i>
                            </button>
                            </form>
                            { this.checkPage() }
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default Header;
