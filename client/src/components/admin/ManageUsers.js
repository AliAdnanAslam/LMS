// Importing the necessary packages.
import React, {Component} from 'react';
import image from '../../images/user.png';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from '../common/SideBar';
 
/**
 * Home class proviedes the main interface of admin
 */ 
class ManageUsers extends Component {
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
                                <div class="module-option clearfix">
                                    <form>
                                    <div class="input-append pull-left">
                                        <input type="text" class="span3" placeholder="Filter by name..." />
                                        <button type="submit" class="btn">
                                            <i class="icon-search"></i>
                                        </button>
                                    </div>
                                    </form>
                                </div>
                                <div class="module-body">
                                    <div class="row-fluid">
                                        <div class="span6">
                                            <div class="media user well">
                                                <a class="media-avatar pull-left" href="">
                                                    <img src={ image } />
                                                </a>
                                                <div class="media-body">
                                                    <h3 class="media-title">
                                                        John Donga
                                                    </h3>
                                                    <p>
                                                        <small class="muted">Pakistan</small></p>
                                                    <div class="media-option btn-group shaded-icon">
                                                        <button class="btn btn-small">
                                                            <i class="icon-edit"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="span6">
                                            <div class="media user well">
                                                <a class="media-avatar pull-left" href="">
                                                    <img src={ image } />
                                                </a>
                                                <div class="media-body">
                                                    <h3 class="media-title">
                                                        Donga John</h3>
                                                    <p>
                                                        <small class="muted">Pakistan</small></p>
                                                    <div class="media-option btn-group shaded-icon">
                                                        <button class="btn btn-small">
                                                            <i class="icon-edit"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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