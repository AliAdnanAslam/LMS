// Importing the necessary packages.
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import image from '../../images/user.png';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { getAllUsers } from '../apiCalls/getAllUsers';


/**
 * Home class proviedes the main interface of admin
 */
class ManageUsers extends Component {

constructor(props) {
    super(props);
    this.state = {
        users :[],
        exists: false,
    }
}

componentDidMount(){
    getAllUsers({})
    .then(resp => {
        this.setState( {users: resp.data, exists: true} );
        console.log(this.state.users);
        })
    .catch((err)=>console.log(err));
}


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
                                        <input type="text" class="span3" placeholder="Filter by registration number..." />
                                        <button type="submit" class="btn">
                                            <i class="icon-search"></i>
                                        </button>
                                    </div>
                                    </form>
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
                                                        <Link to='/admin/modifyuser'>
                                                            <button class="btn btn-small">
                                                                <i class="icon-edit"></i>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                            ) : null
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
