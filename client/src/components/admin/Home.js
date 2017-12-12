// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from '../common/SideBar';
import Profile from '../common/Profile';
import ManageBooks from './ManageBooks';
import ManageUsers from './ManageUsers';
import AddBook from './AddBook';
import ModifyBook from './ModifyBook';
 
/**
 * Home class proviedes the main interface of admin
 */ 
class Home extends Component {
  render() {
    return (
      <div>
    		<Header userLoggedIn="true" />
    		<div class="wrapper">
    			<div class="container">
            <div class="row">
    						<SideBar />
    						<ManageUsers />  
          	</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;