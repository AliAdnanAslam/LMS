// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from '../common/SideBar';
import ManageBooks from './ManageBooks';
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
    						<ManageBooks />  
          	</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;