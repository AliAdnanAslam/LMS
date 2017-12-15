// Importing the necessary packages.
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import image from '../../images/user.png';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { getAllUsers } from '../apiCalls/getAllUsers';


/**
 * ManageUsers component for admin to add or modify users.
 *
 * @class ManageUsers
 * @extends {Component}
 * @since  1.0
 */
class ManageUsers extends Component {

/**
 * constructor
 *
 * @param {object} props
 * @since  1.0 
 */
constructor(props) {
    super(props);
    this.state = {
        users :[],
        originalUser: [],
        exists: false,
        searched: false,

    }
    this.search = this.search.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
}

/**
 * handle search form event onSubmit
 *
 * @param {SytheticEvent} event
 * @since  1.0
 */
search = event => {
    event.preventDefault();
    let query = document.getElementById('search-query').value;
    if(query) {
        console.log("im the query", query);
        this.setState( { searched: true });
        let user = this.state.originalUser.filter( user => {
          return user.registrationNo == query;
        });
        console.log("im the found user", user);
        if(user.length !== 0 ) {
            this.setState( { users: user, exists: true } );
        } else {
            console.log("no user");
            this.setState( { exists: false });
        }

    }
}

/**
 * Clear search form event clears search bar
 *
 * @param {SytheticEvent} event
 * @since  1.0
 */
clearSearch = event => {
    console.log("im in clear search");
    this.setState( { searched: false, exists: true, users: this.state.originalUser });
}

/**
 * componentDidMount provides lifecycle methods called after component mounts the DOM
 *
 * @since  1.0
 */
componentDidMount(){
    getAllUsers({})
    .then(resp => {
        this.setState( {users: resp.data, originalUser: resp.data, exists: true} );
        console.log(this.state.users);
        })
    .catch((err)=>console.log(err));
}

/**
 * Renders components to DOM.
 *
 * @return {ReactElement} markup
 * @since  1.0
 */ 
render() {
return (
<div>
    <Header userLoggedIn="true" />
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <SideBar />
                <div class="span9">
                    <div class="content">
                        <div class="module">
                            <div class="module-head">
                                <h3>
                                    All Members</h3>
                            </div>
                            <div class="module-option clearfix row">
                                <form>
                                <div class="input-append pull-left">
                                    <input type="text" class="span3" id="search-query" placeholder="Filter by registration number..." />
                                    <button type="submit" onClick={this.search} class="btn">
                                        <i class="icon-search"></i>
                                    </button>
                                </div>
                                </form>
                                {this.state.searched ?
                                    <form>
                                <div class="input-append pull-left">
                                    <button style = { {'marginLeft': '20px'} } type="submit" onClick={this.clearSearch} class="btn btn-danger"> Clear Search </button>
                                </div>
                                </form>

                                     : null}
                                <div class="pull-right">
                                    <Link to='/admin/adduser'>
                                    <button type="submit" class="btn btn-primary">
                                        Add User
                                    </button>
                                    </Link>
                                </div>
                            </div>
                            <div class="module-body">
                                <div class="row-fluid">
                                    { this.state.exists ? this.state.users.map(user =>


                                    <div class="span5">
                                        <div class="media well">
                                            <a class="media-avatar pull-left" href='javascript:void(0)'>
                                                <img src={ user.image ? user.image : image } />
                                            </a>
                                            <div class="media-body">
                                                <h3 class="media-title">
                                                    {user.name}</h3>
                                                <p>
                                                    <small class="muted">{user.registrationNo}</small></p>
                                                <div class=" btn-group shaded-icon">
                                                    <Link to={`/admin/modifyuser/${user._id}`}>
                                                        <button class="btn btn-small">
                                                            <i class="icon-edit"></i>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                        ) : <div> No User Found </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
);
}
}

export default ManageUsers;