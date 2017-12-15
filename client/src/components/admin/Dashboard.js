// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar'; 

/**
 * Dashboard component for admin dashboard.
 *
 * @class Dashboard
 * @extends {Component}
 * @since  1.0
 */ 
class Dashboard extends Component {

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
                        <div class="btn-box-row row-fluid">
                            <a href="" class="btn-box big span4"><i class=" icon-book"></i><b>65%</b>
                                <p class="text-muted">
                                    Issued Books</p>
                            </a>
                            <a href="" class="btn-box big span4"><i class="icon-book"></i><b>15</b>
                                <p class="text-muted">
                                    Pending Books</p>
                            </a>
                            <a href="" class="btn-box big span4"><i class="icon-money"></i><b>15,152</b>
                                <p class="text-muted">
                                    Total Fines</p>
                            </a>
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

export default Dashboard;