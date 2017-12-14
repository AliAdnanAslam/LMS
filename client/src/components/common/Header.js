// Importing the necessary packages.
import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import isAuthorized from '../../utils/validation/isAuthorized';
import { getProfile } from '../apiCalls/getProfile';
import jwt from 'jsonwebtoken';

class Header extends Component {

/**
 * constructor
 *
 * @param {object} props
 * @since  1.0 
 */
constructor(props) {
    super(props);

    let isLoggedIn = isAuthorized();

    this.state = {
        isLoggedIn: isLoggedIn,
        isForgetPassword: this.props.forgetPassword,
        isLogIn: this.props.login,
        isSignUp: this.props.signup,
        isForgetPassword: this.props.resetPassword,
        hasLoggedOut: false,
        name: '',
        image: '',
        isAdmin: false,
    }

    this.logout = this.logout.bind(this);
}

componentDidMount(){

    if(isAuthorized()) {
        console.log("I'm authorized");
    getProfile({})
    .then(resp => {
        console.log(resp);
        let data = resp.data;
        this.setState({
            name: data.name,
            image: data.image,
        });
        let token = localStorage.getItem('token');
        let decodedId = '';
        jwt.verify(token, 'iReact', function(err, decoded) {
        if (err) console.log(err);
        decodedId = decoded.id;
        console.log(decodedId);
        });
        if( decodedId == '5a2f93a9ab39a821b8837aa5') {
            this.setState ({ isAdmin: true })
            console.log("admin set");
        }

    })
    .catch((err)=>console.log(err));
    }
}

logout(){
    localStorage.removeItem('token');
    this.setState({ hasLoggedOut: true })
}

/**
 * Render.
 *
 * @return {ReactElement} markup
 * @since  1.0
 */ 
render() {
    return (
        <div>
            { this.state.hasLoggedOut ? <Redirect to ='/' /> :
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
                                    <img src={this.state.image ? this.state.image : "/images/user.png"} alt="avatar" class="nav-avatar" />
                                    {this.state.name ? this.state.name : null}
                                    <b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        {this.state.isAdmin ?
                                            <li><Link to='/admin/dashboard'>Dashboard</Link></li> :
                                            <li><Link to='/user/dashboard'>Dashboard</Link></li> }
                                        <li><Link to='/user/profile'> Edit Profile </Link></li>
                                        <li><Link to='/user/changepassword'> Change Password </Link></li>
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
        </div>}
        </div>
    );
}
}

export default Header;
